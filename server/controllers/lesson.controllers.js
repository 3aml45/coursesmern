import {Lesson} from "../models/Lesson.js";
export const getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.send(lessons);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createLesson = async (req, res) => {
  try {
    const { course, mentor, schedule, students } = req.body;
    const newLesson = new Lesson({
      course,
      mentor,
      schedule,
      students,
    });
    await newLesson.save();
    return res.send(newLesson);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateLesson = async (req, res) => {
  try {
    const paramsId = req.params.id;
    const updatedLesson = await Lesson.findByIdAndUpdate(paramsId, req.body, {
      new: true,
    });
    res.send(updatedLesson);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteLesson = async (req, res) => {
  try {
    const lessonRemoved = await Lesson.findByIdAndDelete(req.params.id);
    if (!lessonRemoved) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) return res.sendStatus(404);
    return res.json(lesson);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
