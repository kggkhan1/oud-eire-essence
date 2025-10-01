import { Button } from "@/components/ui/button";
import { Smile, Users, ThumbsUp } from "lucide-react";
import heroImage from "@/assets/hero-perfumes.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h2 className="font-playfair text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Designer inspired scents
              </h2>
              <p className="font-playfair text-4xl lg:text-5xl xl:text-6xl italic">
                at <span className="font-semibold">prices you'll adore</span>
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground font-inter max-w-xl mx-auto lg:mx-0">
              Don't compromise on the scents you love. With 70+ inspired alternatives, 
              experience your favourite perfume profiles, affordably.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-inter text-base px-8">
                SHOP WOMEN
              </Button>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-inter text-base px-8">
                SHOP MEN
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-2">
                  <Smile className="h-6 w-6 text-foreground" />
                </div>
                <p className="text-sm font-semibold font-inter">85,000+ 5-Star</p>
                <p className="text-xs text-muted-foreground font-inter">Reviews</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-2">
                  <Users className="h-6 w-6 text-foreground" />
                </div>
                <p className="text-sm font-semibold font-inter">2.5+ Million</p>
                <p className="text-xs text-muted-foreground font-inter">Customers</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-2">
                  <ThumbsUp className="h-6 w-6 text-foreground" />
                </div>
                <p className="text-sm font-semibold font-inter">30-Day</p>
                <p className="text-xs text-muted-foreground font-inter">Money-Back</p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Luxury perfume collection featuring elegant bottles and diffusers" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 lg:w-32 lg:h-32 opacity-20 pointer-events-none">
              <div className="w-full h-full border-4 border-accent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
