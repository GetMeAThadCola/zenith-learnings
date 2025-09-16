import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Mail, Calendar, LogOut, CreditCard, Smartphone, Wallet } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccountModal = ({ isOpen, onClose }: AccountModalProps) => {
  const { user, signOut } = useAuth();

  if (!user) return null;

  const handleSignOut = async () => {
    await signOut();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>Account Information</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-4 bg-healing-light rounded-lg">
            <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center">
              <User className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="font-medium">{user.email}</p>
              <Badge variant="secondary" className="mt-1">
                Active User
              </Badge>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Member Since</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(user.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h4 className="text-sm font-medium">My Seminars</h4>
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                Your purchased seminars will appear here
              </p>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Payment & Billing</h4>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Payment Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" className="flex flex-col items-center p-4 h-auto">
                    <CreditCard className="w-5 h-5 mb-1" />
                    <span className="text-xs">Credit Card</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex flex-col items-center p-4 h-auto">
                    <Smartphone className="w-5 h-5 mb-1" />
                    <span className="text-xs">Google Pay</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex flex-col items-center p-4 h-auto">
                    <Wallet className="w-5 h-5 mb-1" />
                    <span className="text-xs">PayPal</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex flex-col items-center p-4 h-auto">
                    <Smartphone className="w-5 h-5 mb-1" />
                    <span className="text-xs">Apple Pay</span>
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="w-full">
                  Manage Payment Methods
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Billing Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  <p>No payment methods added yet</p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto mt-2">
                    Add payment method
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button 
            variant="outline" 
            className="w-full" 
            onClick={handleSignOut}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AccountModal;