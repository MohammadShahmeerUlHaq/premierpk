import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Projects", href: "#projects" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden md:flex items-center justify-end py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+92 (0) 300 XXX XXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@premierpk.com</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-hero text-primary-foreground px-4 py-2 rounded-lg shadow-card">
              <h1 className="text-xl font-bold">PREMIER</h1>
              <p className="text-xs opacity-90">Engineering Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cta" size="lg">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="cta" className="mt-4">
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};