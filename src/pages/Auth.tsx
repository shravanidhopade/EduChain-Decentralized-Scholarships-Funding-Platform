import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { Wallet, GraduationCap, Users, ShieldCheck, Check, ArrowLeft } from "lucide-react";

const roles = [
  { id: "student", label: "Student", icon: <GraduationCap className="h-6 w-6" />, desc: "Apply for scholarships", path: "/student" },
  { id: "sponsor", label: "Sponsor", icon: <Users className="h-6 w-6" />, desc: "Fund a student", path: "/sponsor" },
  { id: "admin", label: "Admin", icon: <ShieldCheck className="h-6 w-6" />, desc: "Verify milestones", path: "/admin" },
];

const Auth = () => {
  const [connected, setConnected] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="w-full max-w-md space-y-8">
          <div>
            <PageBreadcrumb crumbs={[{ label: "Connect Wallet" }]} />
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
            </Link>
            <h1 className="text-3xl font-display font-bold">Connect & Continue</h1>
            <p className="mt-2 text-muted-foreground">Link your wallet to access EduChain.</p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border card-elevated space-y-4">
            {!connected ? (
              <Button className="w-full py-6 text-base" onClick={() => setConnected(true)}>
                <Wallet className="mr-2 h-5 w-5" /> Connect Wallet
              </Button>
            ) : (
              <div className="flex items-center gap-3 bg-success/10 text-success rounded-lg p-4">
                <Check className="h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">Wallet Connected</p>
                  <p className="text-xs font-mono opacity-70">0x1a2B...9cDe</p>
                </div>
              </div>
            )}
          </div>

          {connected && (
            <div className="space-y-4 animate-fade-up">
              <p className="text-sm font-medium text-center">Select your role</p>
              <div className="grid grid-cols-3 gap-3">
                {roles.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRole(r.id)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                      selectedRole === r.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    <div className={selectedRole === r.id ? "text-primary" : "text-muted-foreground"}>{r.icon}</div>
                    <span className="text-sm font-medium">{r.label}</span>
                  </button>
                ))}
              </div>

              {selectedRole && (
                <div className="space-y-2">
                  <Link to={roles.find((r) => r.id === selectedRole)!.path}>
                    <Button className="w-full py-6 text-base">
                      Continue as {roles.find((r) => r.id === selectedRole)!.label}
                    </Button>
                  </Link>
                  <Button variant="ghost" className="w-full" onClick={() => { setSelectedRole(null); setConnected(false); }}>
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
