import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Transparency", path: "/transparency" },
  { label: "Mentor Connect", path: "/mentor" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isDashboard = ["/student", "/sponsor", "/admin"].some((p) =>
    location.pathname.startsWith(p)
  );

  if (isDashboard) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl text-foreground">
          <GraduationCap className="h-7 w-7 text-primary" />
          Sponsor-a-Student
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/auth">
            <Button size="sm">Connect Wallet</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/auth" onClick={() => setOpen(false)}>
            <Button size="sm" className="w-full">Connect Wallet</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
