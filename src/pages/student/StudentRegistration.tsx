import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { Plus, X, Upload, ArrowLeft } from "lucide-react";

const StudentRegistration = () => {
  const [milestones, setMilestones] = useState(["Enrollment Verification", ""]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-2xl">
        <PageBreadcrumb crumbs={[{ label: "Student", path: "/student" }, { label: "Apply" }]} />
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
        </Link>
        <h1 className="text-3xl font-display font-bold mb-2">Apply for Sponsorship</h1>
        <p className="text-muted-foreground mb-8">Complete your profile to be matched with sponsors.</p>

        <div className="bg-card rounded-xl p-6 md:p-8 border border-border card-elevated space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <Label>Course / Field of Study</Label>
              <Input placeholder="e.g. Computer Science" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Funding Required (₹)</Label>
            <Input type="number" placeholder="e.g. 500000" />
          </div>

          <div className="space-y-2">
            <Label>Financial Need Description</Label>
            <Textarea placeholder="Describe your financial situation and why you need support..." rows={4} />
          </div>

          <div className="space-y-3">
            <Label>Proposed Milestones</Label>
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-2">
                <Input
                  value={m}
                  onChange={(e) => {
                    const copy = [...milestones];
                    copy[i] = e.target.value;
                    setMilestones(copy);
                  }}
                  placeholder={`Milestone ${i + 1}`}
                />
                {milestones.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMilestones(milestones.filter((_, j) => j !== i))}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => setMilestones([...milestones, ""])}>
              <Plus className="mr-1 h-4 w-4" /> Add Milestone
            </Button>
          </div>

          <div className="space-y-2">
            <Label>Supporting Documents</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Drag & drop or click to upload</p>
              <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG up to 10MB</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Link to="/" className="flex-1">
              <Button variant="outline" className="w-full py-6 text-base">Cancel</Button>
            </Link>
            <Button className="flex-1 py-6 text-base">Submit Application</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentRegistration;
