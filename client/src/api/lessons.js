import axios from "axios";

export const getLessonsRequest = async () => await axios.get("/apilessons");

export const createLessonRequest = async (lesson) => {
  const form = new FormData();
  for (let key in lesson) {
    form.append(key, lesson[key]);
  }
  return await axios.post("/apilessons", lesson, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteLessonRequest = async (id) =>
  await axios.delete("/apilessons/" + id);

export const getLessonRequest = async (id) => await axios.get("/apilessons/" + id);

export const updateLessonRequest = async (id, newFields) =>
  await axios.put(`/apilessons/${id}`, newFields);
