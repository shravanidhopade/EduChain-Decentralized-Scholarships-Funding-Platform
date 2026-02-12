import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Search, Users, Heart, BarChart3, MessageCircle } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Browse Students", path: "/sponsor", icon: <Search className="h-4 w-4" /> },
  { label: "My Sponsorships", path: "/sponsor/sponsorships", icon: <Heart className="h-4 w-4" /> },
  { label: "Impact Dashboard", path: "/sponsor/impact", icon: <BarChart3 className="h-4 w-4" /> },
  { label: "Messages", path: "/sponsor/messages", icon: <MessageCircle className="h-4 w-4" /> },
  { label: "My Profile", path: "/sponsor/profile", icon: <Users className="h-4 w-4" /> },
];

const SponsorProfile = () => {
  // Temporary dummy values (later fetch from MongoDB)
  const [fullName, setFullName] = useState("Shravani Dhopade");
  const [profession, setProfession] = useState("Software Engineer");
  const [graduationYear, setGraduationYear] = useState("2020");
  const [company, setCompany] = useState("Infosys");
  const [email, setEmail] = useState("example@email.com");
  const [maxBudget, setMaxBudget] = useState("100000");
  const [bio, setBio] = useState("Passionate about supporting students.");

  return (
    <DashboardLayout navItems={navItems} role="Sponsor Dashboard">
      <div className="space-y-6">
        <PageBreadcrumb crumbs={[{ label: "Sponsor", path: "/sponsor" }, { label: "My Profile" }]} />
        <h1 className="text-2xl font-display font-bold">My Profile</h1>

        <div className="bg-card rounded-xl p-6 border border-border card-elevated space-y-6 max-w-2xl">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Profession</Label>
              <Input value={profession} onChange={(e) => setProfession(e.target.value)} />
            </div>

            <div className="space-y-2">
              <Label>Graduation Year</Label>
              <Input type="number" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Company / Organization</Label>
            <Input value={company} onChange={(e) => setCompany(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label>Maximum Sponsorship Budget (₹)</Label>
            <Input type="number" value={maxBudget} onChange={(e) => setMaxBudget(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label>Short Bio</Label>
            <Textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3} />
          </div>

          <div className="flex justify-end">
            <Button>Update Profile</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SponsorProfile;
