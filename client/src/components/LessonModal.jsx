import React, { useEffect } from "react";
import { useCourses } from "../context/courseContext";

export const LessonModal = () => {
  const {
    setShowLessonModal,
    lessonSelected,
    deleteLesson,
    deleteStudentFromLesson,
  } = useCourses();
  return (
    <div className="flex items-center justify-center w-full h-screen fixed top-0 left-0">
      <div className="p-5 bg-white rounded shadow-md w-4/5">
        <header>
          <div className="relative mb-2 flex justify-end gap-4">
            <button
              className="py-1 px-3 rounded bg-orange-500 text-white font-bold"
              onClick={() => {
                deleteLesson(lessonSelected._id);
                setShowLessonModal(false);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => setShowLessonModal(false)}
              className="py-1 px-3 rounded bg-red-500 text-white font-bold"
            >
              X
            </button>
          </div>
          <h2 className="text-center mb-5 text-2xl">Lesson</h2>
        </header>
        <div>
          <div>mentor: {lessonSelected.mentor.name}</div>
          <div>course: {lessonSelected.course.name}</div>
          <article>
            <h5 className="border-t border-gray-500 mt-5">
              Students Signed Up:
            </h5>
            <ul>
              {lessonSelected.students.map((student, i) => (
                <div
                  key={i}
                  className="mt-2 flex items-center gap-2 hover:text-gray-500"
                >
                  <li className="truncate inline-block w-40">
                    • {student.name}
                  </li>
                  <button
                    onClick={() => {
                      console.log(student);
                      deleteStudentFromLesson(student);
                    }}
                    className="px-2 bg-red-500 hover:bg-red-400 text-white rounded"
                  >
                    Del
                  </button>
                </div>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
};
