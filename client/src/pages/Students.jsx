import React, { useEffect } from 'react'
import { useCourses } from '../context/courseContext';

export const Students = () => {
  const { students, deleteStudent } = useCourses();
  const handleDeleteStudent = (_id) => {
    deleteStudent(_id);
  };
  return (
    <div>
      <h1 className="text-center text-3xl">Students List</h1>
      {students.map((student, idx) => (
        <div key={idx} className="my-5 mx-5 py-5 px-5 shadow-md bg-gray-100">
          <p className="mb-5 shadow-md pb-1 text-xl text-blue-500">
            <b>{student.name || "error"} - {student._id || "error"}</b>
          </p>
          <p>
            <b>Email:</b> {student.email || "error"}
          </p>
          <button
            className="bg-red-300 hover:bg-red-400 hover:shadow-md rounded py-1 px-4 text-sm"
            onClick={() => handleDeleteStudent(student._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
