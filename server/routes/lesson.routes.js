import { Router } from "express";
import {
  createLesson,
  deleteLesson,
  getAllLessons,
  getLesson,
  updateLesson,
} from "../controllers/lesson.controllers.js";
const router = Router();
router.get("/apilessons", getAllLessons);
router.post("/apilessons", createLesson);
router.put("/apilessons/:id", updateLesson);
router.delete("/apilessons/:id", deleteLesson);
router.get("/apilessons/:id", getLesson);
export default router;
