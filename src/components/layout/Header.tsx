import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AccountModal from "@/components/AccountModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Seminars", href: "/seminars" },
    { name: "About", href: "/about" },
    { name: "Book Me", href: "/book" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-sage/20 shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Kristin Bauer</h1>
              <p className="text-sm text-sage-dark hidden sm:block">Licensed Psychologist</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-gentle ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-sage-dark"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Button 
                  variant="outline" 
                  onClick={() => setIsAccountModalOpen(true)}
                >
                  <User className="w-4 h-4 mr-2" />
                  Account
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/seminars">Watch Seminars</Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link to="/auth/sign-in">Sign In</Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/seminars">Watch Seminars</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-gentle ${
                  isActive(item.href)
                    ? "bg-healing-light text-primary"
                    : "text-muted-foreground hover:bg-healing-light hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              {user ? (
                <>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => setIsAccountModalOpen(true)}
                  >
                    <User className="w-4 h-4 mr-2" />
                    Account
                  </Button>
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/seminars">Watch Seminars</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/auth/sign-in">Sign In</Link>
                  </Button>
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/seminars">Watch Seminars</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      
      <AccountModal 
        isOpen={isAccountModalOpen} 
        onClose={() => setIsAccountModalOpen(false)} 
      />
    </header>
  );
};

export default Header;