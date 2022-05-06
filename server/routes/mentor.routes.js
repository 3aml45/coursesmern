import { Router } from "express";
import {
  createMentor,
  deleteMentor,
  getAllMentors,
  getMentor,
  updateMentor,
} from "../controllers/mentor.controller.js";
const router = Router();
router.get("/mentors", getAllMentors);
router.post("/mentors", createMentor);
router.put("/mentors/:id", updateMentor);
router.delete("/mentors/:id", deleteMentor);
router.get("/mentors/:id", getMentor);
export default router;
