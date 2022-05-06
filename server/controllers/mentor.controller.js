import Mentor from "../models/Mentor.js";
export const getAllMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.send(mentors);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createMentor = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newMentor = new Mentor({
      name,
      email,
    });
    await newMentor.save();
    return res.send(newMentor);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateMentor = async (req, res) => {
  try {
    const paramsId = req.params.id;
    const updatedMentor = await Mentor.findByIdAndUpdate(paramsId, req.body, {
      new: true,
    });
    res.send(updatedMentor);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteMentor = async (req, res) => {
  try {
    const mentorRemoved = await Mentor.findByIdAndDelete(req.params.id);
    if (!mentorRemoved) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getMentor = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id);
    if (!mentor) return res.sendStatus(404);
    return res.json(mentor);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
