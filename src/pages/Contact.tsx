import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    contactType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. Kristin will respond within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "", contactType: "" });
  };

  const contactReasons = [
    {
      icon: Calendar,
      title: "Speaking Engagements",
      description: "Book Kristin for workshops, keynotes, or training sessions"
    },
    {
      icon: Users,
      title: "Corporate Training",
      description: "Customize mental health programs for your organization"
    },
    {
      icon: MessageSquare,
      title: "Media Inquiries",
      description: "Interview requests and media opportunities"
    },
    {
      icon: Mail,
      title: "General Questions",
      description: "Any other questions or collaboration opportunities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-sage text-primary-foreground">
              Get in Touch
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact Kristin Bauer
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Ready to bring evidence-based mental health education to your organization? 
              Let's discuss how we can work together to support your team's wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="py-16 bg-healing-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              How Can Kristin Help You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you need training, speaking services, or consultation, 
              Kristin is here to support your mental health initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactReasons.map((reason, index) => (
              <Card key={index} className="gradient-card border-sage/20 hover:shadow-elevated transition-gentle text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-sage flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="gradient-card border-sage/20">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and Kristin will get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactType">Inquiry Type</Label>
                    <Select onValueChange={(value) => setFormData({...formData, contactType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="speaking">Speaking Engagement</SelectItem>
                        <SelectItem value="training">Corporate Training</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="general">General Question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Please provide details about your inquiry, including dates, audience size, budget considerations, or any specific requirements..."
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="gradient-card border-sage/20">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-sage flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">kristin@zenithlearnings.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-sage flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-sage flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Service Area</p>
                      <p className="text-muted-foreground">Nationwide (Virtual & In-Person)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-sage flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card border-sage/20">
                <CardHeader>
                  <CardTitle className="text-xl">About Kristin Bauer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Kristin holds a Master's degree in Psychology and has dedicated her career 
                    to making mental health education accessible and actionable for organizations 
                    worldwide.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Master's in Psychology",
                      "500+ Organizations Trained",
                      "Evidence-Based Approaches",
                      "98% Client Satisfaction Rate"
                    ].map((credential, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-sage"></div>
                        <span className="text-sm text-muted-foreground">{credential}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card border-sage/20">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Consultation Call
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    View Available Training Topics
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Request Speaking Kit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-healing-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is your speaking fee?",
                answer: "Speaking fees vary based on event type, duration, and location. Corporate workshops start at $2,500, keynotes at $5,000. Contact me for a custom quote."
              },
              {
                question: "Do you travel for events?",
                answer: "Yes, I travel nationwide for speaking engagements. I also offer virtual presentations for remote teams and organizations."
              },
              {
                question: "What topics do you cover?",
                answer: "I specialize in workplace mental health, anxiety management, depression awareness, trauma-informed practices, and building resilient teams."
              },
              {
                question: "How far in advance should I book?",
                answer: "I recommend booking 2-3 months in advance, especially for popular dates. However, I can sometimes accommodate shorter notice for urgent needs."
              }
            ].map((faq, index) => (
              <Card key={index} className="gradient-card border-sage/20">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;