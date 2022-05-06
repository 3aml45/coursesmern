import React, { useEffect, useState } from "react";
import { useCourses } from "../context/courseContext";

export const SignupModal = () => {
  const {
    lessons,
    students,
    setShowSignupStudent,
    signUpStudent,
    lessonSelected,
  } = useCourses();
  const [student, setStudent] = useState({
    name: "",
  });
  const [filteredStudents, setFilteredStudents] = useState([]);
  const handleChange = ({ target: { value, name } }) => {
    setStudent({ ...student, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpStudent(lessonSelected._id, student);
    setShowSignupStudent(false);
  };
  useEffect(() => {
    const lessonsSameSchedule = lessons.filter(
      (lesson) =>
        lesson.schedule.day === lessonSelected.schedule.day &&
        lesson.schedule.turn === lessonSelected.schedule.turn
    );
    let prueba = [];
    const studentsRelated = lessonsSameSchedule
      .map((lsn) => lsn.students.map((std) => std.uid))
      .forEach((element) => {
        prueba.push(...element);
      });
    const filStds = students.filter(
      (student) => !prueba.find((p) => p === student._id)
    );
    setFilteredStudents(filStds);
  }, []);
  return (
    <div className="flex items-center justify-center w-full h-screen fixed top-0 left-0">
      <form
        onSubmit={handleSubmit}
        className="p-5 bg-white rounded shadow-md w-4/5"
      >
        <header>
          <div className="relative mb-2 flex justify-end">
            <button
              onClick={() => setShowSignupStudent(false)}
              className="py-1 px-3 rounded bg-red-500 text-white font-bold"
            >
              X
            </button>
          </div>
          <h2 className="text-center mb-5 text-2xl">Add Student to</h2>
        </header>
        <div className="flex flex-col items-center justify-end">
          <div>
            <div className="mt-5">
              <label className="block m-0 p-0">Choose Mentor:</label>
              <select onChange={handleChange} name="name">
                <option value={""}>Select Mentor</option>
                {filteredStudents.map((student, idx) => (
                  <option key={idx} value={student._id}>
                    {student.name}
                  </option>
                ))}
              </select>
            </div>
            <button className="mt-5 py-2 text-white font-bold rounded hover:bg-blue-500 hover:shadow-md bg-blue-400 w-full">
              Add Student
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
