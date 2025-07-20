import { Check, Crown, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Essentiel",
      price: "299€",
      description: "Parfait pour démarrer avec style",
      features: [
        "1 logo professionnel",
        "3 concepts initiaux", 
        "3 révisions incluses",
        "Fichiers PNG/JPG HD",
        "Livraison 5 jours"
      ],
      popular: false,
      buttonVariant: "outline" as const
    },
    {
      name: "Premium",
      price: "599€",
      description: "Notre pack le plus populaire",
      features: [
        "Logo + 3 variations",
        "Concepts illimités",
        "Révisions illimitées",
        "Tous formats (PNG, JPG, SVG, AI)",
        "Charte graphique",
        "Mockups inclus",
        "Livraison 3 jours"
      ],
      popular: true,
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      price: "1299€",
      description: "Solution complète pour entreprises",
      features: [
        "Identité visuelle complète",
        "Logo + déclinaisons",
        "Charte graphique détaillée",
        "Cartes de visite",
        "Papeterie corporate",
        "Templates réseaux sociaux",
        "Designer dédié",
        "Livraison 24h",
        "Support prioritaire"
      ],
      popular: false,
      buttonVariant: "secondary" as const
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Packs <span className="text-gradient">Premium</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choisissez la formule qui correspond à vos ambitions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative p-8 ${
                plan.popular 
                  ? 'ring-2 ring-accent scale-105 shadow-glow' 
                  : 'hover:scale-105'
              } transition-all duration-300 card-premium`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="btn-accent px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Crown className="w-4 h-4" />
                    Plus Populaire
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">TTC</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 ${
                  plan.popular 
                    ? 'btn-premium' 
                    : plan.buttonVariant === 'outline'
                    ? 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    : 'btn-accent'
                }`}
                variant={plan.popular ? undefined : plan.buttonVariant}
              >
                {plan.popular && <Zap className="mr-2 w-4 h-4" />}
                Choisir ce pack
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Besoin d'une solution sur-mesure ?
          </p>
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
            Demander un devis personnalisé
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;