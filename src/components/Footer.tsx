import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Recycle
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-eco-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Recycle className="h-8 w-8 text-warning-orange" />
              <span className="text-2xl font-bold">EcoWaste<span className="text-warning-orange">.</span></span>
            </div>
            <p className="text-gray-300 text-sm">
              Professional waste management services for a cleaner, greener tomorrow. 
              Committed to environmental sustainability and community well-being.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-warning-orange cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-warning-orange cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-300 hover:text-warning-orange cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-warning-orange cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-warning-orange transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-warning-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-warning-orange transition-colors">Services</a></li>
              <li><a href="#complaints" className="text-gray-300 hover:text-warning-orange transition-colors">Report Complaint</a></li>
              <li><a href="#reusable" className="text-gray-300 hover:text-warning-orange transition-colors">Submit Reusable Items</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-warning-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Garbage Pickup</li>
              <li className="text-gray-300">Residential Recycling</li>
              <li className="text-gray-300">Dumpster Rental</li>
              <li className="text-gray-300">Secure Destruction</li>
              <li className="text-gray-300">Junk Removal</li>
              <li className="text-gray-300">Commercial Waste</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-warning-orange" />
                <span className="text-gray-300">9:00 AM - 05:00 PM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-warning-orange" />
                <span className="text-gray-300">+1234567890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-warning-orange" />
                <span className="text-gray-300">info@wastemanagement.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-warning-orange" />
                <span className="text-gray-300">12345 Locust St, Kansas City, Mo 6542</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-medium mb-2">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter email" 
                  className="bg-eco-green/10 border-eco-green/30 text-white placeholder:text-gray-400"
                />
                <Button variant="hero" size="sm" className="bg-warning-orange hover:bg-warning-orange/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-eco-green/30" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>&copy; 2024 EcoWaste. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-warning-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-warning-orange transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-warning-orange transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;