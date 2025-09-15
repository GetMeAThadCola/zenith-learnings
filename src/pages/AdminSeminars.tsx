import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Trash2, Edit, Plus, Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Seminar {
  id: string;
  title: string;
  abstract: string;
  description: string;
  duration: number;
  price: number;
  category: string;
  difficulty: string;
  isPopular?: boolean;
  isNew?: boolean;
  isDeepDive?: boolean;
  isPremium?: boolean;
  preview: boolean;
}

const AdminSeminars = () => {
  const { toast } = useToast();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  
  // Initial seminars data - in a real app this would come from a database
  const [seminars, setSeminars] = useState<Seminar[]>([
    {
      id: "understanding-depression",
      title: "Understanding Depression in the Workplace",
      abstract: "Comprehensive guide to recognizing, understanding, and addressing depression in professional environments.",
      description: "This evidence-based seminar provides essential knowledge for managers, HR professionals, and team leaders.",
      duration: 45,
      price: 49,
      category: "Depression",
      difficulty: "Beginner",
      isPopular: true,
      preview: true
    },
    {
      id: "anxiety-management-teams",
      title: "Anxiety Management for Teams",
      abstract: "Practical tools and strategies for managing anxiety in team environments and high-pressure situations.",
      description: "Learn evidence-based techniques for helping team members manage anxiety, reduce workplace stress.",
      duration: 35,
      price: 39,
      category: "Anxiety",
      difficulty: "Beginner",
      isNew: true,
      preview: true
    },
    {
      id: "building-resilience",
      title: "Building Psychological Resilience",
      abstract: "Deep dive into developing resilience for personal and professional growth in challenging environments.",
      description: "Comprehensive training on building psychological resilience, managing stress, and developing coping strategies.",
      duration: 60,
      price: 59,
      category: "Resilience",
      difficulty: "Intermediate",
      isDeepDive: true,
      preview: true
    }
  ]);

  const [newSeminar, setNewSeminar] = useState<Partial<Seminar>>({
    title: "",
    abstract: "",
    description: "",
    duration: 45,
    price: 49,
    category: "Depression",
    difficulty: "Beginner",
    preview: true
  });

  const categories = ["Depression", "Anxiety", "Resilience", "Trauma", "Mindfulness", "Crisis"];
  const difficulties = ["Beginner", "Intermediate", "Advanced"];

  const handleEdit = (seminar: Seminar) => {
    setEditingId(seminar.id);
    setNewSeminar(seminar);
  };

  const handleSave = () => {
    if (editingId) {
      // Update existing seminar
      setSeminars(prev => prev.map(s => 
        s.id === editingId ? { ...newSeminar as Seminar, id: editingId } : s
      ));
      toast({
        title: "Seminar Updated",
        description: "The seminar has been successfully updated.",
      });
    } else {
      // Add new seminar
      const id = newSeminar.title?.toLowerCase().replace(/[^a-z0-9]/g, '-') || 'new-seminar';
      setSeminars(prev => [...prev, { ...newSeminar as Seminar, id }]);
      toast({
        title: "Seminar Added",
        description: "A new seminar has been successfully added.",
      });
    }
    
    setEditingId(null);
    setShowAddForm(false);
    setNewSeminar({
      title: "",
      abstract: "",
      description: "",
      duration: 45,
      price: 49,
      category: "Depression",
      difficulty: "Beginner",
      preview: true
    });
  };

  const handleCancel = () => {
    setEditingId(null);
    setShowAddForm(false);
    setNewSeminar({
      title: "",
      abstract: "",
      description: "",
      duration: 45,
      price: 49,
      category: "Depression",
      difficulty: "Beginner",
      preview: true
    });
  };

  const handleDelete = (id: string) => {
    setSeminars(prev => prev.filter(s => s.id !== id));
    toast({
      title: "Seminar Deleted",
      description: "The seminar has been removed.",
      variant: "destructive"
    });
  };

  const renderSeminarForm = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{editingId ? 'Edit Seminar' : 'Add New Seminar'}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={newSeminar.title || ""}
              onChange={(e) => setNewSeminar(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Seminar title"
            />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Select 
              value={newSeminar.category || ""} 
              onValueChange={(value) => setNewSeminar(prev => ({ ...prev, category: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="abstract">Abstract</Label>
          <Textarea
            id="abstract"
            value={newSeminar.abstract || ""}
            onChange={(e) => setNewSeminar(prev => ({ ...prev, abstract: e.target.value }))}
            placeholder="Brief description"
            rows={2}
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={newSeminar.description || ""}
            onChange={(e) => setNewSeminar(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Detailed description"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="duration">Duration (minutes)</Label>
            <Input
              id="duration"
              type="number"
              value={newSeminar.duration || 45}
              onChange={(e) => setNewSeminar(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
            />
          </div>
          <div>
            <Label htmlFor="price">Price ($)</Label>
            <Input
              id="price"
              type="number"
              value={newSeminar.price || 49}
              onChange={(e) => setNewSeminar(prev => ({ ...prev, price: parseInt(e.target.value) }))}
            />
          </div>
          <div>
            <Label htmlFor="difficulty">Difficulty</Label>
            <Select 
              value={newSeminar.difficulty || ""} 
              onValueChange={(value) => setNewSeminar(prev => ({ ...prev, difficulty: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map(diff => (
                  <SelectItem key={diff} value={diff}>{diff}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="popular"
              checked={newSeminar.isPopular || false}
              onCheckedChange={(checked) => setNewSeminar(prev => ({ ...prev, isPopular: checked }))}
            />
            <Label htmlFor="popular">Popular</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="new"
              checked={newSeminar.isNew || false}
              onCheckedChange={(checked) => setNewSeminar(prev => ({ ...prev, isNew: checked }))}
            />
            <Label htmlFor="new">New</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="deepdive"
              checked={newSeminar.isDeepDive || false}
              onCheckedChange={(checked) => setNewSeminar(prev => ({ ...prev, isDeepDive: checked }))}
            />
            <Label htmlFor="deepdive">Deep Dive</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="premium"
              checked={newSeminar.isPremium || false}
              onCheckedChange={(checked) => setNewSeminar(prev => ({ ...prev, isPremium: checked }))}
            />
            <Label htmlFor="premium">Premium</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="preview"
              checked={newSeminar.preview || false}
              onCheckedChange={(checked) => setNewSeminar(prev => ({ ...prev, preview: checked }))}
            />
            <Label htmlFor="preview">Preview</Label>
          </div>
        </div>

        <div className="flex space-x-2">
          <Button onClick={handleSave} className="flex items-center">
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" onClick={handleCancel} className="flex items-center">
            <X className="w-4 h-4 mr-2" />
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Seminar Management</h1>
          <Button 
            onClick={() => setShowAddForm(true)} 
            className="flex items-center"
            disabled={showAddForm || editingId !== null}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Seminar
          </Button>
        </div>

        {(showAddForm || editingId) && renderSeminarForm()}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seminars.map((seminar) => (
            <Card key={seminar.id} className="gradient-card border-sage/20">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {seminar.isPopular && (
                      <Badge className="bg-sage text-primary-foreground text-xs">Popular</Badge>
                    )}
                    {seminar.isNew && (
                      <Badge className="bg-healing text-foreground text-xs">New</Badge>
                    )}
                    {seminar.isDeepDive && (
                      <Badge className="bg-primary text-primary-foreground text-xs">Deep Dive</Badge>
                    )}
                    {seminar.isPremium && (
                      <Badge className="bg-gradient-accent text-foreground text-xs">Premium</Badge>
                    )}
                  </div>
                  <div className="flex space-x-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleEdit(seminar)}
                      disabled={editingId !== null || showAddForm}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDelete(seminar.id)}
                      disabled={editingId !== null || showAddForm}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-lg">{seminar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{seminar.abstract}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span>{seminar.duration} min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-bold text-primary">${seminar.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <Badge variant="secondary" className="text-xs">{seminar.category}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Difficulty:</span>
                    <Badge variant="outline" className="text-xs">{seminar.difficulty}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSeminars;