import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Recycle, Package, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import recyclingImage from "@/assets/recycling-bins.jpg";

const ReusableWaste = () => {
  const [submissionData, setSubmissionData] = useState({
    submissionNo: `RW${Date.now().toString().slice(-6)}`,
    itemName: "",
    category: "",
    condition: "",
    description: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    address: "",
    pickupRequired: false,
    images: [] as File[]
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reusable Item Submitted Successfully",
      description: `Submission #${submissionData.submissionNo} has been registered. We'll contact you soon for pickup/collection.`,
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      setSubmissionData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    }
  };

  const categories = [
    { value: "electronics", label: "Electronics (phones, laptops, etc.)" },
    { value: "furniture", label: "Furniture (chairs, tables, etc.)" },
    { value: "clothing", label: "Clothing & Textiles" },
    { value: "books", label: "Books & Educational Materials" },
    { value: "toys", label: "Toys & Games" },
    { value: "kitchenware", label: "Kitchenware & Utensils" },
    { value: "sports", label: "Sports Equipment" },
    { value: "other", label: "Other Reusable Items" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-eco-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-eco-dark mb-4">Submit Reusable Home Waste</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Give your unwanted items a second life! Submit reusable items for donation or recycling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Submission Form */}
          <Card className="shadow-eco">
            <CardHeader>
              <CardTitle className="flex items-center text-eco-dark">
                <Package className="h-6 w-6 mr-2" />
                Item Submission Form
              </CardTitle>
              <CardDescription>
                Help reduce waste by donating or recycling your reusable items
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="submissionNo">Submission No.</Label>
                    <Input 
                      id="submissionNo"
                      value={submissionData.submissionNo}
                      disabled
                      className="bg-muted"
                    />
                  </div>
                  <div>
                    <Label htmlFor="itemName">Item Name</Label>
                    <Input 
                      id="itemName"
                      placeholder="e.g., Office Chair, Study Table"
                      value={submissionData.itemName}
                      onChange={(e) => setSubmissionData(prev => ({...prev, itemName: e.target.value}))}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={submissionData.category} onValueChange={(value) => setSubmissionData(prev => ({...prev, category: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select item category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="condition">Item Condition</Label>
                  <Select value={submissionData.condition} onValueChange={(value) => setSubmissionData(prev => ({...prev, condition: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent - Like new</SelectItem>
                      <SelectItem value="good">Good - Minor wear</SelectItem>
                      <SelectItem value="fair">Fair - Some wear but functional</SelectItem>
                      <SelectItem value="poor">Poor - Needs repair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description"
                    placeholder="Describe the item, its condition, and any relevant details..."
                    rows={3}
                    value={submissionData.description}
                    onChange={(e) => setSubmissionData(prev => ({...prev, description: e.target.value}))}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactName">Your Name</Label>
                    <Input 
                      id="contactName"
                      placeholder="Full name"
                      value={submissionData.contactName}
                      onChange={(e) => setSubmissionData(prev => ({...prev, contactName: e.target.value}))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactPhone">Phone Number</Label>
                    <Input 
                      id="contactPhone"
                      placeholder="+1234567890"
                      value={submissionData.contactPhone}
                      onChange={(e) => setSubmissionData(prev => ({...prev, contactPhone: e.target.value}))}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contactEmail">Email Address</Label>
                  <Input 
                    id="contactEmail"
                    type="email"
                    placeholder="your.email@example.com"
                    value={submissionData.contactEmail}
                    onChange={(e) => setSubmissionData(prev => ({...prev, contactEmail: e.target.value}))}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="address">Pickup Address</Label>
                  <Textarea 
                    id="address"
                    placeholder="Full address for item pickup..."
                    rows={2}
                    value={submissionData.address}
                    onChange={(e) => setSubmissionData(prev => ({...prev, address: e.target.value}))}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="pickupRequired"
                    checked={submissionData.pickupRequired}
                    onCheckedChange={(checked) => setSubmissionData(prev => ({...prev, pickupRequired: checked as boolean}))}
                  />
                  <Label htmlFor="pickupRequired" className="text-sm">
                    I need pickup service (we'll arrange collection from your address)
                  </Label>
                </div>

                <div>
                  <Label htmlFor="images">Upload Item Photos</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground mb-2">Upload clear photos of your item</p>
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
                      Choose Photos
                    </Button>
                    {submissionData.images.length > 0 && (
                      <p className="text-sm text-eco-green mt-2">
                        {submissionData.images.length} photo(s) selected
                      </p>
                    )}
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Heart className="h-4 w-4 mr-2" />
                  Submit for Reuse
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Information Section */}
          <div className="space-y-6">
            <Card className="shadow-eco">
              <CardContent className="p-6">
                <div className="text-center">
                  <img 
                    src={recyclingImage} 
                    alt="Recycling bins for waste separation"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-eco-dark mb-2">
                    Reduce, Reuse, Recycle
                  </h3>
                  <p className="text-muted-foreground">
                    Your contribution helps build a sustainable community by giving items a second life.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-eco">
              <CardHeader>
                <CardTitle className="flex items-center text-eco-dark">
                  <Recycle className="h-6 w-6 mr-2" />
                  What Happens Next?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-eco-green text-white rounded-full text-sm font-bold mr-3 mt-0.5">1</span>
                    <div>
                      <h4 className="font-semibold text-eco-dark">Review & Verification</h4>
                      <p className="text-sm text-muted-foreground">We review your submission and verify item details</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-eco-green text-white rounded-full text-sm font-bold mr-3 mt-0.5">2</span>
                    <div>
                      <h4 className="font-semibold text-eco-dark">Pickup Arrangement</h4>
                      <p className="text-sm text-muted-foreground">If pickup is needed, we'll schedule a convenient time</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-eco-green text-white rounded-full text-sm font-bold mr-3 mt-0.5">3</span>
                    <div>
                      <h4 className="font-semibold text-eco-dark">Redistribution</h4>
                      <p className="text-sm text-muted-foreground">Items are donated to those in need or recycled properly</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-eco-green text-white shadow-eco">
              <CardContent className="p-6 text-center">
                <Recycle className="h-12 w-12 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Environmental Impact</h3>
                <p className="text-sm">Every item you donate saves resources and reduces landfill waste.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReusableWaste;