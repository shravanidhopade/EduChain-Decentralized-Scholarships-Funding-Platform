import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Progress } from "@/components/ui/progress";
import { Award, BookOpen, Trophy, Star, TrendingUp, Calendar } from "lucide-react";

const skills = [
  { name: "Python", level: 85 },
  { name: "Machine Learning", level: 70 },
  { name: "Data Analysis", level: 90 },
  { name: "Research Writing", level: 75 },
];

const achievements = [
  { icon: <Trophy className="h-5 w-5" />, title: "Dean's List", date: "Fall 2025" },
  { icon: <Award className="h-5 w-5" />, title: "Hackathon Winner", date: "Oct 2025" },
  { icon: <Star className="h-5 w-5" />, title: "Research Publication", date: "Dec 2025" },
  { icon: <BookOpen className="h-5 w-5" />, title: "AWS Certified", date: "Jan 2026" },
];

const timeline = [
  { date: "Sep 2024", event: "Enrolled in Computer Science program" },
  { date: "Dec 2024", event: "Completed first semester with 3.9 GPA" },
  { date: "Mar 2025", event: "Started research internship" },
  { date: "Oct 2025", event: "Won university hackathon" },
  { date: "Jan 2026", event: "Published first research paper" },
];

const ProgressPassport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-3xl font-display font-bold mb-2">Progress Passport</h1>
      <p className="text-muted-foreground mb-8">A verifiable record of growth and achievement.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-card rounded-xl p-5 border border-border card-elevated text-center">
          <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
          <p className="text-2xl font-display font-bold">94%</p>
          <p className="text-sm text-muted-foreground">Attendance</p>
        </div>
        <div className="bg-card rounded-xl p-5 border border-border card-elevated text-center">
          <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
          <p className="text-2xl font-display font-bold">3.8</p>
          <p className="text-sm text-muted-foreground">GPA</p>
        </div>
        <div className="bg-card rounded-xl p-5 border border-border card-elevated text-center">
          <Award className="h-6 w-6 text-primary mx-auto mb-2" />
          <p className="text-2xl font-display font-bold">4</p>
          <p className="text-sm text-muted-foreground">Certifications</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Skills */}
        <div className="bg-card rounded-xl p-6 border border-border card-elevated">
          <h2 className="font-display font-semibold text-lg mb-4">Skill Badges</h2>
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
        </div>

        {/* Achievements */}
        <div className="bg-card rounded-xl p-6 border border-border card-elevated">
          <h2 className="font-display font-semibold text-lg mb-4">Achievements</h2>
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
        </div>
      </div>

      {/* Growth Timeline */}
      <div className="bg-card rounded-xl p-6 border border-border card-elevated mt-6">
        <h2 className="font-display font-semibold text-lg mb-4">Growth Timeline</h2>
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
      </div>
    </div>
    <Footer />
  </div>
);

export default ProgressPassport;
