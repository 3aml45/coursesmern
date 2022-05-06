import React, { useState } from "react";
import { useCourses } from "../context/courseContext";

export const AddLessonModal = () => {
  const { mentors, setShowAddLesson, courseSelected, createLesson } =
    useCourses();
  const [lesson, setLesson] = useState({
    mentor: "",
    day: "",
    turn: "",
  });
  const handleChange = ({ target: { value, name } }) => {
    setLesson({ ...lesson, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLesson = {
      course: courseSelected._id,
      mentor: lesson.mentor,
      day: lesson.day,
      turn: lesson.turn,
    };
    createLesson(newLesson);
    setShowAddLesson(false);
  };
  return (
    <div className="flex items-center justify-center w-full h-screen fixed top-0 left-0">
      <form
        onSubmit={handleSubmit}
        className="p-5 bg-white rounded shadow-md w-4/5"
      >
        <header>
          <div className="relative mb-2 flex justify-end">
            <button
              onClick={() => setShowAddLesson(false)}
              className="py-1 px-3 rounded bg-red-500 text-white font-bold"
            >
              X
            </button>
          </div>
          <h2 className="text-center mb-5 text-2xl">
            Add Lesson to ({courseSelected.name})
          </h2>
        </header>
        <div className="flex flex-col items-center justify-end">
          <div>
            <div className="mt-5">
              <label className="block m-0 p-0">Choose Mentor:</label>
              <select onChange={handleChange} name="mentor">
                <option value={""}>Select Mentor</option>
                {mentors.map((mentor, idx) => (
                  <option key={idx} value={mentor._id}>
                    {mentor.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-5">
              <label className="block">Day</label>
              <input
                name="day"
                placeholder="day"
                className="border border-grey-600"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="mt-5">
              <label className="block">Turn</label>
              <input
                name="turn"
                placeholder="turn"
                className="border border-grey-600"
                onChange={handleChange}
                type="text"
              />
            </div>
            <button className="mt-5 py-2 text-white font-bold rounded hover:bg-blue-500 hover:shadow-md bg-blue-400 w-full text-center">
              Add Lesson
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
