import express from "express";
import { auth } from "../middleware/auth";
import { createProject, getProjects } from "../controllers/projectController";

const router = express.Router();

router.get("/", auth, getProjects);
router.post("/", auth, createProject);

module.exports = router;