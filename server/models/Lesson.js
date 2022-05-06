import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({ name: String, email: String });
const lessonSchema = new mongoose.Schema({
  course: {
    name: {
      type: String,
      trim: true,
    },
    uid: {
      type: String,
      trim: true,
    },
  },
  mentor: {
    name: {
      type: String,
      trim: true,
    },
    uid: {
      type: String,
      trim: true,
    },
  },
  schedule: {
    day: {
      type: String,
      trim: true,
    },
    turn: {
      type: String,
      trim: true,
    },
  },
  students: [
    { name: { type: String, trim: true }, uid: { type: String, trim: true } },
  ],
});

export const Lesson = mongoose.model("Lesson", lessonSchema);
export const Student = mongoose.model("Student", studentSchema);
