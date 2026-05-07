import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/subscriptions", require("./routes/subscriptionRoutes"));

app.get("/", (req, res) => {
  res.send("SaaS API Running");
});

app.listen(process.env.PORT, () => {
  console.log("Server Running");
});