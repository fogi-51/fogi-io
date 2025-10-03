import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Terms of Service</h1>
          
          <Card className="border-2">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using FOGI IO's services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, 
                  you are prohibited from using our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  FOGI IO provides AI automation services including but not limited to customer calling services, 
                  WhatsApp automation, n8n workflow automation, and custom AI solutions. The specific scope of 
                  services will be defined in individual service agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Use our services in compliance with all applicable laws</li>
                  <li>Not misuse or attempt to gain unauthorized access to our systems</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, features, and functionality of our services are owned by FOGI IO and are 
                  protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  FOGI IO shall not be liable for any indirect, incidental, special, consequential, or 
                  punitive damages resulting from your use of or inability to use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Modifications to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of any 
                  material changes via email or through our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:care@fogi.live" className="text-secondary hover:text-secondary/80">
                    care@fogi.live
                  </a>
                </p>
              </section>

              <p className="text-sm text-muted-foreground pt-6 border-t">
                Last updated: January 2025
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;
