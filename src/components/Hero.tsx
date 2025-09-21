import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-waste-management.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Waste management professionals in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-eco-dark/60"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="border-l-4 border-warning-orange pl-6 mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Waste Management<br />
              <span className="text-warning-orange">Dumpster Rentals</span><br />
              Garbage Pickup.
            </h1>
          </div>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Professional waste management services for residential and commercial needs. 
            Eco-friendly solutions for a cleaner, greener tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="bg-warning-orange hover:bg-warning-orange/90">
              Explore Our Services
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-eco-dark">
              More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;