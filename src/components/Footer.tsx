import { Zap, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-primary via-secondary to-primary/80 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/30 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full blur-md"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-glow">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-gradient bg-gradient-to-r from-white to-white/90">Orbixup</span>
            </div>
            <p className="text-white/90 leading-relaxed max-w-md mb-6 text-lg">
              Votre partenaire de confiance pour des services digitaux d'exception. 
              Nous transformons vos idées en réalités visuelles mémorables avec l'IA.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" }
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-glow"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gradient">Services</h3>
            <ul className="space-y-3">
              {[
                "Création de logos IA",
                "Identité visuelle",
                "Design express 24h",
                "Pack startup",
                "Charte graphique",
                "Mockups premium"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gradient">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>contact@orbixup.com</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-bold mb-2">Restez informé</h4>
              <p className="text-white/80">Recevez nos dernières créations et offres exclusives</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="votre@email.com" 
                className="bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-accent flex-1 md:w-64"
              />
              <button className="btn-accent px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-center md:text-left">
            © 2024 Orbixup. Tous droits réservés. Propulsé par l'IA.
          </p>
          <div className="flex gap-6 text-white/70">
            {["Mentions légales", "Confidentialité", "CGV", "Support"].map((link, index) => (
              <a 
                key={index}
                href="#" 
                className="hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;