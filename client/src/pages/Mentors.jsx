import React from "react";
import { Link } from "react-router-dom";
import { useCourses } from "../context/courseContext";

export const Mentors = () => {
  const { mentors, deleteMentor } = useCourses();
  const handleDeleteMentor = (_id) => {
    deleteMentor(_id);
  };
  return (
    <div>
      <h1 className="text-center text-3xl">Mentors List</h1>
      {mentors.map((mentor, idx) => (
        <div key={idx} className="my-5 mx-5 py-5 px-5 shadow-md bg-gray-100">
          <p className="mb-5 shadow-md pb-1 text-xl text-blue-500">
            <b>{mentor.name || "error"}</b>
          </p>
          <p>
            <b>Email:</b> {mentor.email || "error"}
          </p>
          <p>
            <b>id:</b> {mentor._id || "error"}
          </p>
          <button
            className="bg-red-300 hover:bg-red-400 hover:shadow-md rounded py-1 px-4 text-sm"
            onClick={() => handleDeleteMentor(mentor._id)}
          >
            Delete
          </button>
          <Link
            className="ml-2 bg-purple-300 hover:bg-purple-400 hover:shadow-md rounded py-1 px-4 text-sm"
            to={`/mentors/${mentor._id}`}
          >
            Edit
          </Link>
        </div>
      ))}
    </div>
  );
};
