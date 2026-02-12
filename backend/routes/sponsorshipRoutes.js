import express from "express";
import Sponsorship from "../models/Sponsorship.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { sponsorWallet, studentId, amount } = req.body;

    const newSponsorship = new Sponsorship({
      sponsorWallet,
      studentId,
      amount,
    });

    const saved = await newSponsorship.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
