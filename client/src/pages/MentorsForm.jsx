import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCourses } from "../context/courseContext";

export const MentorsForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { mentors, createMentor, updateMentor } = useCourses();
  const [mentor, setMentor] = useState({
    name: "",
    email: "",
  });
  const handleChange = ({ target: { value, name } }) => {
    setMentor({ ...mentor, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      updateMentor(params.id, mentor);
    } else {
      createMentor(mentor);
    }
    navigate("/mentors");
  };
  useEffect(() => {
    const mentorFound = mentors.find((mentor) => mentor._id === params.id);
    if (mentorFound) {
      setMentor({
        ...mentor,
        name: mentorFound.name,
        email: mentorFound.email,
      });
    } else {
      setMentor({
        name: '',
        email: '',
      });
    }
  }, [params.id, mentors]);
  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="py-5 shadow-md flex flex-col items-center"
      >
        <div>
          <div>
            <label className="block">Name</label>
            <input
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Mentor Name"
              className="border border-grey-600"
              value={mentor.name}
            />
          </div>
          <div>
            <label className="block">Email</label>
            <input
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Mentor Email"
              className="border border-grey-600"
              value={mentor.email}
            />
          </div>
          <button className="w-full my-5 bg-green-300 hover:bg-green-400 py-2 rounded hover:shadow-md">
            {params.id ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};
