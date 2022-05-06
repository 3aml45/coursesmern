import { Router } from "express";
import { createStudent, deleteStudent, getAllStudents } from "../controllers/student.controller.js";
const router = Router();
router.get("/students", getAllStudents);
router.post("/students", createStudent);
// router.put("/student/:id", updateStudent);
router.delete("/students/:id", deleteStudent);
// router.get("/student/:id", getStudent);
export default router;
