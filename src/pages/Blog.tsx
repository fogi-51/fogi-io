import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "How AI Automation is Transforming Customer Service",
      excerpt: "Discover how businesses are leveraging AI to provide 24/7 customer support, reduce response times, and improve customer satisfaction.",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "AI Automation",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    },
    {
      title: "WhatsApp Automation: A Complete Guide for Businesses",
      excerpt: "Learn how to automate WhatsApp messaging for marketing, customer support, and engagement to scale your business communications.",
      date: "March 10, 2025",
      readTime: "7 min read",
      category: "WhatsApp",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
    },
    {
      title: "n8n Workflow Automation: Best Practices",
      excerpt: "Explore the most effective strategies for building robust automation workflows that save time and eliminate repetitive tasks.",
      date: "March 5, 2025",
      readTime: "6 min read",
      category: "Workflows",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "The ROI of AI: Real Business Results",
      excerpt: "Case studies showing how AI automation delivers measurable returns through cost savings, efficiency gains, and revenue growth.",
      date: "February 28, 2025",
      readTime: "8 min read",
      category: "Business Growth",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      title: "Custom AI Solutions: When to Build vs Buy",
      excerpt: "A practical guide to help you decide whether to invest in custom AI development or use off-the-shelf solutions.",
      date: "February 20, 2025",
      readTime: "5 min read",
      category: "AI Development",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    },
    {
      title: "Voice AI: The Future of Customer Calling",
      excerpt: "How AI-powered voice technology is revolutionizing outbound calling, lead qualification, and customer engagement.",
      date: "February 15, 2025",
      readTime: "6 min read",
      category: "Voice AI",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-primary-foreground">
              Insights & AI Automation Tips
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Stay updated with the latest AI trends, automation strategies, and growth hacks.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group">
                    Read More 
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest AI automation insights and tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary"
              />
              <Button className="bg-secondary hover:opacity-90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
