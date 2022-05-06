import { Router } from "express";
import {
  createMentor,
  deleteMentor,
  getAllMentors,
  getMentor,
  updateMentor,
} from "../controllers/mentor.controller.js";
const router = Router();
router.get("/apimentors", getAllMentors);
router.post("/apimentors", createMentor);
router.put("/apimentors/:id", updateMentor);
router.delete("/apimentors/:id", deleteMentor);
router.get("/apimentors/:id", getMentor);
export default router;
