


// import express from "express";
// import Student from "../models/Student.js";
// import Sponsor from "../models/Sponsor.js";

// const router = express.Router();

// router.post("/check-wallet", async (req, res) => {
//   try {
//     const { walletAddress } = req.body;

//     if (!walletAddress) {
//       return res.status(400).json({ message: "Wallet address required" });
//     }

//     const student = await Student.findOne({ walletAddress });
//     if (student) {
//       return res.json({ role: "student" });
//     }

//     const sponsor = await Sponsor.findOne({ walletAddress });
//     if (sponsor) {
//       return res.json({ role: "sponsor" });
//     }

//     return res.json({ role: "new" });

//   } catch (error) {
//     console.error("Wallet check error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;


import express from "express";
import Student from "../models/Student.js";
import Sponsor from "../models/Sponsor.js";

const router = express.Router();

/*
----------------------------------------------------
1️⃣ CHECK WALLET ROLE
----------------------------------------------------
*/

router.post("/check-wallet", async (req, res) => {
  try {
    const { walletAddress } = req.body;

    if (!walletAddress) {
      return res.status(400).json({ message: "Wallet address required" });
    }

    const student = await Student.findOne({ walletAddress });
    if (student) {
      return res.json({ role: "student" });
    }

    const sponsor = await Sponsor.findOne({ walletAddress });
    if (sponsor) {
      return res.json({ role: "sponsor" });
    }

    return res.json({ role: "new" });

  } catch (error) {
    console.error("Wallet check error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/*
----------------------------------------------------
2️⃣ GET PROFILE (FOR HEADER NAME)
----------------------------------------------------
*/

router.post("/get-profile", async (req, res) => {
  try {
    const { walletAddress } = req.body;

    if (!walletAddress) {
      return res.status(400).json({ message: "Wallet address required" });
    }

    const student = await Student.findOne({ walletAddress });
    if (student) {
      return res.json({
        role: "student",
        name: student.fullName,
      });
    }

    const sponsor = await Sponsor.findOne({ walletAddress });
    if (sponsor) {
      return res.json({
        role: "sponsor",
        name: sponsor.fullName,
      });
    }

    return res.status(404).json({ message: "User not found" });

  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
