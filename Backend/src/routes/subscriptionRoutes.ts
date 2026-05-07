import express from "express";
import { createSubscription } from "../controllers/subscriptionController";

const router = express.Router();

router.post("/", createSubscription);

module.exports = router;