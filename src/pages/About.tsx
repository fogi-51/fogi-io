import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses of all sizes with accessible, practical, and result-driven AI automation solutions that drive real growth.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize understanding your unique needs and delivering customized solutions that truly make a difference.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying at the forefront of AI technology to bring you the most advanced and effective automation tools.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering high-quality solutions with exceptional support and continuous improvement.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">About FOGI IO</h1>
            <p className="text-xl text-muted-foreground">
              Forward-thinking AI automation agency dedicated to transforming business operations
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-secondary/20">
              <CardContent className="p-8 sm:p-12">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    FOGI IO was founded with a clear vision: to make artificial intelligence accessible and practical for businesses of all sizes. We recognized that while AI technology was advancing rapidly, many businesses struggled to implement it effectively.
                  </p>
                  <p>
                    Our team of AI specialists, developers, and business strategists came together to bridge this gap. We focus on creating automation solutions that don't just showcase technology, but solve real business problems and deliver measurable results.
                  </p>
                  <p>
                    Today, we're proud to help businesses across various industries streamline their operations, improve customer engagement, and unlock new growth opportunities through intelligent automation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-2 hover:border-secondary/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                        <value.icon className="text-primary-foreground" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <p className="text-xl text-muted-foreground">Successful Projects</p>
              </div>
              <div className="p-8">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  99%
                </div>
                <p className="text-xl text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="p-8">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <p className="text-xl text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="text-4xl font-bold mb-6">Our Expertise</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              We combine deep technical knowledge with practical business understanding to deliver solutions that truly work.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["AI & Machine Learning", "Process Automation", "Natural Language Processing", "Workflow Integration"].map((skill, index) => (
                <div key={index} className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                  <p className="font-semibold">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
