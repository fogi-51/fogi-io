import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageSquare, Workflow, Sparkles, Bot, BarChart, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: "AI Customer Calling",
      description: "AI-powered outbound & inbound calling services with natural-sounding voices. Perfect for sales, support, appointment confirmations, and feedback collection.",
      features: [
        "Natural AI voice interactions",
        "Appointment reminders & confirmations",
        "Lead qualification & follow-ups",
        "Customer feedback collection",
        "Multi-language support",
      ],
    },
    {
      icon: MessageSquare,
      title: "WhatsApp AI Automation",
      description: "Engage your customers 24/7 on WhatsApp with AI chatbots. Automate FAQs, order tracking, reminders, and promotional campaigns.",
      features: [
        "24/7 automated responses",
        "Order tracking & updates",
        "Marketing campaign automation",
        "FAQ handling",
        "Integration with business systems",
      ],
    },
    {
      icon: Workflow,
      title: "n8n Workflow Integration",
      description: "Automate repetitive business processes by integrating multiple apps and services into smooth workflows using n8n technology.",
      features: [
        "Custom workflow design",
        "App integration & connectivity",
        "Data synchronization",
        "Event-triggered automation",
        "Real-time monitoring",
      ],
    },
    {
      icon: Sparkles,
      title: "Custom AI Development",
      description: "From machine learning models to intelligent assistants, we create bespoke AI solutions tailored to your industry and business needs.",
      features: [
        "Custom chatbot development",
        "Predictive analytics",
        "Process automation",
        "Industry-specific solutions",
        "AI model training & deployment",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Intelligent conversational interfaces for websites and applications",
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "AI-powered insights and reporting for better decision making",
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Seamless integration with your existing business tools",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security and data protection",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive AI automation solutions designed to streamline your business operations and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`border-2 hover:border-secondary/50 transition-all duration-300 ${
                  index % 2 === 0 ? 'lg:ml-0' : 'lg:ml-auto'
                } lg:max-w-4xl`}
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="text-primary-foreground" size={32} />
                    </div>
                    <div>
                      <CardTitle className="text-3xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="ml-20">
                    <h4 className="font-semibold mb-3 text-lg">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Additional Capabilities</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive solutions to support your automation journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <service.icon className="text-primary-foreground" size={28} />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto border-2 border-secondary/30 bg-gradient-to-br from-background to-muted/30">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how our AI automation services can help you achieve your goals
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8"
              >
                <Link to="/contact">
                  Get Started Today
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
