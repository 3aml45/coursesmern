import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCourses } from "../context/courseContext";

export const CoursesForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { courses, createCourse, updateCourse, mentors } = useCourses();
  const [course, setCourse] = useState({
    name: "",
    description: "",
  });
  const handleChange = ({ target: { value, name } }) => {
    setCourse({ ...course, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      console.log(course, params.id);
      updateCourse(params.id, course);
    } else {
      createCourse(course);
    }
    navigate("/courses");
  };
  useEffect(() => {
    const courseFound = courses.find((course) => course._id === params.id);
    if (courseFound) {
      setCourse({
        ...course,
        name: courseFound.name,
        description: courseFound.description,
      });
    } else {
      setCourse({
        name: "",
        description: "",
      });
    }
  }, [params.id, courses]);
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
              placeholder="name"
              className="border border-grey-600"
              value={course.name}
            />
          </div>
          <div>
            <label className="block">Description</label>
            <input
              name="description"
              onChange={handleChange}
              type="text"
              placeholder="description"
              className="border border-grey-600"
              value={course.description}
            />
          </div>
          {/* <div className="mt-5">
            <label className="block">Choose a car:</label>
            <select onChange={handleChange} name="sourceMentor" id="cars">
              <option value={""}>Select Mentor</option>
              {mentors.map((mentor, idx) => (
                <option key={idx} value={mentor._id}>
                  {mentor.name}
                </option>
              ))}
            </select>
          </div> */}
          <button className="w-full my-5 bg-green-300 hover:bg-green-400 py-2 rounded hover:shadow-md">
            {params.id ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};
