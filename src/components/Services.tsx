import { Palette, Zap, Crown, Rocket } from "lucide-react";
import { Card } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12 text-accent" />,
      title: "Logo Premium",
      description: "Création de logos uniques et mémorables pour votre marque",
      features: ["3 concepts initiaux", "Révisions illimitées", "Fichiers vectoriels", "Guide d'utilisation"]
    },
    {
      icon: <Crown className="w-12 h-12 text-accent" />,
      title: "Identité Complète",
      description: "Pack complet d'identité visuelle pour votre entreprise",
      features: ["Logo + variations", "Palette couleurs", "Typographie", "Charte graphique"]
    },
    {
      icon: <Zap className="w-12 h-12 text-accent" />,
      title: "Express Design",
      description: "Livraison ultra-rapide en 24h pour vos urgences",
      features: ["Livraison 24h", "Priorité absolue", "Designer dédié", "Support direct"]
    },
    {
      icon: <Rocket className="w-12 h-12 text-accent" />,
      title: "Pack Startup",
      description: "Solution complète pour startups et nouvelles entreprises",
      features: ["Logo + identité", "Cartes de visite", "Site vitrine", "Réseaux sociaux"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Nos Services <span className="text-gradient">Premium</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Des solutions digitales sur-mesure pour propulser votre marque vers l'excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
              <Card 
                key={index} 
                className="card-premium p-6 md:p-8 hover:scale-105 transition-all duration-300 hover:shadow-glow group cursor-pointer"
              >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;