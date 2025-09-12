import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Dr. Sarah Chen</h3>
                <p className="text-sm text-primary-foreground/80">Licensed Clinical Psychologist</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Evidence-based mental health education and professional speaking services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/seminars" className="text-primary-foreground/80 hover:text-primary-foreground transition-gentle">
                  Mental Health Seminars
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-gentle">
                  About Dr. Chen
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-primary-foreground/80 hover:text-primary-foreground transition-gentle">
                  Book Speaking Engagement
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-primary-foreground/80 hover:text-primary-foreground transition-gentle">
                  My Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/80">hello@drsarahchen.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-primary-foreground/80">San Francisco, CA</span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/legal/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-gentle">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-gentle">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/refund" className="text-primary-foreground/80 hover:text-primary-foreground transition-gentle">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/disclaimer" className="text-primary-foreground/80 hover:text-primary-foreground transition-gentle">
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} Dr. Sarah Chen. All rights reserved. Licensed in California (PSY12345).
            </p>
            <p className="text-sm text-primary-foreground/70 mt-2 md:mt-0">
              Professional mental health education and consultation services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;