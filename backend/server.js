import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import studentRoutes from "./routes/studentRoutes.js";
import sponsorRoutes from "./routes/sponsorRoutes.js";

import sponsorshipRoutes from "./routes/sponsorshipRoutes.js";


import authRoutes from "./routes/authRoutes.js";


// dotenv.config({ override: true });


// console.log("Loaded URI:", process.env.MONGO_URI);




const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/sponsors", sponsorRoutes);

app.use("/api/sponsorships", sponsorshipRoutes);


app.use("/api/auth", authRoutes);



mongoose.connect("mongodb+srv://shravanidhopade_db_user:pass123@cluster0.8rzph3l.mongodb.net/sparkgrant?retryWrites=true&w=majority")

  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

