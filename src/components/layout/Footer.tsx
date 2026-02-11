import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-display font-bold text-lg">
              <GraduationCap className="h-6 w-6 text-primary" />
              Sponsor-a-Student
            </div>
            <p className="text-sm text-sidebar-foreground/70">
              Transparent blockchain-powered scholarships connecting students with alumni sponsors.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Platform</h4>
            <div className="space-y-2 text-sm text-sidebar-foreground/70">
              <Link to="/auth" className="block hover:text-primary transition-colors">Apply Now</Link>
              <Link to="/auth" className="block hover:text-primary transition-colors">Become a Sponsor</Link>
              <Link to="/transparency" className="block hover:text-primary transition-colors">Transparency</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Resources</h4>
            <div className="space-y-2 text-sm text-sidebar-foreground/70">
              <a href="#" className="block hover:text-primary transition-colors">Documentation</a>
              <a href="#" className="block hover:text-primary transition-colors">Smart Contracts</a>
              <a href="#" className="block hover:text-primary transition-colors">FAQ</a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Community</h4>
            <div className="space-y-2 text-sm text-sidebar-foreground/70">
              <a href="#" className="block hover:text-primary transition-colors">Discord</a>
              <a href="#" className="block hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="block hover:text-primary transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-6 text-center text-sm text-sidebar-foreground/50">
          © 2026 Sponsor-a-Student. Built on blockchain for transparency.
        </div>
      </div>
    </footer>
  );
}
