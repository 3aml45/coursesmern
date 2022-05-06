import { Router } from "express";
import {
  createLesson,
  deleteLesson,
  getAllLessons,
  getLesson,
  updateLesson,
} from "../controllers/lesson.controllers.js";
const router = Router();
router.get("/lessons", getAllLessons);
router.post("/lessons", createLesson);
router.put("/lessons/:id", updateLesson);
router.delete("/lessons/:id", deleteLesson);
router.get("/lessons/:id", getLesson);
export default router;
