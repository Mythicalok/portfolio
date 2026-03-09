import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:aloksingh7587@gmail.com",
      label: "Email",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/alok-singh786ok",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/Mythicalok",
      label: "GitHub",
    },
  ];

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-foreground/80 font-light">
              © {currentYear} Alok Pratap Singh. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1 font-light">
              Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
