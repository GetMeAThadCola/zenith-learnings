import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Play, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideoPoster from "@/assets/hero-video-poster.jpg";
import drProfile from "@/assets/dr-profile.jpg";

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

const Home = () => {
  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Professionals Trained", value: "10,000+" },
    { label: "Organizations Served", value: "500+" },
    { label: "5-Star Reviews", value: "98%" },
  ];

  const featuredSeminars = [
    {
      title: "Understanding Depression in the Workplace",
      duration: "45 minutes",
      price: "$49",
      description:
        "Evidence-based strategies for recognizing and addressing workplace depression.",
      badge: "Most Popular",
    },
    {
      title: "Anxiety Management for Teams",
      duration: "35 minutes",
      price: "$39",
      description:
        "Practical tools for managing anxiety in professional environments.",
      badge: "New",
    },
    {
      title: "Building Resilience",
      duration: "60 minutes",
      price: "$59",
      description:
        "Develop psychological resilience for personal and professional growth.",
      badge: "Deep Dive",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-primary-foreground">
              <Badge className="mb-6 bg-sage text-primary-foreground">
                Master's in Psychology • 15+ Years Experience
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Expert Mental Health{" "}
                <span className="block text-sage-light">Education & Training</span>
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                Evidence-based seminars on depression, anxiety, and resilience for teams, schools,
                and communities from Kristin Bauer. Transform your organization's mental health
                literacy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="sage" size="lg" asChild>
                  <Link to="/seminars" aria-label="Watch Seminars">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Seminars
                  </Link>
                </Button>
                {/* Always-readable white button */}
                <Button
                  variant="outline"
                  size="lg"
                  className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50"
                  asChild
                >
                  <Link to="/book" aria-label="Book Speaking Engagement">
                    Book Speaking Engagement
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-sage-light">{stat.value}</div>
                    <div className="text-sm text-primary-foreground/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Video */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={heroVideoPoster}
                  alt="Kristin Bauer speaking at a professional seminar"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="rounded-full w-20 h-20 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow"
                    aria-label="Play intro video"
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-foreground rounded-xl p-4 shadow-elevated">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-sage border-2 border-primary-foreground"
                      />
                    ))}
                  </div>
                  <div className="text-sm font-medium text-primary">
                    <div className="font-bold">2,500+</div>
                    <div className="text-xs text-muted-foreground">Enrolled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Seminars */}
      <section className="py-20 bg-healing-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-sage text-primary-foreground">Featured Seminars</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Professional Mental Health Training</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive, evidence-based seminars designed for professionals, organizations, and
              individuals seeking to enhance mental health literacy.
            </p>
          </div>

          {/* WHOLE card is a link to /seminars/:slug */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSeminars.map((seminar, index) => {
              const slug = slugify(seminar.title);
              return (
                <Link
                  key={index}
                  to={`/seminars/${slug}`}
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-sage/60 rounded-xl"
                  aria-label={`Open seminar: ${seminar.title}`}
                >
                  <Card className="gradient-card border-sage/20 hover:shadow-elevated transition-gentle">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Badge variant="secondary" className="bg-sage text-primary-foreground">
                          {seminar.badge}
                        </Badge>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{seminar.price}</div>
                          <div className="text-sm text-muted-foreground">{seminar.duration}</div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-gentle">
                        {seminar.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">{seminar.description}</p>

                      <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-gentle">
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/seminars">
                View All Seminars
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={drProfile}
                alt="Kristin Bauer, Licensed Psychologist"
                className="rounded-2xl shadow-elevated w-full max-w-md mx-auto lg:max-w-none"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-foreground rounded-xl p-4 shadow-elevated">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-sage" />
                  <div className="text-sm">
                    <div className="font-bold text-primary">Licensed</div>
                    <div className="text-xs text-muted-foreground">CA PSY12345</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Badge className="mb-4 bg-sage text-primary-foreground">Meet Kristin</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">15+ Years of Clinical Excellence</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Kristin Bauer holds a Master's degree in Psychology with over 15 years of experience
                in treating depression, anxiety, and trauma. She specializes in evidence-based
                therapeutic approaches and has trained thousands of professionals worldwide.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Master's in Psychology",
                  "Licensed Psychologist",
                  "500+ Organizations Trained",
                  "TEDx Speaker on Mental Health",
                ].map((credential, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-sage" />
                    <span className="text-muted-foreground">{credential}</span>
                  </div>
                ))}
              </div>

              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  Learn More About Kristin
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Transform Your Organization's Mental Health?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have enhanced their mental health literacy through
            Kristin's evidence-based seminars and training programs.
          </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="sage" size="lg" asChild>
              <Link to="/seminars" aria-label="Start Learning Today">
                <Play className="w-5 h-5 mr-2" />
                Start Learning Today
              </Link>
            </Button>
            {/* Always-readable white outline button */}
            <Button
              variant="outline"
              size="lg"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50"
              asChild
            >
              <Link to="/book" aria-label="Book Speaking Engagement">
                Book Speaking Engagement
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
