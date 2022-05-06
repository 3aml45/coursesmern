import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useCourses } from '../context/courseContext';

export const StudentsForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { students, createStudent } = useCourses();
  const [student, setStudent] = useState({
    name: "",
    email: "",
  });
  const handleChange = ({ target: { value, name } }) => {
    setStudent({ ...student, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createStudent(student);
    navigate("/students");
  };
  useEffect(() => {
    const studentFound = students.find((student) => student._id === params.id);
    if (studentFound) {
      setStudent({
        ...student,
        name: studentFound.name,
        email: studentFound.email,
      });
    } else {
      setStudent({
        name: '',
        email: '',
      });
    }
  }, [params.id, students]);
  return (
    <div>
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
              placeholder="Student Name"
              className="border border-grey-600"
              value={student.name}
            />
          </div>
          <div>
            <label className="block">Email</label>
            <input
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Student Email"
              className="border border-grey-600"
              value={student.email}
            />
          </div>
          <button className="w-full my-5 bg-green-300 hover:bg-green-400 py-2 rounded hover:shadow-md">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
