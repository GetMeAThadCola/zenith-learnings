import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, MapPin, Phone, Mail, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Book = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    eventType: "",
    preferredDate: "",
    duration: "",
    attendees: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted",
      description: "Kristin will contact you within 24 hours to confirm details.",
    });
  };

  const services = [
    {
      title: "Corporate Workshop",
      duration: "2-4 hours",
      attendees: "10-50 people",
      price: "Starting at $2,500",
      description: "Interactive mental health training for your team",
      features: ["Evidence-based content", "Interactive exercises", "Q&A session", "Take-home resources"]
    },
    {
      title: "Keynote Presentation", 
      duration: "45-60 minutes",
      attendees: "50-500 people",
      price: "Starting at $5,000",
      description: "Inspiring keynote on mental health topics",
      features: ["Customized content", "Professional slides", "Audio/visual support", "Post-event resources"]
    },
    {
      title: "Training Series",
      duration: "Half or full day",
      attendees: "20-100 people",
      price: "Starting at $7,500",
      description: "Comprehensive multi-session training program",
      features: ["Multiple sessions", "Skill building", "Progress tracking", "Ongoing support"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-sage text-primary-foreground">
              Professional Speaking & Training
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Book Kristin Bauer for Your Event
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Bring evidence-based mental health education to your organization. 
              Kristin specializes in workplace mental health, anxiety management, 
              and building resilient teams.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-sage-light" />
                <span>Master's in Psychology</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-sage-light" />
                <span>500+ Organizations Served</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-sage-light" />
                <span>98% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-healing-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Speaking & Training Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our range of professional services tailored to your organization's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="gradient-card border-sage/20 hover:shadow-elevated transition-gentle">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-sage" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-sage" />
                      <span>{service.attendees}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-sage"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Request a Speaking Engagement
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and Kristin will contact you within 24 hours to discuss your needs.
              </p>
            </div>

            <Card className="gradient-card border-sage/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization *</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type *</Label>
                      <Select onValueChange={(value) => setFormData({...formData, eventType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corporate-workshop">Corporate Workshop</SelectItem>
                          <SelectItem value="keynote">Keynote Presentation</SelectItem>
                          <SelectItem value="training-series">Training Series</SelectItem>
                          <SelectItem value="conference">Conference Speaking</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Expected Duration</Label>
                      <Select onValueChange={(value) => setFormData({...formData, duration: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30-45-min">30-45 minutes</SelectItem>
                          <SelectItem value="1-hour">1 hour</SelectItem>
                          <SelectItem value="2-hours">2 hours</SelectItem>
                          <SelectItem value="half-day">Half day</SelectItem>
                          <SelectItem value="full-day">Full day</SelectItem>
                          <SelectItem value="multi-day">Multiple days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="attendees">Expected Attendees</Label>
                      <Input
                        id="attendees"
                        placeholder="e.g., 50 people"
                        value={formData.attendees}
                        onChange={(e) => setFormData({...formData, attendees: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your event, specific topics of interest, budget range, or any special requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Submit Booking Request
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-4">Have Questions?</h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-sage" />
                  <span>kristin@zenithlearnings.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-sage" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-sage" />
                  <span>Available Nationwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;