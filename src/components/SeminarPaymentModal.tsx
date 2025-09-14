import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users, Play } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Seminar {
  title: string;
  abstract: string;
  price: string;
  duration: string;
  rating: number;
  students: string;
  isPopular?: boolean;
  isNew?: boolean;
  isPremium?: boolean;
}

interface SeminarPaymentModalProps {
  seminar: Seminar | null;
  isOpen: boolean;
  onClose: () => void;
}

const SeminarPaymentModal = ({ seminar, isOpen, onClose }: SeminarPaymentModalProps) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  if (!seminar) return null;

  const handlePurchase = async () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to purchase seminars.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: { 
          priceId: 'price_1QgvPYGlqOvAcpqUK8m2PbpO', // This should match your actual Stripe price
          seminarTitle: seminar.title 
        }
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
        onClose();
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error",
        description: "Unable to process payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{seminar.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {seminar.isPopular && (
              <Badge variant="secondary" className="bg-sage text-primary-foreground">
                Most Popular
              </Badge>
            )}
            {seminar.isNew && (
              <Badge variant="secondary" className="bg-healing text-foreground">
                New
              </Badge>
            )}
            {seminar.isPremium && (
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                Premium
              </Badge>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {seminar.abstract}
          </p>

          <div className="grid grid-cols-3 gap-4 p-4 bg-healing-light rounded-lg">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Clock className="w-4 h-4 text-sage" />
                <span className="text-sm font-medium">{seminar.duration}</span>
              </div>
              <span className="text-xs text-muted-foreground">Duration</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Star className="w-4 h-4 text-sage fill-sage" />
                <span className="text-sm font-medium">{seminar.rating}</span>
              </div>
              <span className="text-xs text-muted-foreground">Rating</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Users className="w-4 h-4 text-sage" />
                <span className="text-sm font-medium">{seminar.students}</span>
              </div>
              <span className="text-xs text-muted-foreground">Students</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-background border border-sage/20 rounded-lg">
            <div>
              <p className="text-sm text-muted-foreground">Price</p>
              <p className="text-2xl font-bold text-primary">{seminar.price}</p>
            </div>
            <Button 
              variant="hero" 
              size="lg"
              onClick={handlePurchase}
              disabled={loading}
              className="min-w-[120px]"
            >
              {loading ? (
                "Processing..."
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Purchase Access
                </>
              )}
            </Button>
          </div>

          {!user && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                Please sign in to purchase and access seminars
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SeminarPaymentModal;