import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StatCard } from "@/components/shared/StatCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { Lock, Unlock, Users, Activity, Award } from "lucide-react";
import { useState } from "react";

interface Transaction {
  hash: string;
  type: string;
  amount: string;
  student: string;
  time: string;
}

interface Sponsor {
  name: string;
  amount: string;
  students: number;
}

const Transparency = () => {
  const [transactions] = useState<Transaction[]>([]);
  const [topSponsors] = useState<Sponsor[]>([]);
  const [totalLocked] = useState(0);
  const [totalReleased] = useState(0);
  const [studentsSponsored] = useState(0);
  const [activeSponsors] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <PageBreadcrumb crumbs={[{ label: "Transparency & Impact" }]} />
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold">Transparency & Impact</h1>
          <p className="mt-3 text-muted-foreground">Every transaction is on-chain and verifiable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <StatCard label="Total Locked" value={`₹${totalLocked.toLocaleString("en-IN")}`} icon={<Lock className="h-5 w-5" />} />
          <StatCard label="Total Released" value={`₹${totalReleased.toLocaleString("en-IN")}`} icon={<Unlock className="h-5 w-5" />} />
          <StatCard label="Students Sponsored" value={String(studentsSponsored)} icon={<Users className="h-5 w-5" />} />
          <StatCard label="Active Sponsors" value={String(activeSponsors)} icon={<Award className="h-5 w-5" />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Transaction Feed */}
          <div className="lg:col-span-2 bg-card rounded-xl border border-border card-elevated">
            <div className="p-5 border-b border-border flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              <h2 className="font-display font-semibold text-lg">Live Transaction Feed</h2>
            </div>
            {transactions.length > 0 ? (
              <div className="divide-y divide-border">
                {transactions.map((tx) => (
                  <div key={tx.hash} className="px-5 py-4 flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium">{tx.type} — {tx.student}</p>
                      <p className="text-xs text-muted-foreground font-mono">{tx.hash}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-bold">{tx.amount}</p>
                      <p className="text-xs text-muted-foreground">{tx.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState message="No transactions yet." />
            )}
          </div>

          {/* Top Sponsors */}
          <div className="bg-card rounded-xl border border-border card-elevated">
            <div className="p-5 border-b border-border">
              <h2 className="font-display font-semibold text-lg">Top Sponsors</h2>
            </div>
            {topSponsors.length > 0 ? (
              <div className="divide-y divide-border">
                {topSponsors.map((s, i) => (
                  <div key={i} className="px-5 py-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent-foreground font-bold text-sm">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.students} students</p>
                    </div>
                    <span className="font-display font-bold text-sm">{s.amount}</span>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState message="No sponsors yet." />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Transparency;
