import { Student } from "../models/Lesson.js";
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newStudent = new Student({
      name,
      email,
    });
    await newStudent.save();
    return res.send(newStudent);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteStudent = async (req, res) => {
  try {
    const studentRemoved = await Student.findByIdAndDelete(req.params.id);
    if (!studentRemoved) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};