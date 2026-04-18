import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logo from "@/assets/cap360-logo.png";

const footerLinks = {
   "About CAP360": [
    { label: "About Us", href: "/who-we-are/our-company" },
    { label: "Leadership", href: "/who-we-are/our-values" },
     // or create separate page later
    // { label: "Annual Report", href: "/who-we-think" },
    // { label: "Corporate Citizenship", href: "/who-we-are" },
    // { label: "Inclusion & Diversity", href: "/who-we-are/our-values" },
  ],
  "Explore Jobs": [
    { label: "Search Careers", href: "/careers" },
    // { label: "Experienced", href: "/careers" },
    // { label: "Internships", href: "/careers" },
    // { label: "Job Alerts", href: "/careers" },
  ],
  "Contact Us": [
    { label: "General Inquiries", href: "/contact" },
    // { label: "Office Locations", href: "/who-we-are/office-locations" },
    // { label: "Media Relations", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/cap360%C2%B0/" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61579769093228" },
  { name: "Instagram", href: "https://www.instagram.com/cap360.careers/" }
];

const Footer = () => {
  const { ref, isInView } = useScrollAnimation(0.05);

  return (
    <footer className="bg-cap-navy border-t border-border py-16" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Newsletter signup */}
        <motion.div
          className="mb-16 pb-12 border-b border-border/30"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4">Stay ahead of the curve</h3>
          <p className="text-muted-foreground mb-6 max-w-md">
            Get the latest insights, research and perspectives delivered to your inbox.
          </p>
          <div className="flex gap-3 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-secondary/50 border border-border px-4 py-3 text-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cap-blue transition-colors"
            />
            <button className="bg-cap-orange text-background px-6 py-3 text-md font-semibold hover:bg-cap-orange/90 transition-colors flex items-center gap-2">
              Subscribe
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <img src={logo} alt="CAP360" className="h-10 mb-6" />
            <p className="text-md text-muted-foreground leading-relaxed mb-6">
              CAP360 is a leading global professional services company helping
              the world's leading businesses, governments and organizations
              build their digital core.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-xs text-muted-foreground hover:text-cap-blue transition-colors font-medium"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-semibold text-md mb-4 text-foreground">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-md text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 CAP360. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms of Use", "Cookie Policy", "Accessibility"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
