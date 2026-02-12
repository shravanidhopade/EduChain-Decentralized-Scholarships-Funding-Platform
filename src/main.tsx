// import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
// import { ThemeProvider } from "./components/ThemeProvider.tsx";

// createRoot(document.getElementById("root")!).render(
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>
// );


import { Buffer } from "buffer";

// 🔥 Polyfills for algosdk + walletconnect
(window as any).global = window;
(window as any).Buffer = Buffer;

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
