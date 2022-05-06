import Course from "../models/Course.js";
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.send(courses);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createCourse = async (req, res) => {
  try {
    const {
      name,
      description,
    } = req.body;
    const newCourse = new Course({
      name,
      description,
    });
    await newCourse.save();
    return res.send(newCourse);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateCourse = async (req, res) => {
  try {
    const paramsId = req.params.id;
    const updatedPost = await Course.findByIdAndUpdate(paramsId, req.body, {
      new: true,
    });
    res.send(updatedPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteCourse = async (req, res) => {
  try {
    const postRemoved = await Course.findByIdAndDelete(req.params.id);
    if (!postRemoved) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getCourse = async (req, res) => {
  try {
    const post = await Course.findById(req.params.id);
    if (!post) return res.sendStatus(404);
    return res.json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
