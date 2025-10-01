import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PressSection from "@/components/PressSection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Toaster position="top-center" richColors />
      <Header />
      <main>
        <Hero />
        <PressSection />
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
