import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    fundingRequired: {
      type: Number,
      required: true,
    },
    financialNeed: {
      type: String,
      required: true,
    },
    milestones: [
      {
        type: String,
      }
    ],

       walletAddress: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
