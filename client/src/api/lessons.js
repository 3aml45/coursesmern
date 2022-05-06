import axios from "axios";

export const getLessonsRequest = async () => await axios.get("/lessons");

export const createLessonRequest = async (lesson) => {
  const form = new FormData();
  for (let key in lesson) {
    form.append(key, lesson[key]);
  }
  return await axios.post("/lessons", lesson, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteLessonRequest = async (id) =>
  await axios.delete("/lessons/" + id);

export const getLessonRequest = async (id) => await axios.get("/lessons/" + id);

export const updateLessonRequest = async (id, newFields) =>
  await axios.put(`/lessons/${id}`, newFields);
