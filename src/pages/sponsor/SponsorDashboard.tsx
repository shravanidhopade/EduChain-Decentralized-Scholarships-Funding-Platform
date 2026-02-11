import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/shared/StatCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Users, Heart, BarChart3, MessageCircle, Filter, DollarSign, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Browse Students", path: "/sponsor", icon: <Search className="h-4 w-4" /> },
  { label: "My Sponsorships", path: "/sponsor/sponsorships", icon: <Heart className="h-4 w-4" /> },
  { label: "Impact Dashboard", path: "/sponsor/impact", icon: <BarChart3 className="h-4 w-4" /> },
  { label: "Messages", path: "/sponsor/messages", icon: <MessageCircle className="h-4 w-4" /> },
];

const students = [
  { id: 1, name: "Priya Sharma", course: "Computer Science", need: 8000, desc: "First-gen college student from rural India.", urgency: "High" },
  { id: 2, name: "James Okafor", course: "Mechanical Engineering", need: 12000, desc: "Orphaned student with outstanding academic record.", urgency: "Critical" },
  { id: 3, name: "Maria Santos", course: "Biomedical Science", need: 6500, desc: "Single mother pursuing medical research career.", urgency: "Medium" },
  { id: 4, name: "Ahmed Hassan", course: "Data Science", need: 9500, desc: "Refugee student with passion for AI and education.", urgency: "High" },
  { id: 5, name: "Lin Wei", course: "Environmental Science", need: 7200, desc: "Climate activist working on sustainability research.", urgency: "Medium" },
  { id: 6, name: "Sarah Johnson", course: "Law", need: 15000, desc: "Advocating for legal aid in underserved communities.", urgency: "High" },
];

const SponsorDashboard = () => {
  const [search, setSearch] = useState("");
  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) || s.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout navItems={navItems} role="Sponsor Dashboard">
      <div className="space-y-6">
        <h1 className="text-2xl font-display font-bold">Browse Students</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="Total Sponsored" value="$24,500" icon={<DollarSign className="h-5 w-5" />} />
          <StatCard label="Students Funded" value="4" icon={<Users className="h-5 w-5" />} />
          <StatCard label="Impact Score" value="92" icon={<TrendingUp className="h-5 w-5" />} trend="Top 5% sponsor" />
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or field of study..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
        </div>

        {/* Student Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((s) => (
            <div key={s.id} className="bg-card rounded-xl p-5 border border-border card-elevated">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold">
                  {s.name.charAt(0)}
                </div>
                <StatusBadge status={s.urgency === "Critical" ? "rejected" : s.urgency === "High" ? "pending" : "active"} />
              </div>
              <h3 className="font-display font-semibold">{s.name}</h3>
              <p className="text-sm text-muted-foreground">{s.course}</p>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{s.desc}</p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                <span className="font-display font-bold text-lg">${s.need.toLocaleString()}</span>
                <Link to={`/sponsor/details/${s.id}`}>
                  <Button size="sm">Sponsor Now</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SponsorDashboard;
