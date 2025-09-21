import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
      {/* Navigation */}
      <header className="bg-eco-green text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              EcoWaste<span className="text-warning-orange">.</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-warning-orange transition-colors">Home</a>
              <a href="#about" className="hover:text-warning-orange transition-colors">About Us</a>
              <a href="#services" className="hover:text-warning-orange transition-colors">Services</a>
              <a href="#complaints" className="hover:text-warning-orange transition-colors">Complaints</a>
              <a href="#contact" className="hover:text-warning-orange transition-colors">Contact</a>
            </nav>
            
            <Button variant="hero" size="lg" className="border border-white">
              Request Pickup
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;