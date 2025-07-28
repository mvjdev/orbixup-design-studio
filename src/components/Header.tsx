import { useState } from "react";
import { Menu, X, Zap, User } from "lucide-react";
import { Button } from "./ui/button";
import AuthModal from "./AuthModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Tarifs", href: "#pricing" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Orbixup</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => {
                setAuthMode("signin");
                setIsAuthModalOpen(true);
              }}
            >
              <User className="w-4 h-4 mr-2" />
              Connexion
            </Button>
            <Button 
              className="btn-accent"
              onClick={() => {
                setAuthMode("signup");
                setIsAuthModalOpen(true);
              }}
            >
              Commencer
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-md border-b border-white/20">
            <nav className="flex flex-col py-6 px-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/90 hover:text-white transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="space-y-3 mt-4">
                <Button 
                  variant="ghost" 
                  className="w-full text-white/90 hover:text-white hover:bg-white/10 justify-start"
                  onClick={() => {
                    setAuthMode("signin");
                    setIsAuthModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <User className="w-4 h-4 mr-2" />
                  Connexion
                </Button>
                <Button 
                  className="btn-accent w-full"
                  onClick={() => {
                    setAuthMode("signup");
                    setIsAuthModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Commencer
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </header>
  );
};

export default Header;