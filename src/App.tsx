import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentRegistration from "./pages/student/StudentRegistration";
import SponsorDashboard from "./pages/sponsor/SponsorDashboard";
import SponsorshipDetails from "./pages/sponsor/SponsorshipDetails";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Transparency from "./pages/Transparency";
import MentorConnect from "./pages/MentorConnect";
import ProgressPassport from "./pages/ProgressPassport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/milestones" element={<StudentDashboard />} />
          <Route path="/student/upload" element={<StudentDashboard />} />
          <Route path="/student/passport" element={<ProgressPassport />} />
          <Route path="/student/register" element={<StudentRegistration />} />
          <Route path="/sponsor" element={<SponsorDashboard />} />
          <Route path="/sponsor/details/:id" element={<SponsorshipDetails />} />
          <Route path="/sponsor/sponsorships" element={<SponsorDashboard />} />
          <Route path="/sponsor/impact" element={<SponsorDashboard />} />
          <Route path="/sponsor/messages" element={<SponsorDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/sponsorships" element={<AdminDashboard />} />
          <Route path="/admin/students" element={<AdminDashboard />} />
          <Route path="/admin/documents" element={<AdminDashboard />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/mentor" element={<MentorConnect />} />
          <Route path="/passport" element={<ProgressPassport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
