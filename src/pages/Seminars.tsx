import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Play, Lock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Seminars = () => {
  const seminars = [
    {
      id: "understanding-depression",
      title: "Understanding Depression in the Workplace",
      abstract: "Comprehensive guide to recognizing, understanding, and addressing depression in professional environments.",
      description: "This evidence-based seminar provides essential knowledge for managers, HR professionals, and team leaders on identifying signs of depression, creating supportive environments, and implementing effective intervention strategies.",
      duration: 45,
      price: 49,
      thumbnail: "/placeholder-seminar-1.jpg",
      category: "Depression",
      difficulty: "Beginner",
      enrolled: 2847,
      rating: 4.9,
      isPopular: true,
      preview: true
    },
    {
      id: "anxiety-management-teams",
      title: "Anxiety Management for Teams",
      abstract: "Practical tools and strategies for managing anxiety in team environments and high-pressure situations.",
      description: "Learn evidence-based techniques for helping team members manage anxiety, reduce workplace stress, and maintain peak performance under pressure. Includes practical exercises and implementation guides.",
      duration: 35,
      price: 39,
      thumbnail: "/placeholder-seminar-2.jpg",
      category: "Anxiety",
      difficulty: "Beginner",
      enrolled: 1923,
      rating: 4.8,
      isNew: true,
      preview: true
    },
    {
      id: "building-resilience",
      title: "Building Psychological Resilience",
      abstract: "Deep dive into developing resilience for personal and professional growth in challenging environments.",
      description: "Comprehensive training on building psychological resilience, managing stress, and developing coping strategies that enhance both personal wellbeing and professional effectiveness.",
      duration: 60,
      price: 59,
      thumbnail: "/placeholder-seminar-3.jpg",
      category: "Resilience",
      difficulty: "Intermediate",
      enrolled: 1654,
      rating: 4.9,
      isDeepDive: true,
      preview: true
    },
    {
      id: "trauma-informed-leadership",
      title: "Trauma-Informed Leadership",
      abstract: "Essential knowledge for leaders on understanding trauma's impact and creating supportive organizational cultures.",
      description: "Learn to recognize trauma responses, implement trauma-informed practices, and create psychologically safe environments that support healing and growth.",
      duration: 55,
      price: 79,
      thumbnail: "/placeholder-seminar-4.jpg",
      category: "Trauma",
      difficulty: "Advanced",
      enrolled: 987,
      rating: 4.9,
      isPremium: true,
      preview: false
    },
    {
      id: "mindfulness-workplace",
      title: "Mindfulness in the Workplace",
      abstract: "Integrating mindfulness practices into daily work routines for enhanced focus and wellbeing.",
      description: "Practical mindfulness techniques that can be easily integrated into busy work schedules to reduce stress, improve focus, and enhance overall workplace wellbeing.",
      duration: 40,
      price: 45,
      thumbnail: "/placeholder-seminar-5.jpg",
      category: "Mindfulness",
      difficulty: "Beginner",
      enrolled: 2156,
      rating: 4.7,
      preview: true
    },
    {
      id: "crisis-intervention",
      title: "Mental Health Crisis Intervention",
      abstract: "Critical skills for recognizing and responding to mental health crises in organizational settings.",
      description: "Essential training for managers and team leaders on identifying mental health crises, providing immediate support, and connecting individuals with appropriate professional resources.",
      duration: 70,
      price: 89,
      thumbnail: "/placeholder-seminar-6.jpg",
      category: "Crisis",
      difficulty: "Advanced",
      enrolled: 743,
      rating: 5.0,
      isPremium: true,
      preview: false
    }
  ];

  const categories = ["All", "Depression", "Anxiety", "Resilience", "Trauma", "Mindfulness", "Crisis"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-sage text-primary-foreground">
              Professional Mental Health Training
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Evidence-Based Mental Health Seminars
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Comprehensive training programs designed to enhance mental health literacy 
              for professionals, teams, and organizations.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-primary-foreground/10 rounded-lg px-4 py-2">
                <Users className="w-5 h-5 text-sage-light" />
                <span className="text-sm">10,000+ Professionals Trained</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary-foreground/10 rounded-lg px-4 py-2">
                <Star className="w-5 h-5 text-sage-light" />
                <span className="text-sm">4.9 Average Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary-foreground/10 rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 text-sage-light" />
                <span className="text-sm">Self-Paced Learning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-healing-light/30 sticky top-16 z-40 border-b border-sage/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="transition-gentle"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Seminars Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seminars.map((seminar) => (
              <Card key={seminar.id} className="group gradient-card border-sage/20 hover:shadow-elevated transition-gentle overflow-hidden">
                <div className="relative">
                  <div className="aspect-video bg-healing-light flex items-center justify-center">
                    <Play className="w-12 h-12 text-sage opacity-60" />
                  </div>
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {seminar.isPopular && (
                      <Badge className="bg-sage text-primary-foreground">Most Popular</Badge>
                    )}
                    {seminar.isNew && (
                      <Badge className="bg-healing text-foreground">New</Badge>
                    )}
                    {seminar.isDeepDive && (
                      <Badge className="bg-primary text-primary-foreground">Deep Dive</Badge>
                    )}
                    {seminar.isPremium && (
                      <Badge className="bg-gradient-accent text-foreground">Premium</Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    {seminar.preview ? (
                      <Badge variant="outline" className="bg-background/90 border-sage">
                        <Play className="w-3 h-3 mr-1" />
                        Preview
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-background/90 border-primary">
                        <Lock className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    )}
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {seminar.category}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">${seminar.price}</div>
                      <div className="text-sm text-muted-foreground">One-time purchase</div>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-gentle">
                    {seminar.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {seminar.abstract}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-sage" />
                          <span>{seminar.duration} min</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4 text-sage" />
                          <span>{seminar.enrolled.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-sage text-sage" />
                        <span className="font-medium">{seminar.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge 
                        variant="outline" 
                        className={`${
                          seminar.difficulty === 'Beginner' ? 'border-sage text-sage' :
                          seminar.difficulty === 'Intermediate' ? 'border-healing-dark text-healing-dark' :
                          'border-primary text-primary'
                        }`}
                      >
                        {seminar.difficulty}
                      </Badge>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/seminars/${seminar.id}`}>
                          <span>Learn More</span>
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-gentle" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-foreground">
            Get Access to All Seminars
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our membership program and get unlimited access to all current and future seminars, 
            plus exclusive content and live Q&A sessions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-primary-foreground/10 rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-sage-light">$199</div>
              <div className="text-sm text-primary-foreground/80">Annual Membership</div>
            </div>
            <Button variant="sage" size="lg">
              Get Unlimited Access
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/70 mt-4">
            Save over 60% compared to individual purchases • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default Seminars;