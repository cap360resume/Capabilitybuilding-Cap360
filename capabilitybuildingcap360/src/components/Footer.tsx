import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logo from "@/assets/cap360-logo.png";

const footerLinks = {
  "About CAP360": [
    { label: "About Us", href: "/who-we-are/our-company" },
    { label: "Our Values", href: "/who-we-are/our-values" },
  ],
  "Explore Jobs": [
    { label: "Search Careers", href: "/careers" },
  ],
  "Contact Us": [
    { label: "General Inquiries", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/cap360%C2%B0/" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61579769093228" },
  { name: "Instagram", href: "https://www.instagram.com/cap360.careers/" },
];

const Footer = () => {
  const { ref, isInView } = useScrollAnimation(0.05);

  return (
    <footer className="bg-cap-navy border-t border-border py-12 md:py-16" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Newsletter */}
        <motion.div
          className="mb-10 md:mb-14 pb-10 md:pb-12 border-b border-border/30"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Stay ahead of the curve</h3>
          <p className="text-muted-foreground text-sm md:text-base mb-5 max-w-md">
            Get the latest insights, research and perspectives delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-secondary/50 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cap-blue transition-colors"
            />
            <button className="bg-cap-orange text-background px-5 py-3 text-sm font-semibold hover:bg-cap-orange/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Subscribe
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-10 md:mb-14">

          {/* Brand col — full width on mobile, 2 cols on lg */}
          <motion.div
            className="col-span-2 lg:col-span-2"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src={logo} alt="CAP360" className="h-8 md:h-10 mb-4 md:mb-6" />
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5 max-w-sm">
              CAP360 is a full-spectrum Capability Building Ecosystem — bringing together quality hiring, talent assessment, HR consulting, workforce upskilling, and career acceleration under one integrated platform.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-muted-foreground hover:text-cap-blue transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links], i) => (
            <motion.div
              key={heading}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + 0.1 * i }}
            >
              <h4 className="font-semibold text-sm md:text-base mb-3 md:mb-4 text-foreground">{heading}</h4>
              <ul className="space-y-2 md:space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-border/30 pt-6 md:pt-8 flex flex-col gap-4 md:flex-row md:justify-between md:items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2026 CAP360. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            {["Privacy", "Terms of Use", "Cookie Policy", "Accessibility"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;