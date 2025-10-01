import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { toast } from "sonner";

const Header = () => {
  const { getTotalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      toast.info(`Searching for: ${searchQuery}`);
    }
  };

  const navLinks = [
    { label: "MEN", href: "#men" },
    { label: "WOMEN", href: "#women" },
    { label: "UNISEX", href: "#unisex" },
    { label: "GIFT SETS", href: "#gifts" },
    { label: "NEW", href: "#new" }
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-accent text-foreground py-2 text-center text-sm font-medium overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          ✨ FREE SHIPPING ON ORDERS OVER €50 ✨ · ✨ FREE SHIPPING ON ORDERS OVER €50 ✨ · ✨ FREE SHIPPING ON ORDERS OVER €50 ✨
        </div>
      </div>
      
      {/* Main Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-primary text-primary-foreground">
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        toast.info(`Navigating to ${link.label}`);
                      }}
                      className="text-lg font-inter hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            
            {/* Logo */}
            <div className="flex-1 lg:flex-none text-center lg:text-left">
              <h1 className="font-playfair text-2xl font-bold tracking-tight">
                Oud Éire
              </h1>
              <p className="text-xs text-primary-foreground/80 font-inter">Luxury Fragrances</p>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    toast.info(`Navigating to ${link.label}`);
                  }}
                  className="text-sm font-inter hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hidden lg:flex"
                onClick={handleSearch}
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => toast.info("Account features coming soon!")}
              >
                <User className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative"
                onClick={() => toast.info("Cart preview coming soon!")}
              >
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center font-medium">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </div>
          </div>
          
          {/* Search Bar - Desktop */}
          <div className="hidden lg:block pb-4">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by perfume, brand, or more..." 
                className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
          </div>
        </div>
      </header>
      
      {/* Promotional Banner */}
      <div className="bg-secondary text-secondary-foreground py-3 text-center">
        <p className="text-sm font-inter font-medium">
          3X 100ML BOTTLES ARE NOW 44% OFF
        </p>
      </div>
    </>
  );
};

export default Header;
