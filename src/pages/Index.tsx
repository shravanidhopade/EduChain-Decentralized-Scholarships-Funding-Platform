import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Milestone, Shield, BookOpen, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: <Milestone className="h-7 w-7" />,
    title: "Milestone-Based Fund Release",
    description: "Funds are released only when students hit verified academic milestones, ensuring accountability.",
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Transparent Escrow",
    description: "Smart contracts lock funds in escrow, visible on-chain for full transparency.",
  },
  {
    icon: <BookOpen className="h-7 w-7" />,
    title: "Student Progress Passport",
    description: "A verifiable record of academic achievements, certifications, and growth milestones.",
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Mentor Connect",
    description: "Alumni mentors guide sponsored students through their academic journey.",
  },
];

const steps = [
  { num: "01", title: "Student Applies", desc: "Submit application with milestones and documentation." },
  { num: "02", title: "Sponsor Matches", desc: "Alumni sponsors browse and select students to fund." },
  { num: "03", title: "Funds Locked", desc: "Sponsorship amount is locked in a smart contract escrow." },
  { num: "04", title: "Milestones Verified", desc: "Institution verifies progress, funds release automatically." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient-bg overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-lighten"
        />
        <div className="relative container mx-auto px-4 py-32 text-center">
          <div className="animate-fade-up max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-secondary-foreground leading-tight">
              Empowering Students Through{" "}
              <span className="text-gradient">Transparent Blockchain</span>{" "}
              Sponsorship
            </h1>
            <p className="mt-6 text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto">
              A milestone-based scholarship platform connecting students with alumni sponsors. 
              Every fund release is verifiable, transparent, and accountable.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-1">
              <Link to="/student/register">
                <Button size="lg" className="text-base px-8 py-6">
                  Apply for Sponsorship <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="text-base px-8 py-6 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                  Become a Sponsor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Why Sponsor-a-Student?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Built on blockchain technology for complete transparency and trust.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`bg-card rounded-xl p-6 card-elevated border border-border animate-fade-up-delay-${Math.min(i, 3)}`}
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">{f.icon}</div>
                <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold">How It Works</h2>
            <p className="mt-4 text-muted-foreground">From application to fund release — fully on-chain.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="relative">
                <div className="text-5xl font-display font-bold text-primary/15 mb-2">{s.num}</div>
                <h3 className="font-display font-semibold text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" /> {s.title}
                </h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 hero-gradient-bg text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground">
            Ready to Make a Difference?
          </h2>
          <p className="mt-4 text-secondary-foreground/70 max-w-lg mx-auto">
            Join a growing network of sponsors and students building a transparent future in education.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="px-8 py-6">Get Started</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
