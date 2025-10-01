import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">Oud Éire</h3>
            <p className="text-sm text-primary-foreground/80 font-inter">
              Luxury Irish fragrances inspired by the world's finest scents.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-inter font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm font-inter">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Men's Fragrances</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Women's Fragrances</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Unisex Collection</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Gift Sets</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">New Arrivals</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-inter font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm font-inter">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Returns Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Track Order</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-inter font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm font-inter">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Story</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Press</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Terms & Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60 font-inter">
            © 2025 Oud Éire. All rights reserved. Crafted with passion in Ireland.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
