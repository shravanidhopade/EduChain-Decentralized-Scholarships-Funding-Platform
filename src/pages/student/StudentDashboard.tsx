import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/shared/StatCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { MilestoneTracker } from "@/components/shared/MilestoneTracker";
import { EmptyState } from "@/components/shared/EmptyState";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { DollarSign, Lock, Unlock, User, Milestone, FileText, Award, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", path: "/student", icon: <User className="h-4 w-4" /> },
  { label: "Milestones", path: "/student/milestones", icon: <Milestone className="h-4 w-4" /> },
  { label: "Upload Documents", path: "/student/upload", icon: <Upload className="h-4 w-4" /> },
  { label: "Progress Passport", path: "/student/passport", icon: <Award className="h-4 w-4" /> },
  { label: "Registration", path: "/student/register", icon: <FileText className="h-4 w-4" /> },
];

const StudentDashboard = () => {
  const [totalSponsorship] = useState(0);
  const [releasedAmount] = useState(0);
  const [lockedAmount] = useState(0);
  const [milestones] = useState<{ title: string; status: "completed" | "current" | "upcoming" }[]>([]);
  const [timeline] = useState<{ date: string; event: string; status: "pending" | "verified" | "released" }[]>([]);

  const hasMilestones = milestones.length > 0;
  const hasTimeline = timeline.length > 0;
  const hasSponsorship = totalSponsorship > 0;

  const progressPercent = milestones.length > 0
    ? Math.round((milestones.filter(m => m.status === "completed").length / milestones.length) * 100)
    : 0;

  return (
    <DashboardLayout navItems={navItems} role="Student Dashboard">
      <div className="space-y-6">
        <PageBreadcrumb crumbs={[{ label: "Student", path: "/student" }, { label: "Dashboard" }]} />
        <h1 className="text-2xl font-display font-bold">Welcome back</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="Total Sponsorship" value={`₹${totalSponsorship.toLocaleString("en-IN")}`} icon={<DollarSign className="h-5 w-5" />} />
          <StatCard label="Released" value={`₹${releasedAmount.toLocaleString("en-IN")}`} icon={<Unlock className="h-5 w-5" />} />
          <StatCard label="Locked in Escrow" value={`₹${lockedAmount.toLocaleString("en-IN")}`} icon={<Lock className="h-5 w-5" />} />
        </div>

        <div className="bg-card rounded-xl p-6 border border-border card-elevated">
          <h2 className="font-display font-semibold text-lg mb-4">Milestone Progress</h2>
          {hasMilestones ? (
            <>
              <MilestoneTracker milestones={milestones} />
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Overall Progress</span>
                  <span className="font-medium">{progressPercent}%</span>
                </div>
                <Progress value={progressPercent} className="h-2" />
              </div>
            </>
          ) : (
            <EmptyState message="No milestones yet. Apply for sponsorship to get started." />
          )}
        </div>

        <div className="bg-card rounded-xl p-6 border border-border card-elevated">
          <h2 className="font-display font-semibold text-lg mb-4">Milestone Timeline</h2>
          {hasTimeline ? (
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
          ) : (
            <EmptyState message="No milestone events yet." />
          )}
        </div>

        {hasSponsorship && (
          <div className="bg-card rounded-xl p-6 border border-border card-elevated">
            <h2 className="font-display font-semibold text-lg mb-3">Upload Proof</h2>
            <p className="text-sm text-muted-foreground mb-4">Upload receipts for fees, books, or other expenses.</p>
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" /> Upload Document
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
