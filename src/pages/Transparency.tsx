import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StatCard } from "@/components/shared/StatCard";
import { Lock, Unlock, Users, Activity, Award } from "lucide-react";

const transactions = [
  { hash: "0xa3f2...b8c1", type: "Fund Release", amount: "$2,400", student: "Priya Sharma", time: "2 min ago" },
  { hash: "0xd7e4...1a9f", type: "Escrow Lock", amount: "$8,000", student: "Ahmed Hassan", time: "15 min ago" },
  { hash: "0xb1c5...4d2e", type: "Fund Release", amount: "$1,500", student: "Maria Santos", time: "1 hr ago" },
  { hash: "0xf9a8...7c3b", type: "Escrow Lock", amount: "$12,000", student: "James Okafor", time: "3 hrs ago" },
  { hash: "0xe6d3...2f5a", type: "Fund Release", amount: "$3,000", student: "Lin Wei", time: "5 hrs ago" },
];

const topSponsors = [
  { name: "Dr. Anita Rao", amount: "$45,000", students: 8 },
  { name: "Tech Alumni Fund", amount: "$32,000", students: 6 },
  { name: "Global Ed Foundation", amount: "$28,500", students: 5 },
];

const Transparency = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-display font-bold">Transparency & Impact</h1>
        <p className="mt-3 text-muted-foreground">Every transaction is on-chain and verifiable.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        <StatCard label="Total Locked" value="$185,000" icon={<Lock className="h-5 w-5" />} />
        <StatCard label="Total Released" value="$94,200" icon={<Unlock className="h-5 w-5" />} />
        <StatCard label="Students Sponsored" value="42" icon={<Users className="h-5 w-5" />} />
        <StatCard label="Active Sponsors" value="23" icon={<Award className="h-5 w-5" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transaction Feed */}
        <div className="lg:col-span-2 bg-card rounded-xl border border-border card-elevated">
          <div className="p-5 border-b border-border flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <h2 className="font-display font-semibold text-lg">Live Transaction Feed</h2>
          </div>
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
        </div>

        {/* Top Sponsors */}
        <div className="bg-card rounded-xl border border-border card-elevated">
          <div className="p-5 border-b border-border">
            <h2 className="font-display font-semibold text-lg">Top Sponsors</h2>
          </div>
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
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Transparency;
