import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Target, Send } from "lucide-react";

const messages = [
  { from: "mentor", name: "Dr. Patel", text: "Hi Alex! How's your semester going? Let's set some goals for this month.", time: "10:30 AM" },
  { from: "student", name: "Alex", text: "Going well! I'd like to focus on completing my research proposal this month.", time: "10:45 AM" },
  { from: "mentor", name: "Dr. Patel", text: "Great goal. I can review your draft next week. Also consider attending the AI workshop on the 15th.", time: "11:00 AM" },
  { from: "student", name: "Alex", text: "That sounds perfect. I'll have the draft ready by Friday.", time: "11:15 AM" },
];

const goals = [
  { goal: "Complete research proposal draft", status: "In Progress" },
  { goal: "Attend AI workshop", status: "Upcoming" },
  { goal: "Submit mid-term assignments", status: "Completed" },
];

const MentorConnect = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-display font-bold mb-8">Mentor Connect</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat */}
        <div className="lg:col-span-2 bg-card rounded-xl border border-border card-elevated flex flex-col h-[600px]">
          <div className="p-4 border-b border-border flex items-center gap-3">
            <MessageCircle className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium text-sm">Dr. Patel</p>
              <p className="text-xs text-muted-foreground">Mentor • Computer Science</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "student" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[70%] rounded-xl px-4 py-3 text-sm ${
                  m.from === "student"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}>
                  <p>{m.text}</p>
                  <p className={`text-xs mt-1 ${m.from === "student" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{m.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border flex gap-2">
            <Input placeholder="Type a message..." className="flex-1" />
            <Button size="icon"><Send className="h-4 w-4" /></Button>
          </div>
        </div>

        {/* Goals & Notes */}
        <div className="space-y-6">
          <div className="bg-card rounded-xl border border-border card-elevated p-5">
            <h2 className="font-display font-semibold flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-primary" /> Goals
            </h2>
            <div className="space-y-3">
              {goals.map((g, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span>{g.goal}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    g.status === "Completed" ? "bg-success/15 text-success" :
                    g.status === "In Progress" ? "bg-primary/15 text-primary" :
                    "bg-muted text-muted-foreground"
                  }`}>{g.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border card-elevated p-5">
            <h2 className="font-display font-semibold mb-3">Progress Notes</h2>
            <Textarea placeholder="Add a progress note..." rows={4} />
            <Button size="sm" className="mt-3">Save Note</Button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default MentorConnect;
