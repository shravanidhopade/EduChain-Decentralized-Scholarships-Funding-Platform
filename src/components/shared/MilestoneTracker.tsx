import { Check } from "lucide-react";

interface Milestone {
  title: string;
  status: "completed" | "current" | "upcoming";
}

export function MilestoneTracker({ milestones }: { milestones: Milestone[] }) {
  return (
    <div className="flex items-center gap-0 w-full overflow-x-auto py-2">
      {milestones.map((m, i) => (
        <div key={i} className="flex items-center flex-shrink-0">
          <div className="flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                m.status === "completed"
                  ? "bg-primary border-primary text-primary-foreground"
                  : m.status === "current"
                  ? "bg-card border-primary text-primary glow-primary"
                  : "bg-muted border-border text-muted-foreground"
              }`}
            >
              {m.status === "completed" ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            <span className="text-xs mt-1.5 max-w-[80px] text-center leading-tight text-muted-foreground">{m.title}</span>
          </div>
          {i < milestones.length - 1 && (
            <div
              className={`w-12 h-0.5 mt-[-18px] ${
                m.status === "completed" ? "bg-primary" : "bg-border"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
