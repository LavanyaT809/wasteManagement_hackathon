import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What Happens To Business Waste After You've Collected It?",
      answer: "After collection, business waste is sorted at our facilities. Recyclable materials are processed and sent to recycling partners, organic waste is composted, and non-recyclable waste is disposed of following environmental guidelines."
    },
    {
      question: "How Soon Can I Set Up A Waste Collection Waste Disposal?",
      answer: "Waste collection services can typically be set up within 24-48 hours of your request. For urgent requirements, same-day service may be available depending on your location and our schedule availability."
    },
    {
      question: "Why Is Waste Management Important?",
      answer: "Proper waste management protects public health, reduces environmental pollution, conserves natural resources, and helps build sustainable communities. It's essential for maintaining clean environments and reducing our carbon footprint."
    },
    {
      question: "Why Use EcoWaste Services?",
      answer: "We offer reliable, eco-friendly waste management solutions with competitive pricing, flexible scheduling, and comprehensive recycling programs. Our experienced team ensures proper handling and disposal while minimizing environmental impact."
    },
    {
      question: "What Makes EcoWaste Different From Other Waste Management Services?",
      answer: "Our commitment to sustainability, advanced recycling technologies, personalized service, and community engagement sets us apart. We focus on reducing landfill waste through innovative reuse and recycling programs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* FAQ Description */}
          <div>
            <Card className="shadow-eco h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-eco-dark text-2xl">
                  <HelpCircle className="h-8 w-8 mr-3" />
                  Business Waste & Recycling FAQs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Find answers to commonly asked questions about our waste management services. 
                  We provide comprehensive solutions for both residential and commercial waste disposal, 
                  recycling programs, and environmental sustainability initiatives. Our experienced team 
                  is committed to delivering reliable service while protecting the environment.
                </p>
                <div className="mt-6 p-4 bg-eco-light rounded-lg">
                  <h4 className="font-semibold text-eco-dark mb-2">Need More Help?</h4>
                  <p className="text-sm text-muted-foreground">
                    Can't find the answer you're looking for? Contact our customer service team 
                    for personalized assistance with your waste management needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-eco-light border-eco-green/20 rounded-lg px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:text-eco-green transition-colors">
                    <span className="font-medium text-eco-dark">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;