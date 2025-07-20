import { Zap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Orbixup</span>
            </div>
            <p className="text-white/80 leading-relaxed max-w-md">
              Votre partenaire de confiance pour des services digitaux d'exception. 
              Nous transformons vos idées en réalités visuelles mémorables.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Création de logos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Identité visuelle</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Design express</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pack startup</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@orbixup.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-center md:text-left">
            © 2024 Orbixup. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-white/60">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;