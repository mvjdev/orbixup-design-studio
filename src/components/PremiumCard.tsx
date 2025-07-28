import { Check, Crown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button"; 
import { Card } from "@/components/ui/card"; 

const PremiumCard = () => {
  const features = [
    "1000 tokens par mois",
    "Logo + 3 variations",
    "Concepts illimités",
    "Révisions illimitées",
    "Tous formats (PNG, JPG, SVG, AI)",
    "Charte graphique",
    "Mockups inclus",
    "Livraison 3 jours",
  ];

  return (
    <Card className="relative p-6 md:p-8 ring-2 ring-accent md:scale-105 shadow-glow transition-all duration-300 card-premium">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <div className="btn-accent px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Crown className="w-4 h-4" />
          Plus Populaire
        </div>
      </div>

      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">Premium</h3>
        <p className="text-muted-foreground mb-4 text-sm md:text-base">Notre pack le plus populaire</p>
        <div className="mb-4 md:mb-6">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">599€</span>
          <span className="text-muted-foreground ml-2 text-sm md:text-base">TTC</span>
        </div>
      </div>

      <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
        {features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-start gap-3">
            <Check className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-foreground text-sm md:text-base">{feature}</span>
          </li>
        ))}
      </ul>

      <Button className="w-full py-3 btn-premium">
        <Zap className="mr-2 w-4 h-4" />
        Choisir ce pack
      </Button>
    </Card>
  );
};

export default PremiumCard;