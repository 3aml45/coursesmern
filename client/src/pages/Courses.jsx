import { useState } from "react";
import { Link } from "react-router-dom";
import { AddLessonModal } from "../components/AddLessonModal";
import { LessonModal } from "../components/LessonModal";
import { SignupModal } from "../components/SignupModal";
import { useCourses } from "../context/courseContext";

export const Courses = () => {
  const {
    lessons,
    courses,
    deleteCourse,
    showAddLesson,
    setShowAddLesson,
    setCourseSelected,
    showSignupStudent,
    setShowSignupStudent,
    setLessonSelected,
    setShowLessonModal,
    showLessonModal,
  } = useCourses();
  const handleDeleteCourse = (_id) => {
    deleteCourse(_id);
  };
  return (
    <div>
      {showLessonModal && <LessonModal />}
      {showSignupStudent && <SignupModal />}
      {showAddLesson && <AddLessonModal />}
      <h1 className="text-center text-3xl">Courses List</h1>
      {courses.map((course, idx) => (
        <div key={idx} className="my-5 mx-5 py-5 px-5 shadow-md bg-gray-100">
          <p className="mb-5 shadow-md pb-1 text-xl text-blue-500">
            <b>{course.name || "error"}</b>
          </p>
          <p>
            <b>Description:</b> {course.description || "error"}
          </p>
          <p>
            <b>_id:</b> {course._id || "error"}
          </p>
          <button
            className="bg-red-300 hover:bg-red-400 hover:shadow-md rounded py-1 px-4 text-sm"
            onClick={() => handleDeleteCourse(course._id)}
          >
            Delete
          </button>
          <Link
            className="ml-2 bg-purple-300 hover:bg-purple-400 hover:shadow-md rounded py-1 px-4 text-sm"
            to={`/courses/${course._id}`}
          >
            Edit
          </Link>
          <button
            onClick={() => {
              setShowAddLesson(true);
              setCourseSelected(course);
            }}
            className="ml-2 bg-green-300 hover:bg-green-400 hover:shadow-md rounded py-1 px-4 text-sm"
          >
            Add Lesson
          </button>
          <div className="mt-5 flex flex-wrap justify-start gap-5">
            <h2 className="w-full">Lessons</h2>
            {lessons.map(
              (lesson, idx) =>
                lesson.course.uid === course._id && (
                  <div
                    key={idx}
                    className="cursor-pointer select-none text-sm text-center rounded px-2 py-1 bg-orange-900 text-white"
                    onClick={() => {
                      setShowLessonModal(true);
                      setLessonSelected(lesson);
                    }}
                  >
                    <p>{lesson.mentor.name}</p>
                    <p>{lesson.schedule.day}</p>
                    <p>{lesson.schedule.turn}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowSignupStudent(true);
                        setLessonSelected(lesson);
                      }}
                      className="bg-yellow-500 hover:bg-yellow-400 text-black px-1 rounded "
                    >
                      sign up
                    </button>
                  </div>
                )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
