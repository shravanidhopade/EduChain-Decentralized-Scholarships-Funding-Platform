
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Navbar } from "@/components/layout/Navbar";
// import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
// import { Wallet, GraduationCap, Users, ShieldCheck, Check, ArrowLeft } from "lucide-react";
// import { PeraWalletConnect } from "@perawallet/connect";

// const roles = [
//   { id: "student", label: "Student", icon: <GraduationCap className="h-6 w-6" />, path: "/student" },
//   { id: "sponsor", label: "Sponsor", icon: <Users className="h-6 w-6" />, path: "/sponsor" },
//   { id: "admin", label: "Admin", icon: <ShieldCheck className="h-6 w-6" />, path: "/admin" },
// ];

// const peraWallet = new PeraWalletConnect({
//   chainId: 416002, // Algorand TestNet
// });

// const Auth = () => {
//   const [connected, setConnected] = useState(false);
//   const [walletAddress, setWalletAddress] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string | null>(null);

//   // Auto reconnect if session exists
//   useEffect(() => {
//     peraWallet.reconnectSession().then((accounts) => {
//       if (accounts.length > 0) {
//         setWalletAddress(accounts[0]);
//         setConnected(true);
//         localStorage.setItem("walletAddress", accounts[0]);
//       }
//     });
//   }, []);

//   // const handleConnect = async () => {
//   //   try {
//   //     const accounts = await peraWallet.connect();
//   //     const address = accounts[0];

//   //     setWalletAddress(address);
//   //     setConnected(true);

//   //     localStorage.setItem("walletAddress", address);
//   //   } catch (error) {
//   //     console.error("Wallet connection failed:", error);
//   //   }
//   // };

//   const handleConnect = async () => {
//   try {
//     const accounts = await peraWallet.connect();
//     const address = accounts[0];

//     localStorage.setItem("walletAddress", address);

//     const response = await fetch("http://localhost:5000/api/auth/check-wallet", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ walletAddress: address }),
//     });

//     const data = await response.json();

//     if (data.role === "student") {
//       window.location.href = "/student";
//     } else if (data.role === "sponsor") {
//       window.location.href = "/sponsor";
//     } else {
//       window.location.href = "/select-role";
//     }

//   } catch (error) {
//     console.error("Wallet connection failed:", error);
//   }
// };

//   const handleDisconnect = () => {
//     peraWallet.disconnect();
//     setConnected(false);
//     setWalletAddress("");
//     setSelectedRole(null);
//     localStorage.removeItem("walletAddress");
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <div className="min-h-screen flex items-center justify-center px-4 pt-16">
//         <div className="w-full max-w-md space-y-8">
//           <div>
//             <PageBreadcrumb crumbs={[{ label: "Connect Wallet" }]} />
//             <Link
//               to="/"
//               className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
//             >
//               <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
//             </Link>
//             <h1 className="text-3xl font-display font-bold">Connect & Continue</h1>
//             <p className="mt-2 text-muted-foreground">
//               Link your Algorand wallet to access EduChain.
//             </p>
//           </div>

//           {/* Wallet Section */}
//           <div className="bg-card rounded-xl p-6 border border-border card-elevated space-y-4">
//             {!connected ? (
//               <Button
//                 className="w-full py-6 text-base"
//                 onClick={handleConnect}
//               >
//                 <Wallet className="mr-2 h-5 w-5" /> Connect Pera Wallet
//               </Button>
//             ) : (
//               <div className="flex flex-col gap-3 bg-success/10 text-success rounded-lg p-4">
//                 <div className="flex items-center gap-2">
//                   <Check className="h-5 w-5" />
//                   <p className="text-sm font-medium">Wallet Connected</p>
//                 </div>
//                 <p className="text-xs font-mono break-all">
//                   {walletAddress}
//                 </p>
//                 <Button variant="ghost" size="sm" onClick={handleDisconnect}>
//                   Disconnect
//                 </Button>
//               </div>
//             )}
//           </div>

//           {/* Role Selection */}
//           {connected && (
//             <div className="space-y-4 animate-fade-up">
//               <p className="text-sm font-medium text-center">
//                 Select your role
//               </p>

//               <div className="grid grid-cols-3 gap-3">
//                 {roles.map((r) => (
//                   <button
//                     key={r.id}
//                     onClick={() => setSelectedRole(r.id)}
//                     className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
//                       selectedRole === r.id
//                         ? "border-primary bg-primary/5"
//                         : "border-border hover:border-primary/40"
//                     }`}
//                   >
//                     <div
//                       className={
//                         selectedRole === r.id
//                           ? "text-primary"
//                           : "text-muted-foreground"
//                       }
//                     >
//                       {r.icon}
//                     </div>
//                     <span className="text-sm font-medium">{r.label}</span>
//                   </button>
//                 ))}
//               </div>

//               {selectedRole && (
//                 <div className="space-y-2">
//                   <Link to={roles.find((r) => r.id === selectedRole)!.path}>
//                     <Button className="w-full py-6 text-base">
//                       Continue as{" "}
//                       {roles.find((r) => r.id === selectedRole)!.label}
//                     </Button>
//                   </Link>

//                   <Button
//                     variant="ghost"
//                     className="w-full"
//                     onClick={handleDisconnect}
//                   >
//                     Cancel
//                   </Button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;





// import { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Navbar } from "@/components/layout/Navbar";
// import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
// import {
//   Wallet,
//   GraduationCap,
//   Users,
//   ShieldCheck,
//   Check,
//   ArrowLeft,
// } from "lucide-react";
// import { PeraWalletConnect } from "@perawallet/connect";

// const roles = [
//   { id: "student", label: "Student", icon: <GraduationCap className="h-6 w-6" /> },
//   { id: "sponsor", label: "Sponsor", icon: <Users className="h-6 w-6" /> },
//   { id: "admin", label: "Admin", icon: <ShieldCheck className="h-6 w-6" /> },
// ];

// const peraWallet = new PeraWalletConnect({
//   chainId: 416002, // Algorand TestNet
// });

// const Auth = () => {
//   const navigate = useNavigate();

//   const [connected, setConnected] = useState(false);
//   const [walletAddress, setWalletAddress] = useState("");
//   const [selectedRole, setSelectedRole] = useState<string | null>(null);

//   // 🔁 Auto reconnect session
//   useEffect(() => {
//     const reconnect = async () => {
//       const accounts = await peraWallet.reconnectSession();
//       if (accounts.length > 0) {
//         const address = accounts[0];
//         setWalletAddress(address);
//         setConnected(true);
//         localStorage.setItem("walletAddress", address);

//         await checkWalletRole(address);
//       }
//     };

//     reconnect();
//   }, []);

//   // 🔎 Check role in backend
//   const checkWalletRole = async (address: string) => {
//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/auth/check-wallet",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ walletAddress: address }),
//         }
//       );

//       const data = await response.json();

//       if (data.role === "student") {
//         navigate("/student");
//       } else if (data.role === "sponsor") {
//         navigate("/sponsor");
//       } else {
//         // new user → show role selection
//         setConnected(true);
//       }
//     } catch (error) {
//       console.error("Role check failed:", error);
//     }
//   };

//   // 🔗 Connect wallet
//   const handleConnect = async () => {
//     try {
//       const accounts = await peraWallet.connect();
//       const address = accounts[0];

//       setWalletAddress(address);
//       setConnected(true);
//       localStorage.setItem("walletAddress", address);

//       await checkWalletRole(address);
//     } catch (error) {
//       console.error("Wallet connection failed:", error);
//     }
//   };

//   // 🔌 Disconnect
//   const handleDisconnect = () => {
//     peraWallet.disconnect();
//     setConnected(false);
//     setWalletAddress("");
//     setSelectedRole(null);
//     localStorage.removeItem("walletAddress");
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       <div className="min-h-screen flex items-center justify-center px-4 pt-16">
//         <div className="w-full max-w-md space-y-8">

//           <div>
//             <PageBreadcrumb crumbs={[{ label: "Connect Wallet" }]} />
//             <Link
//               to="/"
//               className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
//             >
//               <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
//             </Link>
//             <h1 className="text-3xl font-display font-bold">
//               Connect & Continue
//             </h1>
//             <p className="mt-2 text-muted-foreground">
//               Link your Algorand wallet to access EduChain.
//             </p>
//           </div>

//           {/* Wallet Section */}
//           <div className="bg-card rounded-xl p-6 border border-border card-elevated space-y-4">
//             {!connected ? (
//               <Button
//                 className="w-full py-6 text-base"
//                 onClick={handleConnect}
//               >
//                 <Wallet className="mr-2 h-5 w-5" />
//                 Connect Pera Wallet
//               </Button>
//             ) : (
//               <div className="flex flex-col gap-3 bg-success/10 text-success rounded-lg p-4">
//                 <div className="flex items-center gap-2">
//                   <Check className="h-5 w-5" />
//                   <p className="text-sm font-medium">Wallet Connected</p>
//                 </div>

//                 <p className="text-xs font-mono break-all">
//                   {walletAddress}
//                 </p>

//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={handleDisconnect}
//                 >
//                   Disconnect
//                 </Button>
//               </div>
//             )}
//           </div>

//           {/* Role Selection (only for new users) */}
//           {connected && !walletAddress.startsWith("redirected") && (
//             <div className="space-y-4 animate-fade-up">
//               <p className="text-sm font-medium text-center">
//                 Select your role
//               </p>

//               <div className="grid grid-cols-3 gap-3">
//                 {roles.map((r) => (
//                   <button
//                     key={r.id}
//                     onClick={() => setSelectedRole(r.id)}
//                     className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
//                       selectedRole === r.id
//                         ? "border-primary bg-primary/5"
//                         : "border-border hover:border-primary/40"
//                     }`}
//                   >
//                     <div
//                       className={
//                         selectedRole === r.id
//                           ? "text-primary"
//                           : "text-muted-foreground"
//                       }
//                     >
//                       {r.icon}
//                     </div>
//                     <span className="text-sm font-medium">
//                       {r.label}
//                     </span>
//                   </button>
//                 ))}
//               </div>

//               {selectedRole && (
//                 <Button
//                   className="w-full py-6 text-base"
//                   onClick={() => navigate(`/${selectedRole}/register`)}
//                 >
//                   Continue as {selectedRole}
//                 </Button>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;



import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import {
  Wallet,
  GraduationCap,
  Users,
  ShieldCheck,
  Check,
  ArrowLeft,
} from "lucide-react";
import { PeraWalletConnect } from "@perawallet/connect";

const roles = [
  { id: "student", label: "Student", icon: <GraduationCap className="h-6 w-6" /> },
  { id: "sponsor", label: "Sponsor", icon: <Users className="h-6 w-6" /> },
  { id: "admin", label: "Admin", icon: <ShieldCheck className="h-6 w-6" /> },
];

const peraWallet = new PeraWalletConnect({
  chainId: 416002, // Algorand TestNet
});

const Auth = () => {
  const navigate = useNavigate();

  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isNewUser, setIsNewUser] = useState(false);

  // 🔁 Auto reconnect session
  useEffect(() => {
    const reconnect = async () => {
      const accounts = await peraWallet.reconnectSession();

      if (accounts.length > 0) {
        const address = accounts[0];

        setWalletAddress(address);
        setConnected(true);
        localStorage.setItem("walletAddress", address);

        await checkWalletRole(address);
      }
    };

    reconnect();
  }, []);

  // 🔎 Check role in backend
  const checkWalletRole = async (address: string) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/check-wallet",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ walletAddress: address }),
        }
      );

      const data = await response.json();

      if (data.role === "student") {
        navigate("/student");
      } else if (data.role === "sponsor") {
        navigate("/sponsor");
      } else {
        // New user
        setIsNewUser(true);
      }
    } catch (error) {
      console.error("Role check failed:", error);
    }
  };

  // 🔗 Connect wallet manually
  const handleConnect = async () => {
    try {
      const accounts = await peraWallet.connect();
      const address = accounts[0];

      setWalletAddress(address);
      setConnected(true);
      localStorage.setItem("walletAddress", address);

      await checkWalletRole(address);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  // 🔌 Disconnect
  const handleDisconnect = () => {
    peraWallet.disconnect();
    localStorage.removeItem("walletAddress");
    setConnected(false);
    setWalletAddress("");
    setSelectedRole(null);
    setIsNewUser(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="w-full max-w-md space-y-8">

          <div>
            <PageBreadcrumb crumbs={[{ label: "Connect Wallet" }]} />
            <Link
              to="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
            >
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
            </Link>
            <h1 className="text-3xl font-display font-bold">
              Connect & Continue
            </h1>
            <p className="mt-2 text-muted-foreground">
              Link your Algorand wallet to access EduChain.
            </p>
          </div>

          {/* Wallet Section */}
          <div className="bg-card rounded-xl p-6 border border-border card-elevated space-y-4">
            {!connected ? (
              <Button
                className="w-full py-6 text-base"
                onClick={handleConnect}
              >
                <Wallet className="mr-2 h-5 w-5" />
                Connect Pera Wallet
              </Button>
            ) : (
              <div className="flex flex-col gap-3 bg-success/10 text-success rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  <p className="text-sm font-medium">Wallet Connected</p>
                </div>

                <p className="text-xs font-mono break-all">
                  {walletAddress}
                </p>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDisconnect}
                >
                  Disconnect
                </Button>
              </div>
            )}
          </div>

          {/* Role Selection (ONLY for new users) */}
          {connected && isNewUser && (
            <div className="space-y-4 animate-fade-up">
              <p className="text-sm font-medium text-center">
                Select your role
              </p>

              <div className="grid grid-cols-3 gap-3">
                {roles.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRole(r.id)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                      selectedRole === r.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    <div
                      className={
                        selectedRole === r.id
                          ? "text-primary"
                          : "text-muted-foreground"
                      }
                    >
                      {r.icon}
                    </div>
                    <span className="text-sm font-medium">
                      {r.label}
                    </span>
                  </button>
                ))}
              </div>

              {selectedRole && (
                <Button
                  className="w-full py-6 text-base"
                  onClick={() => navigate(`/${selectedRole}/register`)}
                >
                  Continue as {selectedRole}
                </Button>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Auth;
