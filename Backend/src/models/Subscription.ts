import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  userId: String,
  plan: {
    type: String,
    enum: ["free", "pro", "enterprise"]
  },
  status: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Subscription", subscriptionSchema);