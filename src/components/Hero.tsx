import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 rounded-full bg-gradient-accent opacity-20 blur-xl"></div>
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary-glow to-accent opacity-15 blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-accent" />
          <span className="text-accent font-medium tracking-wide uppercase text-sm">
            Plateforme Premium
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="block">Services Digitaux</span>
          <span className="block text-gradient">d'Excellence</span>
        </h1>

        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90">
          Orbixup transforme votre vision en réalité digitale. Logos premium, 
          identité visuelle et services sur-mesure pour entreprises ambitieuses.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button className="btn-premium group">
            Découvrir nos Packs
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold backdrop-blur-sm">
            <Zap className="mr-2 w-5 h-5" />
            Portfolio
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-white/80">Logos Créés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-white/80">Satisfaction Client</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24h</div>
            <div className="text-white/80">Livraison Express</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;