import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  FileText,
  Users
} from "lucide-react";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(data.subject as string || 'Inquiry from Website');
    const body = encodeURIComponent(
      `Name: ${data.name}\nCompany: ${data.company}\nPhone: ${data.phone}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:info@premierpk.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Contact Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch with Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your electrical infrastructure needs? Our experienced team 
            is here to provide expert consultation and tailored solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Contact Cards */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">021-35898292</p>
                  <p className="font-semibold">021-35898293</p>
                  <p className="font-semibold">34299111</p>
                  <p className="text-sm text-muted-foreground">Sales & Inquiries</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">info@premierpk.com</p>
                  <p className="text-sm text-muted-foreground">General Inquiries</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">559, Street No 10, Sector D</p>
                  <p className="font-semibold">Rehman Colony, Mehmoodabad</p>
                  <p className="text-sm text-muted-foreground">Karachi, Pakistan</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Working Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input id="name" name="name" placeholder="John Doe" required />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <Input id="company" name="company" placeholder="Your Company" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input id="phone" name="phone" type="tel" placeholder="+92 42 XXXX XXXX" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input id="subject" name="subject" placeholder="Electrical Infrastructure Project" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Please describe your project requirements or inquiry in detail..."
                      rows={6}
                      required 
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6 bg-card shadow-card hover:shadow-elegant transition-all duration-300">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Free Consultation</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get expert advice on your electrical infrastructure needs
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = 'tel:02135898292'}
            >
              Schedule Call
            </Button>
          </Card>

          <Card className="text-center p-6 bg-card shadow-card hover:shadow-elegant transition-all duration-300">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Download Brochure</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get detailed information about our products and services
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('http://premierpk.com/site/wp-content/uploads/2013/12/Company%20Profile.pdf', '_blank')}
            >
              Download PDF
            </Button>
          </Card>

          <Card className="text-center p-6 bg-card shadow-card hover:shadow-elegant transition-all duration-300">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Site Visit</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Schedule a site visit for detailed project assessment
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = 'mailto:info@premierpk.com?subject=Site Visit Request&body=I would like to schedule a site visit for project assessment.'}
            >
              Book Visit
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};