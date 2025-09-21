import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Camera, FileText, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import communityImage from "@/assets/community-recycling.jpg";

const ComplaintForm = () => {
  const [complaintData, setComplaintData] = useState({
    complaintNo: `${Date.now().toString().slice(-8)}`,
    dustbinNo: "",
    location: "",
    category: "",
    description: "",
    images: [] as File[]
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Complaint Submitted Successfully",
      description: `Complaint #${complaintData.complaintNo} has been registered. You will receive updates via email.`,
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      setComplaintData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    }
  };

  return (
    <section id="complaints" className="py-20 bg-eco-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-eco-dark mb-4">Report a Complaint</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help us maintain a clean environment by reporting waste management issues in your area.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Complaint Form */}
          <Card className="shadow-eco">
            <CardHeader>
              <CardTitle className="flex items-center text-eco-dark">
                <FileText className="h-6 w-6 mr-2" />
                Complaint Details
              </CardTitle>
              <CardDescription>
                Fill out the form below to submit your waste management complaint
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="complaintNo">Complaint No.</Label>
                    <Input 
                      id="complaintNo"
                      value={complaintData.complaintNo}
                      disabled
                      className="bg-muted"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dustbinNo">Dustbin No.</Label>
                    <Input 
                      id="dustbinNo"
                      placeholder="e.g., A-105"
                      value={complaintData.dustbinNo}
                      onChange={(e) => setComplaintData(prev => ({...prev, dustbinNo: e.target.value}))}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="location">Location (Hostel/Campus)</Label>
                  <Input 
                    id="location"
                    placeholder="e.g., Campus of VSSUT, Burla"
                    value={complaintData.location}
                    onChange={(e) => setComplaintData(prev => ({...prev, location: e.target.value}))}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={complaintData.category} onValueChange={(value) => setComplaintData(prev => ({...prev, category: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select complaint category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dry-waste">Dry Waste</SelectItem>
                      <SelectItem value="wet-waste">Wet Waste</SelectItem>
                      <SelectItem value="mixed-waste">Mixed Waste</SelectItem>
                      <SelectItem value="overflowing">Overflowing Bins</SelectItem>
                      <SelectItem value="damaged-bin">Damaged Dustbin</SelectItem>
                      <SelectItem value="missed-pickup">Missed Pickup</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description"
                    placeholder="Describe the issue in detail..."
                    rows={4}
                    value={complaintData.description}
                    onChange={(e) => setComplaintData(prev => ({...prev, description: e.target.value}))}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="images">Upload Images</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground mb-2">Upload photos of the issue</p>
                    <input
                      type="file"
                      id="images"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => document.getElementById('images')?.click()}
                    >
                      <Camera className="h-4 w-4 mr-2" />
                      Choose Files
                    </Button>
                    {complaintData.images.length > 0 && (
                      <p className="text-sm text-eco-green mt-2">
                        {complaintData.images.length} image(s) selected
                      </p>
                    )}
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Complaint
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Community Section */}
          <div className="space-y-6">
            <Card className="shadow-eco">
              <CardContent className="p-6">
                <div className="text-center">
                  <img 
                    src={communityImage} 
                    alt="Community working together for recycling"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-eco-dark mb-2">
                    "Join us to build a better tomorrow."
                  </h3>
                  <p className="text-muted-foreground">
                    Together we can create a cleaner, more sustainable environment for future generations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-eco">
              <CardHeader>
                <CardTitle className="flex items-center text-eco-dark">
                  <AlertCircle className="h-6 w-6 mr-2" />
                  Quick Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-eco-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Include clear photos showing the waste management issue
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-eco-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Provide exact location details for faster resolution
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-eco-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Check dustbin numbers for accurate reporting
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-eco-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    You'll receive email updates on complaint status
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplaintForm;