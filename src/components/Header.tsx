import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-eco-dark text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>9:00 AM - 05:00 PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1234567890</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@wastemanagement.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>12345 Locust St, Kansas City, Mo 6542</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <span>🌐</span>
            <span>🐦</span>
            <span>📘</span>
            <span>📷</span>
          </div>
        </div>
      </div>
      
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
            
            <Button variant="hero" size="lg">
              Request Pickup
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;