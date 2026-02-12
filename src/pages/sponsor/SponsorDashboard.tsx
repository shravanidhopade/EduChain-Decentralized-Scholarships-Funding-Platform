



// import { DashboardLayout } from "@/components/layout/DashboardLayout";
// import { StatCard } from "@/components/shared/StatCard";
// import { EmptyState } from "@/components/shared/EmptyState";
// import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Search, Users, Heart, BarChart3, MessageCircle, Filter, DollarSign, TrendingUp } from "lucide-react";
// import { useState } from "react";
// import { useEffect } from "react";

// import { Link } from "react-router-dom";

// const navItems = [
//   { label: "Browse Students", path: "/sponsor", icon: <Search className="h-4 w-4" /> },
//   { label: "My Sponsorships", path: "/sponsor/sponsorships", icon: <Heart className="h-4 w-4" /> },
//   { label: "Impact Dashboard", path: "/sponsor/impact", icon: <BarChart3 className="h-4 w-4" /> },
//   { label: "Messages", path: "/sponsor/messages", icon: <MessageCircle className="h-4 w-4" /> },
//     { label: "My Profile", path: "/sponsor/profile", icon: <Users className="h-4 w-4" /> }, // ✅ NEW
// ];

// interface Student {
//   id: number;
//   name: string;
//   course: string;
//   need: number;
//   desc: string;
//   urgency: string;
// }

// const SponsorDashboard = () => {
//   const [search, setSearch] = useState("");
//   // const [students] = useState<Student[]>([]);
//   const [students, setStudents] = useState<Student[]>([]);

//   const [totalSponsored] = useState(0);
//   const [studentsFunded] = useState(0);
//   const [showProfileForm, setShowProfileForm] = useState(false);

//   const filtered = students.filter(
//     (s) =>
//       s.name.toLowerCase().includes(search.toLowerCase()) ||
//       s.course.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <DashboardLayout navItems={navItems} role="Sponsor Dashboard">
//       <div className="space-y-6">
//         <PageBreadcrumb crumbs={[{ label: "Sponsor", path: "/sponsor" }, { label: "Browse Students" }]} />
//         <h1 className="text-2xl font-display font-bold">Browse Students</h1>

//         {/* Button to Show Sponsor Profile Form */}
//         {/* <Button onClick={() => setShowProfileForm(true)}>
//           Complete Profile
//         </Button> */}

//         <Link to="/sponsor/register">
//   <Button>Complete Profile</Button>
// </Link>


//         {/* Sponsor Profile Form (Preview Only) */}
//         {showProfileForm && (
//           <div className="bg-card rounded-xl p-6 border border-border card-elevated space-y-6">
//             <h2 className="text-xl font-display font-semibold">Sponsor Profile</h2>

//             <div className="space-y-2">
//               <Label>Full Name</Label>
//               <Input placeholder="Enter your full name" />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label>Profession</Label>
//                 <Input placeholder="e.g. Software Engineer" />
//               </div>
//               <div className="space-y-2">
//                 <Label>Graduation Year</Label>
//                 <Input type="number" placeholder="e.g. 2020" />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label>Company / Organization</Label>
//               <Input placeholder="Optional" />
//             </div>

//             <div className="space-y-2">
//               <Label>Email</Label>
//               <Input type="email" placeholder="Optional" />
//             </div>

//             <div className="space-y-2">
//               <Label>Maximum Sponsorship Budget (₹)</Label>
//               <Input type="number" placeholder="e.g. 100000" />
//             </div>

//             <div className="space-y-2">
//               <Label>Short Bio</Label>
//               <Textarea rows={3} placeholder="Tell students a little about yourself..." />
//             </div>

//             <div className="flex gap-3">
//               <Button variant="outline" onClick={() => setShowProfileForm(false)}>
//                 Cancel
//               </Button>
//               <Button>Save Profile</Button>
//             </div>
//           </div>
//         )}

//         {/* Stats Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <StatCard
//             label="Total Sponsored"
//             value={`₹${totalSponsored.toLocaleString("en-IN")}`}
//             icon={<DollarSign className="h-5 w-5" />}
//           />
//           <StatCard
//             label="Students Funded"
//             value={String(studentsFunded)}
//             icon={<Users className="h-5 w-5" />}
//           />
//           <StatCard
//             label="Impact Score"
//             value="—"
//             icon={<TrendingUp className="h-5 w-5" />}
//           />
//         </div>

//         {/* Search */}
//         <div className="flex flex-col sm:flex-row gap-3">
//           <div className="relative flex-1">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//             <Input
//               placeholder="Search by name or field of study..."
//               className="pl-10"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//           <Button variant="outline">
//             <Filter className="mr-2 h-4 w-4" /> Filters
//           </Button>
//         </div>

//         {/* Student Cards */}
//         {filtered.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {filtered.map((s) => (
//               <div key={s.id} className="bg-card rounded-xl p-5 border border-border card-elevated">
//                 <div className="flex items-start justify-between mb-3">
//                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold">
//                     {s.name.charAt(0)}
//                   </div>
//                 </div>
//                 <h3 className="font-display font-semibold">{s.name}</h3>
//                 <p className="text-sm text-muted-foreground">{s.course}</p>
//                 <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{s.desc}</p>
//                 <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
//                   <span className="font-display font-bold text-lg">
//                     ₹{s.need.toLocaleString("en-IN")}
//                   </span>
//                   <Link to={`/sponsor/details/${s.id}`}>
//                     <Button size="sm">Sponsor Now</Button>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <EmptyState message="No student applications yet." />
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default SponsorDashboard;

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/shared/StatCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Users,
  Heart,
  BarChart3,
  MessageCircle,
  Filter,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Browse Students", path: "/sponsor", icon: <Search className="h-4 w-4" /> },
  { label: "My Sponsorships", path: "/sponsor/sponsorships", icon: <Heart className="h-4 w-4" /> },
  { label: "Impact Dashboard", path: "/sponsor/impact", icon: <BarChart3 className="h-4 w-4" /> },
  { label: "Messages", path: "/sponsor/messages", icon: <MessageCircle className="h-4 w-4" /> },
  { label: "My Profile", path: "/sponsor/profile", icon: <Users className="h-4 w-4" /> },
];

interface Student {
  _id: string;
  fullName: string;
  course: string;
  fundingRequired: number;
  financialNeed: string;
  milestones: string[];
  walletAddress: string;
}

const SponsorDashboard = () => {
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState<Student[]>([]);
  const [totalSponsored] = useState(0);
  const [studentsFunded] = useState(0);

  // 🔥 Fetch real students from backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/students");
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  // 🔎 Search filter
  const filtered = students.filter(
    (s) =>
      s.fullName.toLowerCase().includes(search.toLowerCase()) ||
      s.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout navItems={navItems} role="Sponsor Dashboard">
      <div className="space-y-6">
        <PageBreadcrumb crumbs={[{ label: "Sponsor", path: "/sponsor" }, { label: "Browse Students" }]} />
        <h1 className="text-2xl font-display font-bold">Browse Students</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            label="Total Sponsored"
            value={`₹${totalSponsored.toLocaleString("en-IN")}`}
            icon={<DollarSign className="h-5 w-5" />}
          />
          <StatCard
            label="Students Funded"
            value={String(studentsFunded)}
            icon={<Users className="h-5 w-5" />}
          />
          <StatCard
            label="Impact Score"
            value="—"
            icon={<TrendingUp className="h-5 w-5" />}
          />
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or field of study..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
        </div>

        {/* Student Cards */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((s) => (
              <div key={s._id} className="bg-card rounded-xl p-5 border border-border card-elevated">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold">
                    {s.fullName.charAt(0)}
                  </div>
                </div>

                <h3 className="font-display font-semibold">{s.fullName}</h3>
                <p className="text-sm text-muted-foreground">{s.course}</p>

                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {s.financialNeed}
                </p>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                  <span className="font-display font-bold text-lg">
                    ₹{s.fundingRequired.toLocaleString("en-IN")}
                  </span>

                  <Link to={`/sponsor/details/${s._id}`}>
                    <Button size="sm">Sponsor Now</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState message="No student applications yet." />
        )}
      </div>
    </DashboardLayout>
  );
};

export default SponsorDashboard;
