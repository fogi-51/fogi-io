import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageSquare, Workflow, Sparkles, ArrowRight, CheckCircle, Quote } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const features = [
    {
      icon: Phone,
      title: "Customer Calling AI",
      description: "Engage leads and customers with AI-driven calling services that sound natural and save your team hours.",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Automation",
      description: "Automate customer conversations, send instant updates, and run marketing campaigns on WhatsApp.",
    },
    {
      icon: Workflow,
      title: "n8n Workflow Automation",
      description: "Seamlessly integrate apps and build automation flows to cut repetitive tasks and boost productivity.",
    },
    {
      icon: Sparkles,
      title: "Custom AI Solutions",
      description: "Tailored AI development including chatbots, predictive models, and automation tools for your unique needs.",
    },
  ];

  const testimonials = [
    {
      quote: "FOGI IO's AI automation transformed how we interact with customers. Calls and WhatsApp responses are now fully automated and professional.",
      author: "Rahul Sharma",
      role: "Business Owner",
    },
    {
      quote: "Their n8n workflows saved our team countless hours. Highly recommended for anyone serious about automation.",
      author: "Ananya Gupta",
      role: "Operations Manager",
    },
  ];

  const pricingPlans = [
    {
      title: "Starter",
      price: "$99",
      period: "/month",
      features: ["AI Calling (100 calls)", "WhatsApp Bot (Basic)", "Basic n8n Workflows"],
      cta: "Get Started",
    },
    {
      title: "Professional",
      price: "$299",
      period: "/month",
      features: ["AI Calling (500 calls)", "WhatsApp Pro Automation", "Advanced n8n Workflows", "Priority Support"],
      cta: "Upgrade Now",
      highlighted: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited AI Calls", "Full WhatsApp Automation", "Enterprise n8n Workflows", "Dedicated AI Solutions"],
      cta: "Contact Us",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Gradient */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 animate-gradient-shift"
          style={{
            background: 'linear-gradient(-45deg, hsl(203 53% 12%), hsl(203 53% 22%), hsl(14 100% 60%), hsl(122 39% 49%))',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
          }}
        />
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
            mixBlendMode: 'overlay',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
              Automate. Scale. Succeed.
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              FOGI IO delivers AI automation solutions that transform customer engagement and business efficiency.
            </p>
            
            <Button 
              asChild 
              size="lg" 
              className="bg-secondary hover:opacity-90 text-lg px-8 py-6"
            >
              <Link to="/contact">
                Book a Free Consultation <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our AI-Powered Services</h2>
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
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="text-secondary-foreground" size={28} />
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Why FOGI IO?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At FOGI IO, we combine technology and creativity to deliver automation solutions that actually work. With our expertise in AI and automation, businesses save time, increase conversions, and provide smarter customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-secondary/30 transition-all duration-300">
                <CardContent className="p-8">
                  <Quote className="text-secondary mb-4" size={32} />
                  <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the perfect automation plan for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`border-2 transition-all duration-300 hover:shadow-lg ${
                  plan.highlighted 
                    ? 'border-secondary shadow-lg scale-105' 
                    : 'border-border hover:border-secondary/50'
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="text-accent mt-1 flex-shrink-0" size={18} />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full ${
                      plan.highlighted 
                        ? 'bg-secondary hover:opacity-90' 
                        : 'bg-primary hover:opacity-90'
                    }`}
                  >
                    <Link to="/contact">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
              Let FOGI IO show you how AI can transform your operations.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-background text-primary hover:bg-background/90 text-lg px-8 py-6"
            >
              <Link to="/contact">
                Contact Us Today <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
