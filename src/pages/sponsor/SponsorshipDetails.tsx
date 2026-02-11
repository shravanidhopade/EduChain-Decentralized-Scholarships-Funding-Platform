import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MilestoneTracker } from "@/components/shared/MilestoneTracker";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { ArrowLeft, Lock, GraduationCap } from "lucide-react";

const milestones = [
  { title: "Enrollment (20%)", status: "upcoming" as const },
  { title: "Semester 1 (20%)", status: "upcoming" as const },
  { title: "Mid-Year (20%)", status: "upcoming" as const },
  { title: "Semester 2 (20%)", status: "upcoming" as const },
  { title: "Graduation (20%)", status: "upcoming" as const },
];

const SponsorshipDetails = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-3xl">
        <PageBreadcrumb crumbs={[{ label: "Sponsor", path: "/sponsor" }, { label: "Sponsorship Details" }]} />
        <Link to="/sponsor" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Students
        </Link>

        <div className="bg-card rounded-xl p-6 md:p-8 border border-border card-elevated mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold">Student Profile</h1>
              <p className="text-muted-foreground">Details will appear once a student is selected.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-muted rounded-lg p-3">
              <span className="text-muted-foreground">Requested Amount</span>
              <p className="font-display font-bold text-xl">₹—</p>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <span className="text-muted-foreground">Duration</span>
              <p className="font-display font-bold text-xl">—</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 md:p-8 border border-border card-elevated mb-6">
          <h2 className="font-display font-semibold text-lg mb-4">Milestone Breakdown</h2>
          <MilestoneTracker milestones={milestones} />
          <div className="mt-4 text-sm text-muted-foreground">
            Each milestone releases 20% of the total sponsorship amount upon verification.
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 md:p-8 border border-border card-elevated">
          <h2 className="font-display font-semibold text-lg mb-4">Sponsor This Student</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Sponsorship Amount (₹)</Label>
              <Input type="number" placeholder="e.g. 500000" />
            </div>

            <div className="bg-muted/50 rounded-lg p-4 text-sm space-y-2">
              <h3 className="font-medium">Agreement Summary</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Funds will be locked in a smart contract escrow</li>
                <li>• Released in 5 milestones (20% each)</li>
                <li>• Institution verifies each milestone</li>
                <li>• Unused funds are returned after contract expiry</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Link to="/sponsor" className="flex-1">
                <Button variant="outline" className="w-full py-6 text-base">Cancel</Button>
              </Link>
              <Button className="flex-1 py-6 text-base">
                <Lock className="mr-2 h-5 w-5" /> Lock Funds in Escrow
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SponsorshipDetails;
