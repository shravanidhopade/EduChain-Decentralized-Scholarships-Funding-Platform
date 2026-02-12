import express from "express";
import Sponsor from "../models/Sponsor.js";

const router = express.Router();

// POST - Create new sponsor
router.post("/", async (req, res) => {
  try {
    const newSponsor = new Sponsor(req.body);
    const savedSponsor = await newSponsor.save();
    res.status(201).json(savedSponsor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET - Get all sponsors (for testing)
router.get("/", async (req, res) => {
  try {
    const sponsors = await Sponsor.find();
    res.json(sponsors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
