import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MilestoneTracker } from "@/components/shared/MilestoneTracker";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Lock, GraduationCap } from "lucide-react";

const milestones = [
  { title: "Enrollment (20%)", status: "upcoming" as const },
  { title: "Semester 1 (20%)", status: "upcoming" as const },
  { title: "Mid-Year (20%)", status: "upcoming" as const },
  { title: "Semester 2 (20%)", status: "upcoming" as const },
  { title: "Graduation (20%)", status: "upcoming" as const },
];

const SponsorshipDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-3xl">
        <Link to="/sponsor" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Students
        </Link>

        {/* Student Profile */}
        <div className="bg-card rounded-xl p-6 md:p-8 border border-border card-elevated mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold">James Okafor</h1>
              <p className="text-muted-foreground">Mechanical Engineering • University of Lagos</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            Orphaned student with an outstanding academic record. James has maintained a 3.8 GPA 
            while working part-time. He needs funding to complete his final two years of study 
            and focus on his research in renewable energy systems.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-muted rounded-lg p-3">
              <span className="text-muted-foreground">Requested Amount</span>
              <p className="font-display font-bold text-xl">$12,000</p>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <span className="text-muted-foreground">Duration</span>
              <p className="font-display font-bold text-xl">2 Years</p>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-card rounded-xl p-6 md:p-8 border border-border card-elevated mb-6">
          <h2 className="font-display font-semibold text-lg mb-4">Milestone Breakdown</h2>
          <MilestoneTracker milestones={milestones} />
          <div className="mt-4 text-sm text-muted-foreground">
            Each milestone releases 20% of the total sponsorship amount upon verification.
          </div>
        </div>

        {/* Sponsor Form */}
        <div className="bg-card rounded-xl p-6 md:p-8 border border-border card-elevated">
          <h2 className="font-display font-semibold text-lg mb-4">Sponsor This Student</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Sponsorship Amount (USD)</Label>
              <Input type="number" placeholder="e.g. 12000" />
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

            <Button className="w-full py-6 text-base">
              <Lock className="mr-2 h-5 w-5" /> Lock Funds in Escrow
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SponsorshipDetails;
