import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { ArrowLeft } from "lucide-react";

const SponsorRegistration = () => {
  const navigate = useNavigate();

  const [walletAddress, setWalletAddress] = useState<string>("");

  const [fullName, setFullName] = useState("");
  const [profession, setProfession] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [bio, setBio] = useState("");

  // 🔥 Load wallet from localStorage
  useEffect(() => {
    const storedWallet = localStorage.getItem("walletAddress");
    if (storedWallet) {
      setWalletAddress(storedWallet);
    }
  }, []);

  const handleSubmit = async () => {
    if (!walletAddress) {
      alert("Wallet not connected!");
      return;
    }

    const sponsorData = {
      fullName,
      profession,
      graduationYear: graduationYear ? Number(graduationYear) : undefined,
      company,
      email,
      maxBudget: maxBudget ? Number(maxBudget) : undefined,
      bio,
      walletAddress, // 🔥 Important
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/sponsors",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sponsorData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save sponsor");
      }

      await response.json();

      alert("Profile saved successfully!");

      // 🔥 Redirect to Sponsor Dashboard
      navigate("/sponsor");

    } catch (error) {
      console.error("Error saving sponsor:", error);
      alert("Error saving profile");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-24 max-w-2xl">
        <PageBreadcrumb
          crumbs={[
            { label: "Sponsor", path: "/sponsor" },
            { label: "Complete Profile" },
          ]}
        />

        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
        </Link>

        <h1 className="text-3xl font-display font-bold mb-2">
          Complete Sponsor Profile
        </h1>
        <p className="text-muted-foreground mb-8">
          Provide your details to start sponsoring students.
        </p>

        <div className="bg-card rounded-xl p-6 md:p-8 border border-border card-elevated space-y-6">

          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Profession</Label>
              <Input
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Graduation Year</Label>
              <Input
                type="number"
                value={graduationYear}
                onChange={(e) => setGraduationYear(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Company / Organization</Label>
            <Input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Maximum Sponsorship Budget (₹)</Label>
            <Input
              type="number"
              value={maxBudget}
              onChange={(e) => setMaxBudget(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Short Bio</Label>
            <Textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label>Connected Wallet Address</Label>
            <Input value={walletAddress} readOnly />
          </div>

          <div className="flex gap-3">
            <Link to="/" className="flex-1">
              <Button variant="outline" className="w-full py-6 text-base">
                Cancel
              </Button>
            </Link>

            <Button
              className="flex-1 py-6 text-base"
              onClick={handleSubmit}
            >
              Save & Continue
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SponsorRegistration;
