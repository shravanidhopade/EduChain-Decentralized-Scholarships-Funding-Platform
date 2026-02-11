import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { EmptyState } from "@/components/shared/EmptyState";
import { Progress } from "@/components/ui/progress";
import { Award, Calendar, TrendingUp, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface Achievement {
  icon: React.ReactNode;
  title: string;
  date: string;
}

interface TimelineEntry {
  date: string;
  event: string;
}

const ProgressPassport = () => {
  const [attendance] = useState<number | null>(null);
  const [gpa] = useState<number | null>(null);
  const [certifications] = useState(0);
  const [skills] = useState<Skill[]>([]);
  const [achievements] = useState<Achievement[]>([]);
  const [timeline] = useState<TimelineEntry[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <PageBreadcrumb crumbs={[{ label: "Student", path: "/student" }, { label: "Progress Passport" }]} />
        <Link to="/student" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Dashboard
        </Link>
        <h1 className="text-3xl font-display font-bold mb-2">Progress Passport</h1>
        <p className="text-muted-foreground mb-8">A verifiable record of growth and achievement.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card rounded-xl p-5 border border-border card-elevated text-center">
            <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-display font-bold">{attendance !== null ? `${attendance}%` : "—"}</p>
            <p className="text-sm text-muted-foreground">Attendance</p>
          </div>
          <div className="bg-card rounded-xl p-5 border border-border card-elevated text-center">
            <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-display font-bold">{gpa !== null ? gpa : "—"}</p>
            <p className="text-sm text-muted-foreground">GPA</p>
          </div>
          <div className="bg-card rounded-xl p-5 border border-border card-elevated text-center">
            <Award className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-display font-bold">{certifications}</p>
            <p className="text-sm text-muted-foreground">Certifications</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl p-6 border border-border card-elevated">
            <h2 className="font-display font-semibold text-lg mb-4">Skill Badges</h2>
            {skills.length > 0 ? (
              <div className="space-y-4">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <Progress value={s.level} className="h-2" />
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState message="No skills recorded yet." />
            )}
          </div>

          <div className="bg-card rounded-xl p-6 border border-border card-elevated">
            <h2 className="font-display font-semibold text-lg mb-4">Achievements</h2>
            {achievements.length > 0 ? (
              <div className="space-y-3">
                {achievements.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="p-2 rounded-lg bg-accent/20 text-accent-foreground">{a.icon}</div>
                    <div>
                      <p className="font-medium text-sm">{a.title}</p>
                      <p className="text-xs text-muted-foreground">{a.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState message="No achievements yet." />
            )}
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border card-elevated mt-6">
          <h2 className="font-display font-semibold text-lg mb-4">Growth Timeline</h2>
          {timeline.length > 0 ? (
            <div className="space-y-4">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    {i < timeline.length - 1 && <div className="w-0.5 h-8 bg-border" />}
                  </div>
                  <div className="pb-2">
                    <p className="text-xs text-muted-foreground">{t.date}</p>
                    <p className="text-sm font-medium">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState message="No timeline entries yet." />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgressPassport;
