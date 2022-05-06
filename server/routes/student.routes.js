import { Router } from "express";
import { createStudent, deleteStudent, getAllStudents } from "../controllers/student.controller.js";
const router = Router();
router.get("/apistudents", getAllStudents);
router.post("/apistudents", createStudent);
// router.put("/student/:id", updateStudent);
router.delete("/apistudents/:id", deleteStudent);
// router.get("/student/:id", getStudent);
export default router;
