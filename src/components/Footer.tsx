import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  ArrowRight
} from "lucide-react";

export const Footer = () => {
  const productLinks = [
    "AMF/ATS Panel",
    "Control Panels", 
    "Motor Control Center",
    "Power Panels",
    "Cable Trays",
    "Cable Ladders"
  ];

  const projectLinks = [
    "Industrial Projects",
    "Commercial Buildings",
    "Educational Institutes", 
    "Healthcare Facilities",
    "Residential Complexes"
  ];

  const companyLinks = [
    "About Us",
    "Our Team",
    "Quality Policy",
    "Certifications",
    "Careers",
    "News & Updates"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-gradient-hero">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-6 opacity-90">
              Subscribe to our newsletter for the latest updates on electrical engineering solutions and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-background/10 border-primary-foreground/20 placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" size="lg">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg shadow-glow w-fit mb-4">
                <h1 className="text-xl font-bold">PREMIER</h1>
                <p className="text-xs">Engineering Services</p>
              </div>
            </div>
            <p className="mb-6 opacity-90 leading-relaxed">
              Excellence in electrical engineering solutions. We specialize in manufacturing 
              and exporting electrical switchgears and cable management systems, serving 
              diverse industries across Pakistan since 2013.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 opacity-80" />
                <span>+92 (0) 300 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 opacity-80" />
                <span>info@premierpk.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 opacity-80" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Projects</h4>
            <ul className="space-y-3">
              {projectLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="opacity-80">
              © 2025 Premier Engineering Services. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="opacity-80 text-sm">Follow us:</span>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" }
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};