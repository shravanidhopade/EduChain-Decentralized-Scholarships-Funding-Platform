import mongoose from "mongoose";

const sponsorSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    graduationYear: {
      type: Number,
      required: true,
    },
    company: {
      type: String,
    },
    email: {
      type: String,
    },
    maxBudget: {
      type: Number,
    },
    bio: {
      type: String,
    },
    walletAddress: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Sponsor = mongoose.model("Sponsor", sponsorSchema);

export default Sponsor;
