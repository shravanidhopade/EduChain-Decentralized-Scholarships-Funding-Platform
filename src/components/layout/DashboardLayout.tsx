

// import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { GraduationCap, Menu, LogOut, Sun, Moon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useTheme } from "@/components/ThemeProvider";
// import { PeraWalletConnect } from "@perawallet/connect";

// interface NavItem {
//   label: string;
//   path: string;
//   icon: React.ReactNode;
// }

// interface DashboardLayoutProps {
//   children: React.ReactNode;
//   navItems: NavItem[];
//   role: string;
// }

// export function DashboardLayout({
//   children,
//   navItems,
//   role,
// }: DashboardLayoutProps) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { theme, toggleTheme } = useTheme();

//   const walletAddress = localStorage.getItem("walletAddress") || "";

//   const peraWallet = new PeraWalletConnect({
//     chainId: 416002, // Algorand TestNet
//   });

//   const handleDisconnect = async () => {
//     try {
//       await peraWallet.disconnect();
//       localStorage.removeItem("walletAddress");
//       navigate("/auth");
//     } catch (error) {
//       console.error("Disconnect failed:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex bg-background">
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-foreground/40 z-40 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <aside
//         className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-sidebar text-sidebar-foreground flex flex-col transition-transform lg:translate-x-0 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex items-center gap-2 px-5 h-16 border-b border-sidebar-border">
//           <GraduationCap className="h-6 w-6 text-sidebar-primary" />
//           <span className="font-display font-bold text-base">EduChain</span>
//         </div>

//         <div className="px-4 py-3">
//           <span className="text-xs uppercase tracking-wider text-sidebar-foreground/50 font-medium">
//             {role}
//           </span>
//         </div>

//         <nav className="flex-1 px-3 space-y-1">
//           {navItems.map((item) => {
//             const active = location.pathname === item.path;
//             return (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 onClick={() => setSidebarOpen(false)}
//                 className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
//                   active
//                     ? "bg-sidebar-accent text-sidebar-primary"
//                     : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
//                 }`}
//               >
//                 {item.icon}
//                 {item.label}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* Bottom Section */}
//         <div className="p-4 border-t border-sidebar-border space-y-2">
//           <button
//             onClick={toggleTheme}
//             className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
//           >
//             {theme === "dark" ? (
//               <Sun className="h-4 w-4" />
//             ) : (
//               <Moon className="h-4 w-4" />
//             )}
//             {theme === "dark" ? "Light Mode" : "Dark Mode"}
//           </button>

//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={handleDisconnect}
//             className="w-full justify-start gap-2 text-destructive hover:bg-destructive/10"
//           >
//             <LogOut className="h-4 w-4" />
//             Disconnect
//           </Button>
//         </div>
//       </aside>

//       <div className="flex-1 flex flex-col min-w-0">
//         <header className="h-16 border-b border-border bg-card flex items-center px-4 gap-4">
//           <button
//             className="lg:hidden text-foreground"
//             onClick={() => setSidebarOpen(true)}
//           >
//             <Menu className="h-5 w-5" />
//           </button>

//           <div className="ml-auto flex items-center gap-3">
//             {walletAddress && (
//               <div className="text-xs text-muted-foreground font-mono bg-muted px-3 py-1.5 rounded-md">
//                 {walletAddress.slice(0, 6)}...
//                 {walletAddress.slice(-4)}
//               </div>
//             )}
//           </div>
//         </header>

//         <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GraduationCap, Menu, LogOut, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { PeraWalletConnect } from "@perawallet/connect";

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  navItems: NavItem[];
  role: string;
}

export function DashboardLayout({
  children,
  navItems,
  role,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const walletAddress = localStorage.getItem("walletAddress") || "";

  const peraWallet = new PeraWalletConnect({
    chainId: 416002,
  });

  // 🔥 Fetch Name From Backend
  useEffect(() => {
    const fetchProfile = async () => {
      if (!walletAddress) return;

      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/get-profile",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ walletAddress }),
          }
        );

        const data = await response.json();
        if (data.name) {
          setUserName(data.name);
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, [walletAddress]);

  const handleDisconnect = async () => {
    try {
      await peraWallet.disconnect();
      localStorage.removeItem("walletAddress");
      navigate("/auth");
    } catch (error) {
      console.error("Disconnect failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex bg-background">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-sidebar text-sidebar-foreground flex flex-col transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-2 px-5 h-16 border-b border-sidebar-border">
          <GraduationCap className="h-6 w-6 text-sidebar-primary" />
          <span className="font-display font-bold text-base">EduChain</span>
        </div>

        <div className="px-4 py-3">
          <span className="text-xs uppercase tracking-wider text-sidebar-foreground/50 font-medium">
            {role}
          </span>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-sidebar-border space-y-2">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleDisconnect}
            className="w-full justify-start gap-2 text-destructive hover:bg-destructive/10"
          >
            <LogOut className="h-4 w-4" />
            Disconnect
          </Button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border bg-card flex items-center px-4 gap-4">
          <button
            className="lg:hidden text-foreground"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="ml-auto flex items-center gap-4">

            {/* 🔥 Show Name */}
            {userName && (
              <div className="text-sm font-medium">
                {userName}
              </div>
            )}

            {/* Wallet */}
            {walletAddress && (
              <div className="text-xs text-muted-foreground font-mono bg-muted px-3 py-1.5 rounded-md">
                {walletAddress.slice(0, 6)}...
                {walletAddress.slice(-4)}
              </div>
            )}

          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

