import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string()
    .trim()
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, {
      message: "Please enter a valid phone number"
    })
    .max(20, { message: "Phone number must be less than 20 characters" })
    .optional()
    .or(z.literal("")),
  message: z.string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.success("Message sent successfully! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you. Let's talk about how AI can help your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2 border-secondary/20">
              <CardHeader>
                <CardTitle className="text-3xl">Send Us a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="border-2 focus:border-secondary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              className="border-2 focus:border-secondary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (optional)</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+1 (555) 000-0000"
                              className="border-2 focus:border-secondary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project or ask any questions..."
                              rows={6}
                              className="border-2 focus:border-secondary resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      disabled={form.formState.isSubmitting}
                      size="lg"
                    >
                      {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2" size={18} />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary-foreground" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email Us</h3>
                      <p className="text-muted-foreground mb-2">
                        For general inquiries and support
                      </p>
                      <a
                        href="mailto:care@fogi.live"
                        className="text-secondary hover:text-secondary/80 font-medium transition-colors"
                      >
                        care@fogi.live
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="text-primary-foreground" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Quick Response</h3>
                      <p className="text-muted-foreground mb-3">
                        We typically respond within 24 hours during business days
                      </p>
                      <div className="space-y-1 text-sm">
                        <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-muted/50 to-background">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Why Contact Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span className="text-muted-foreground">Free consultation for your automation needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span className="text-muted-foreground">Custom solutions tailored to your business</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span className="text-muted-foreground">Expert guidance on AI implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span className="text-muted-foreground">Transparent pricing and project timelines</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
