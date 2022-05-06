import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourse,
  updateCourse,
} from "../controllers/course.controllers.js";
const router = Router();
router.get("/apicourses", getAllCourses);
router.post("/apicourses", createCourse);
router.put("/apicourses/:id", updateCourse);
router.delete("/apicourses/:id", deleteCourse);
router.get("/apicourses/:id", getCourse);
export default router;
