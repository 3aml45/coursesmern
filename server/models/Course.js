import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name:{
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
});

export default mongoose.model("Course", courseSchema);
