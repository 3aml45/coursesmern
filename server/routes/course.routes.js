import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourse,
  updateCourse,
} from "../controllers/course.controllers.js";
const router = Router();
router.get("/courses", getAllCourses);
router.post("/courses", createCourse);
router.put("/courses/:id", updateCourse);
router.delete("/courses/:id", deleteCourse);
router.get("/courses/:id", getCourse);
export default router;
