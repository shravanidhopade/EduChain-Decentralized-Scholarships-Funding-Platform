import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/shared/StatCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Users, FileCheck, Eye, CheckCircle, XCircle, ClipboardList } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Verifications", path: "/admin", icon: <ShieldCheck className="h-4 w-4" /> },
  { label: "Active Sponsorships", path: "/admin/sponsorships", icon: <ClipboardList className="h-4 w-4" /> },
  { label: "Students", path: "/admin/students", icon: <Users className="h-4 w-4" /> },
  { label: "Documents", path: "/admin/documents", icon: <FileCheck className="h-4 w-4" /> },
];

interface Verification {
  id: number;
  student: string;
  milestone: string;
  submitted: string;
  docs: number;
  status: "pending" | "verified" | "rejected";
}

const AdminDashboard = () => {
  const [verifications] = useState<Verification[]>([]);
  const [pendingCount] = useState(0);
  const [activeSponsorships] = useState(0);
  const [enrolledStudents] = useState(0);

  return (
    <DashboardLayout navItems={navItems} role="Admin Dashboard">
      <div className="space-y-6">
        <PageBreadcrumb crumbs={[{ label: "Admin", path: "/admin" }, { label: "Verifications" }]} />
        <h1 className="text-2xl font-display font-bold">Verification Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="Pending Verifications" value={String(pendingCount)} icon={<ShieldCheck className="h-5 w-5" />} />
          <StatCard label="Active Sponsorships" value={String(activeSponsorships)} icon={<ClipboardList className="h-5 w-5" />} />
          <StatCard label="Students Enrolled" value={String(enrolledStudents)} icon={<Users className="h-5 w-5" />} />
        </div>

        <div className="bg-card rounded-xl border border-border card-elevated overflow-hidden">
          <div className="p-5 border-b border-border">
            <h2 className="font-display font-semibold text-lg">Milestone Verifications</h2>
          </div>
          {verifications.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left px-5 py-3 font-medium text-muted-foreground">Student</th>
                    <th className="text-left px-5 py-3 font-medium text-muted-foreground">Milestone</th>
                    <th className="text-left px-5 py-3 font-medium text-muted-foreground">Submitted</th>
                    <th className="text-left px-5 py-3 font-medium text-muted-foreground">Status</th>
                    <th className="text-right px-5 py-3 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {verifications.map((v) => (
                    <tr key={v.id} className="border-b border-border last:border-0">
                      <td className="px-5 py-4 font-medium">{v.student}</td>
                      <td className="px-5 py-4 text-muted-foreground">{v.milestone}</td>
                      <td className="px-5 py-4 text-muted-foreground">{v.submitted}</td>
                      <td className="px-5 py-4"><StatusBadge status={v.status} /></td>
                      <td className="px-5 py-4 text-right">
                        <div className="flex gap-2 justify-end">
                          <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
                          {v.status === "pending" && (
                            <>
                              <Button size="sm" className="bg-success hover:bg-success/90 text-success-foreground">
                                <CheckCircle className="mr-1 h-4 w-4" /> Verify
                              </Button>
                              <Button variant="destructive" size="sm">
                                <XCircle className="mr-1 h-4 w-4" /> Reject
                              </Button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyState message="No sponsorships locked yet." />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
