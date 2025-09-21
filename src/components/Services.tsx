import { 
  Truck, 
  Recycle, 
  Calendar, 
  Database
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "Accurate Waste Classification",
      description: "AI correctly identifies Plastic, Metal, Glass, Organic, Paper with confidence scores. Real-time results via webcam or uploaded images."
    },
    {
      icon: Truck,
      title: "Efficient Waste Management",
      description: "Users can request pickups for reusable/recyclable items. NGOs/recyclers receive alerts and efficiently collect waste."
    },
    {
      icon: Recycle,
      title: "Community Engagement & Awareness",
      description: "Gamification motivates users to segregate properly. Awareness messages and recycling tips educate citizens."
    },
    {
      icon: Database,
      title: "Data-Driven Insights",
      description: "Dashboard shows daily, weekly, and type-wise segregation stats. Helps track citizen participation and monitor waste trends in Pune."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-eco-light">
      <div className="container mx-auto px-4">
        {/* Quick Services */}
        <div className="bg-white rounded-lg shadow-eco p-8 mb-16 -mt-10 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};

export default Services;
