import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download, Play, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Success Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-sage flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <Badge className="mb-4 bg-sage text-primary-foreground">
              Payment Successful
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Welcome to Zenith Learnings!
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Your payment has been processed successfully. You now have access to premium 
              mental health training content from Kristin Bauer.
            </p>

            <Card className="gradient-card border-sage/20 mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">What happens next?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg bg-sage flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold mb-2">Check Your Email</h3>
                    <p className="text-sm text-muted-foreground">
                      A confirmation email with access details has been sent to you.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg bg-sage flex items-center justify-center mx-auto mb-4">
                      <Play className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold mb-2">Access Content</h3>
                    <p className="text-sm text-muted-foreground">
                      Start watching premium seminars and accessing exclusive resources.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg bg-sage flex items-center justify-center mx-auto mb-4">
                      <Download className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold mb-2">Download Materials</h3>
                    <p className="text-sm text-muted-foreground">
                      Get handouts, worksheets, and supplementary training materials.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/seminars">
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">
                  Return Home
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 p-6 bg-healing-light/30 rounded-lg">
              <h3 className="font-bold mb-2">Need Support?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                If you have any questions or need assistance accessing your content, 
                our support team is here to help.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentSuccess;