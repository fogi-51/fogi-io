import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageSquare, Workflow, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const features = [
    {
      icon: Phone,
      title: "Customer Calling Service",
      description: "Automated customer calling powered by AI voice technology. Handle appointment reminders, follow-ups, and lead engagement without manual effort.",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Automation Service",
      description: "Automate customer conversations, send notifications, run marketing campaigns, and provide instant support via WhatsApp AI bots.",
    },
    {
      icon: Workflow,
      title: "n8n Workflow Automation",
      description: "Seamlessly connect your apps and automate workflows with n8n. From CRM updates to notifications, streamline operations using custom automation flows.",
    },
    {
      icon: Sparkles,
      title: "Custom AI Solutions",
      description: "We build tailored AI solutions such as chatbots, predictive models, and process automation designed to match your unique business needs.",
    },
  ];

  const benefits = [
    "24/7 automated operations",
    "Reduce operational costs by up to 60%",
    "Improve customer response time",
    "Scalable solutions that grow with you",
    "Expert support and implementation",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
              <span className="text-secondary font-medium text-sm">Next Generation AI Automation</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              FOGI IO
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Boost your business efficiency with AI-powered automation services like customer calling, WhatsApp automation, n8n workflows, and more.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6"
              >
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our AI Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive automation solutions designed to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="text-primary-foreground" size={28} />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Why Choose FOGI IO?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At FOGI IO, we specialize in simplifying business operations with intelligent automation. Our AI-driven tools ensure faster, smarter, and more cost-effective ways to engage customers and manage workflows.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <Card className="relative border-2 border-secondary/20 overflow-hidden">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                        <Sparkles className="text-primary-foreground" size={32} />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">AI-Powered Excellence</h3>
                        <p className="text-muted-foreground">Cutting-edge technology</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-muted/50 rounded-xl">
                        <p className="text-3xl font-bold text-primary mb-1">100+</p>
                        <p className="text-sm text-muted-foreground">Clients Served</p>
                      </div>
                      <div className="text-center p-4 bg-muted/50 rounded-xl">
                        <p className="text-3xl font-bold text-secondary mb-1">99%</p>
                        <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZWMjBoNnYxMHptMCAxMGgtNlY0MGg2di0xMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-primary-foreground">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Contact us today and discover how AI can transform your business operations.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90 text-lg px-8 py-6"
            >
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
