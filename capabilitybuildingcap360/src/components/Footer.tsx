import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Linkedin,
  Facebook,
  Instagram,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logo from "@/assets/cap360-logo.png";

const footerLinks = {
  About: [
    { label: "About Us", href: "/who-we-are/our-company" },
    { label: "Our Values", href: "/who-we-are/our-values" },
  ],
  "Explore Jobs": [{ label: "Search Careers", href: "/careers" }],
  "Contact Us": [{ label: "General Inquiries", href: "/contact" }],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/cap360%C2%B0/",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61579769093228",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/cap360.careers/",
    icon: Instagram,
  },
];

const Footer = () => {
  const { ref, isInView } = useScrollAnimation(0.05);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error();

      setStatus("success");
      setMessage("You're subscribed! Welcome aboard.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubscribe();
  };

  return (
    <footer className="bg-cap-navy border-t border-border py-12 md:py-16" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Newsletter */}
        <motion.div
          className="mb-10 pb-10 border-b border-border/30"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h3 className="text-xl font-bold mb-2">Stay ahead of the curve</h3>
          <p className="text-muted-foreground mb-5 max-w-md">
            Get the latest insights delivered to your inbox.
          </p>

          <div className="flex gap-3 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-secondary/50 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cap-blue transition-colors"
            />

            <button
              onClick={handleSubscribe}
              className="bg-orange-500 px-4 py-2 text-white flex items-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="animate-spin w-4 h-4" />
                  Loading
                </>
              ) : (
                <>
                  Subscribe <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {message && (
            <p className="mt-2 text-sm">
              {status === "success" ? "✅" : "❌"} {message}
            </p>
          )}
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-10">

          {/* Brand */}
          <div className="col-span-2">
            <img src={logo} alt="CAP360" className="h-10 mb-4" />
            <p className="text-sm text-muted-foreground mb-5">
              Capability Building Ecosystem — bringing together quality hiring, talent assessment, HR consulting, workforce upskilling, and career acceleration under one integrated platform.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center border rounded-full hover:text-blue-500"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-semibold mb-3">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t pt-6 flex justify-between flex-wrap gap-4">
          <p className="text-sm">© 2026 CAP360. All Rights Reserved.</p>

          <div className="flex gap-4">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-sm hover:underline">
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
