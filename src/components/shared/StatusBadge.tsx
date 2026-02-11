import { cn } from "@/lib/utils";

type Status = "pending" | "verified" | "released" | "rejected" | "locked" | "active";

const statusStyles: Record<Status, string> = {
  pending: "bg-warning/15 text-warning border-warning/30",
  verified: "bg-success/15 text-success border-success/30",
  released: "bg-primary/15 text-primary border-primary/30",
  rejected: "bg-destructive/15 text-destructive border-destructive/30",
  locked: "bg-info/15 text-info border-info/30",
  active: "bg-success/15 text-success border-success/30",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border capitalize", statusStyles[status])}>
      {status}
    </span>
  );
}
