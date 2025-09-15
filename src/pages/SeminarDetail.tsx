import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Play, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import SeminarPaymentModal from "@/components/SeminarPaymentModal";

const SeminarDetail = () => {
  const { id } = useParams();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // This should match the seminars data from Seminars.tsx
  const seminars = {
    "understanding-depression": {
      id: "understanding-depression",
      title: "Understanding Depression in the Workplace",
      abstract: "Comprehensive guide to recognizing, understanding, and addressing depression in professional environments.",
      description: "This evidence-based seminar provides essential knowledge for managers, HR professionals, and team leaders on identifying signs of depression, creating supportive environments, and implementing effective intervention strategies. Learn to recognize early warning signs, understand the neurobiological basis of depression, and implement evidence-based interventions that support recovery and workplace wellness.",
      fullDescription: "This comprehensive 45-minute seminar combines the latest research in neuroscience and psychology to provide a thorough understanding of depression in workplace settings. You'll learn practical assessment techniques, intervention strategies, and how to create psychologically safe environments that promote mental wellness. The program includes case studies, interactive exercises, and downloadable resources for immediate implementation.",
      duration: "45 minutes",
      price: "$49",
      category: "Depression",
      difficulty: "Beginner",
      enrolled: 2847,
      rating: 4.9,
      isPopular: true,
      isNew: false,
      isDeepDive: false,
      isPremium: false,
      preview: true,
      students: "2,500+",
      modules: [
        "Understanding Depression: Symptoms and Causes",
        "Recognizing Warning Signs in the Workplace",
        "Creating Supportive Conversations",
        "Implementing Workplace Interventions",
        "Building Long-term Support Systems"
      ],
      learningOutcomes: [
        "Identify early warning signs of depression",
        "Understand the neurobiological basis of depression",
        "Implement evidence-based intervention strategies",
        "Create supportive workplace environments",
        "Develop effective communication approaches"
      ]
    },
    "anxiety-management-teams": {
      id: "anxiety-management-teams",
      title: "Anxiety Management for Teams",
      abstract: "Practical tools and strategies for managing anxiety in team environments and high-pressure situations.",
      description: "Learn evidence-based techniques for helping team members manage anxiety, reduce workplace stress, and maintain peak performance under pressure. Includes practical exercises and implementation guides.",
      fullDescription: "This 35-minute intensive seminar focuses on practical anxiety management techniques specifically designed for team environments. Learn how to identify anxiety triggers, implement stress-reduction strategies, and create team cultures that support mental wellness and peak performance.",
      duration: "35 minutes",
      price: "$39",
      category: "Anxiety",
      difficulty: "Beginner",
      enrolled: 1923,
      rating: 4.8,
      isPopular: false,
      isNew: true,
      isDeepDive: false,
      isPremium: false,
      preview: true,
      students: "1,800+",
      modules: [
        "Understanding Anxiety in Teams",
        "Identifying Triggers and Patterns",
        "Stress-Reduction Techniques",
        "Building Resilient Team Culture",
        "Performance Under Pressure"
      ],
      learningOutcomes: [
        "Recognize anxiety symptoms in team settings",
        "Apply evidence-based stress reduction techniques",
        "Build supportive team environments",
        "Maintain performance under pressure",
        "Develop long-term anxiety management strategies"
      ]
    },
    "building-resilience": {
      id: "building-resilience",
      title: "Building Psychological Resilience",
      abstract: "Deep dive into developing resilience for personal and professional growth in challenging environments.",
      description: "Comprehensive training on building psychological resilience, managing stress, and developing coping strategies that enhance both personal wellbeing and professional effectiveness.",
      fullDescription: "This comprehensive 60-minute deep dive explores the science of psychological resilience and provides practical tools for building mental toughness. Learn evidence-based strategies for stress management, emotional regulation, and personal growth that will enhance both your professional effectiveness and personal wellbeing.",
      duration: "60 minutes",
      price: "$59",
      category: "Resilience",
      difficulty: "Intermediate",
      enrolled: 1654,
      rating: 4.9,
      isPopular: false,
      isNew: false,
      isDeepDive: true,
      isPremium: false,
      preview: true,
      students: "3,200+",
      modules: [
        "The Science of Resilience",
        "Stress Management Fundamentals",
        "Emotional Regulation Techniques",
        "Building Mental Toughness",
        "Recovery and Growth Strategies",
        "Long-term Resilience Planning"
      ],
      learningOutcomes: [
        "Understand the neurobiological basis of resilience",
        "Master stress management techniques",
        "Develop emotional regulation skills",
        "Build mental toughness and perseverance",
        "Create personal resilience plans"
      ]
    }
  };

  const seminar = seminars[id as keyof typeof seminars];

  if (!seminar) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Seminar Not Found</h1>
          <p className="text-muted-foreground mb-8">The seminar you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/seminars">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Seminars
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-healing-light/30 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/seminars" className="text-muted-foreground hover:text-primary">Seminars</Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-primary font-medium">{seminar.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Button variant="ghost" size="sm" asChild className="mb-6">
                <Link to="/seminars">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back to Seminars
                </Link>
              </Button>

              <div className="flex flex-wrap gap-2 mb-4">
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
                <Badge variant="secondary">{seminar.category}</Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">{seminar.title}</h1>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center space-x-1">
                  <Clock className="w-5 h-5 text-sage" />
                  <span>{seminar.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-5 h-5 text-sage" />
                  <span>{seminar.enrolled.toLocaleString()} enrolled</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-sage text-sage" />
                  <span className="font-medium">{seminar.rating}</span>
                </div>
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
              </div>

              <p className="text-lg text-muted-foreground mb-8">{seminar.abstract}</p>
            </div>

            {/* Video Preview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Preview</h2>
              <div className="aspect-video bg-healing-light rounded-xl flex items-center justify-center relative overflow-hidden">
                <Play className="w-16 h-16 text-sage opacity-60" />
                <div className="absolute top-4 right-4">
                  {seminar.preview ? (
                    <Badge variant="outline" className="bg-background/90 border-sage">
                      <Play className="w-3 h-3 mr-1" />
                      Free Preview
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-background/90 border-primary">
                      <Lock className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">About This Seminar</h2>
              <p className="text-muted-foreground leading-relaxed">{seminar.fullDescription}</p>
            </div>

            {/* Modules */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
              <div className="space-y-3">
                {seminar.modules.map((module, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-sage text-primary-foreground flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Learning Outcomes</h2>
              <div className="space-y-3">
                {seminar.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-sage mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6 gradient-card border-sage/20">
              <CardHeader>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{seminar.price}</div>
                  <div className="text-sm text-muted-foreground">One-time purchase</div>
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full mb-4" 
                  size="lg"
                  onClick={() => setIsPaymentModalOpen(true)}
                >
                  Purchase Access
                </Button>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span>{seminar.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Level:</span>
                    <span>{seminar.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span>{seminar.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Students:</span>
                    <span>{seminar.enrolled.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-sage text-sage" />
                      <span>{seminar.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-sage/20">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Includes:</p>
                    <div className="space-y-1 text-sm">
                      <div>✓ Lifetime access</div>
                      <div>✓ Downloadable resources</div>
                      <div>✓ Certificate of completion</div>
                      <div>✓ Mobile & desktop access</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <SeminarPaymentModal
        seminar={seminar}
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </div>
  );
};

export default SeminarDetail;