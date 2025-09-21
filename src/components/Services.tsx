import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Truck, 
  Recycle, 
  Calendar, 
  Trash2, 
  Shield, 
  Home,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "Dumpster Sizes",
      description: "Choose from various dumpster sizes to fit your specific waste disposal needs, from small residential to large commercial projects."
    },
    {
      icon: Truck,
      title: "Waste Collection",
      description: "Regular and reliable waste collection services for residential and commercial properties with flexible scheduling options."
    },
    {
      icon: Recycle,
      title: "Pickup Schedule",
      description: "Convenient pickup scheduling that works around your timetable. Book online or call for immediate service."
    }
  ];

  const detailedServices = [
    {
      icon: Truck,
      title: "Garbage Pickup",
      description: "Regular garbage collection services with flexible scheduling options to meet your specific needs and requirements.",
      color: "bg-eco-light"
    },
    {
      icon: Recycle,
      title: "Residential Recycling", 
      description: "Comprehensive recycling programs for homes and communities, helping reduce environmental impact.",
      color: "bg-eco-light"
    },
    {
      icon: Trash2,
      title: "Dumpster Rental",
      description: "Various sizes of dumpsters available for rent, perfect for construction projects and large cleanouts.",
      color: "bg-eco-light"
    },
    {
      icon: Shield,
      title: "Secure Destruction",
      description: "Safe and secure destruction of sensitive documents and materials with certified disposal certificates.",
      color: "bg-eco-light"
    },
    {
      icon: Home,
      title: "Junk Removal",
      description: "Professional junk removal services for homes and offices, clearing unwanted items responsibly.",
      color: "bg-eco-light"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-eco-light">
      <div className="container mx-auto px-4">
        {/* Quick Services */}
        <div className="bg-white rounded-lg shadow-eco p-8 mb-16 -mt-10 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-eco-light rounded-full mb-4">
                  <service.icon className="h-8 w-8 text-eco-green" />
                </div>
                <h3 className="text-xl font-semibold text-eco-dark mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Services */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-eco-dark mb-4">Waste Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive waste management solutions designed to meet all your disposal, 
            recycling, and cleanup needs with professional service and environmental responsibility.
          </p>
          <Button variant="default" size="lg" className="bg-warning-orange hover:bg-warning-orange/90">
            Read More
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {detailedServices.map((service, index) => (
            <Card key={index} className={`${service.color} border-0 shadow-card hover:shadow-eco transition-all duration-300 group cursor-pointer`}>
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-eco-green/10 rounded-full mb-4">
                  <service.icon className="h-6 w-6 text-eco-green" />
                </div>
                <CardTitle className="text-eco-dark group-hover:text-eco-green transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {service.description}
                </CardDescription>
                <div className="flex items-center text-eco-green group-hover:text-eco-dark transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;