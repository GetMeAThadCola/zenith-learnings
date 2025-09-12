import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users, Star, MapPin, Mail, ChevronRight, GraduationCap, Briefcase, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import drProfile from "@/assets/dr-profile.jpg";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Ph.D. Clinical Psychology",
      institution: "Stanford University",
      year: "2008",
      description: "Specialized in cognitive-behavioral therapy and trauma treatment"
    },
    {
      icon: Award,
      title: "Licensed Clinical Psychologist",
      institution: "California Board of Psychology",
      year: "2009",
      description: "License #PSY12345 - Active and in good standing"
    },
    {
      icon: BookOpen,
      title: "Board Certified",
      institution: "American Board of Professional Psychology",
      year: "2012",
      description: "Specialty certification in clinical psychology"
    },
    {
      icon: Briefcase,
      title: "Clinical Supervisor",
      institution: "California Association of Marriage & Family Therapists",
      year: "2015",
      description: "Approved supervisor for MFT and clinical psychology interns"
    }
  ];

  const achievements = [
    {
      number: "15+",
      label: "Years Clinical Experience",
      description: "Treating depression, anxiety, and trauma"
    },
    {
      number: "10,000+",
      label: "Professionals Trained",
      description: "Across healthcare, education, and corporate sectors"
    },
    {
      number: "500+",
      label: "Organizations Served",
      description: "Including Fortune 500 companies and major hospitals"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Based on post-training evaluations"
    }
  ];

  const expertise = [
    {
      title: "Depression Treatment",
      description: "Evidence-based approaches including CBT, IPT, and mindfulness-based interventions for major depressive disorder and persistent depressive disorder."
    },
    {
      title: "Anxiety Disorders", 
      description: "Specialized treatment for generalized anxiety, panic disorder, social anxiety, and workplace-related anxiety using exposure therapy and cognitive restructuring."
    },
    {
      title: "Trauma & PTSD",
      description: "EMDR-certified therapist with expertise in complex trauma, PTSD, and trauma-informed organizational practices."
    },
    {
      title: "Workplace Mental Health",
      description: "Organizational consultation on mental health policies, employee assistance programs, and creating psychologically safe work environments."
    },
    {
      title: "Crisis Intervention",
      description: "Immediate response strategies for mental health crises, suicide risk assessment, and emergency intervention protocols."
    },
    {
      title: "Professional Training",
      description: "Educational program development and delivery for healthcare professionals, educators, and organizational leaders."
    }
  ];

  const speakingTopics = [
    "Mental Health Stigma Reduction",
    "Building Resilient Teams",
    "Trauma-Informed Leadership",
    "Workplace Wellness Programs",
    "Crisis Response Planning",
    "Employee Mental Health Support",
    "Stress Management Strategies",
    "Psychological Safety in Organizations"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-sage text-primary-foreground">
                Licensed Clinical Psychologist
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Dr. Sarah Chen, Ph.D.
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                With over 15 years of clinical experience, Dr. Chen is a leading expert 
                in evidence-based mental health treatment and professional training. 
                She has dedicated her career to reducing mental health stigma and 
                improving access to quality mental health education.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="sage" size="lg" asChild>
                  <Link to="/book">
                    <Heart className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link to="/seminars">
                    View Seminars
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={drProfile}
                alt="Dr. Sarah Chen, Licensed Clinical Psychologist"
                className="rounded-2xl shadow-elevated w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary-foreground rounded-xl p-4 shadow-elevated">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-primary">Licensed</div>
                    <div className="text-sm text-muted-foreground">CA PSY12345</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-healing-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="gradient-card border-sage/20 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {achievement.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-sage text-primary-foreground">
              Education & Credentials
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Academic Excellence & Professional Recognition
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dr. Chen's extensive education and professional credentials ensure 
              the highest quality of mental health services and training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {credentials.map((credential, index) => (
              <Card key={index} className="gradient-card border-sage/20 hover:shadow-elevated transition-gentle">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-sage flex items-center justify-center">
                      <credential.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">
                        {credential.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-sage-dark">
                        <span>{credential.institution}</span>
                        <span>•</span>
                        <span>{credential.year}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {credential.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 bg-healing-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-sage text-primary-foreground">
              Clinical Expertise
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Specialized Areas of Practice
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Evidence-based treatment approaches and professional training 
              across multiple mental health specialties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <Card key={index} className="gradient-card border-sage/20 h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-sage text-primary-foreground">
                Professional Speaking
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Keynote & Workshop Topics
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Dr. Chen is available for keynote presentations, workshops, and 
                consultation on a wide range of mental health topics tailored 
                to your organization's specific needs.
              </p>
              
              <Button variant="hero" size="lg" asChild>
                <Link to="/book">
                  Book Speaking Engagement
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            <div>
              <Card className="gradient-card border-sage/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-sage" />
                    <span>Popular Speaking Topics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {speakingTopics.map((topic, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-sage"></div>
                        <span className="text-sm text-muted-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Whether you need professional training, consultation, or speaking services, 
            Dr. Chen is here to support your organization's mental health initiatives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="sage" size="lg" asChild>
              <Link to="/contact">
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/seminars">
                Browse Seminars
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 text-primary-foreground/80">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">hello@drsarahchen.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">San Francisco, CA</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;