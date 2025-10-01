import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Celtic Mist",
      inspired: "Inspired by Baccarat Rouge 540",
      price: "€24.99",
      size: "100ml",
      rating: 4.9,
      reviews: 1243
    },
    {
      id: 2,
      name: "Irish Rose",
      inspired: "Inspired by Black Opium",
      price: "€24.99",
      size: "100ml",
      rating: 4.8,
      reviews: 987
    },
    {
      id: 3,
      name: "Dublin Nights",
      inspired: "Inspired by Sauvage",
      price: "€24.99",
      size: "100ml",
      rating: 4.9,
      reviews: 1567
    },
    {
      id: 4,
      name: "Emerald Oud",
      inspired: "Inspired by Tom Ford Oud Wood",
      price: "€29.99",
      size: "100ml",
      rating: 5.0,
      reviews: 2103
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold">
            Most Popular
          </h2>
          <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
            Discover our bestselling fragrances, loved by thousands of customers
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="aspect-square bg-gradient-to-br from-muted to-background rounded-lg flex items-center justify-center">
                  <div className="text-6xl">🧴</div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-playfair text-xl font-semibold">{product.name}</h3>
                  <p className="text-xs text-muted-foreground font-inter">{product.inspired}</p>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-accent">★</span>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground font-inter">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="font-playfair text-2xl font-bold">{product.price}</span>
                    <span className="text-sm text-muted-foreground font-inter">{product.size}</span>
                  </div>
                  
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-inter">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="font-inter">
            View All Fragrances
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
