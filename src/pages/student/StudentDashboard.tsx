import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/shared/StatCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { MilestoneTracker } from "@/components/shared/MilestoneTracker";
import { DollarSign, Lock, Unlock, User, Milestone, FileText, Award, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const navItems = [
  { label: "Dashboard", path: "/student", icon: <User className="h-4 w-4" /> },
  { label: "Milestones", path: "/student/milestones", icon: <Milestone className="h-4 w-4" /> },
  { label: "Upload Documents", path: "/student/upload", icon: <Upload className="h-4 w-4" /> },
  { label: "Progress Passport", path: "/student/passport", icon: <Award className="h-4 w-4" /> },
  { label: "Registration", path: "/student/register", icon: <FileText className="h-4 w-4" /> },
];

const milestones = [
  { title: "Enrollment", status: "completed" as const },
  { title: "Semester 1", status: "completed" as const },
  { title: "Mid-Year", status: "current" as const },
  { title: "Semester 2", status: "upcoming" as const },
  { title: "Graduation", status: "upcoming" as const },
];

const timeline = [
  { date: "Jan 15, 2026", event: "Enrollment verified", status: "verified" as const },
  { date: "Mar 20, 2026", event: "Semester 1 fees released", status: "released" as const },
  { date: "Jun 01, 2026", event: "Mid-year review pending", status: "pending" as const },
];

const StudentDashboard = () => (
  <DashboardLayout navItems={navItems} role="Student Dashboard">
    <div className="space-y-6">
      <h1 className="text-2xl font-display font-bold">Welcome back, Alex</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="Total Sponsorship" value="$12,000" icon={<DollarSign className="h-5 w-5" />} />
        <StatCard label="Released" value="$4,800" icon={<Unlock className="h-5 w-5" />} trend="+$2,400 this month" />
        <StatCard label="Locked in Escrow" value="$7,200" icon={<Lock className="h-5 w-5" />} />
      </div>

      {/* Milestone Progress */}
      <div className="bg-card rounded-xl p-6 border border-border card-elevated">
        <h2 className="font-display font-semibold text-lg mb-4">Milestone Progress</h2>
        <MilestoneTracker milestones={milestones} />
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">Overall Progress</span>
            <span className="font-medium">40%</span>
          </div>
          <Progress value={40} className="h-2" />
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-card rounded-xl p-6 border border-border card-elevated">
        <h2 className="font-display font-semibold text-lg mb-4">Milestone Timeline</h2>
        <div className="space-y-4">
          {timeline.map((t, i) => (
            <div key={i} className="flex items-center gap-4 text-sm">
              <span className="text-muted-foreground w-28 flex-shrink-0">{t.date}</span>
              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span className="flex-1">{t.event}</span>
              <StatusBadge status={t.status} />
            </div>
          ))}
        </div>
      </div>

      {/* Upload */}
      <div className="bg-card rounded-xl p-6 border border-border card-elevated">
        <h2 className="font-display font-semibold text-lg mb-3">Upload Proof</h2>
        <p className="text-sm text-muted-foreground mb-4">Upload receipts for fees, books, or other expenses.</p>
        <Button variant="outline">
          <Upload className="mr-2 h-4 w-4" /> Upload Document
        </Button>
      </div>
    </div>
  </DashboardLayout>
);

export default StudentDashboard;
