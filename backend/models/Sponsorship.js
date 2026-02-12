import mongoose from "mongoose";

const sponsorshipSchema = new mongoose.Schema({
  sponsorWallet: {
    type: String,
    required: true,
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "pending", // later: locked, released
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Sponsorship", sponsorshipSchema);
