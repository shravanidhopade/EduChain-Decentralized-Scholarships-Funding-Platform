import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SelectRole = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-card p-8 rounded-xl border border-border space-y-6 text-center">
        <h1 className="text-2xl font-bold">Select Your Role</h1>

        <div className="space-y-3">
          <Link to="/student/register">
            <Button className="w-full">Continue as Student</Button>
          </Link>

          <Link to="/sponsor/register">
            <Button variant="outline" className="w-full">
              Continue as Sponsor
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectRole;
