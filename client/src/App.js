import { Link, Route, Routes } from "react-router-dom";
import { Courses } from "./pages/Courses";
import { CoursesForm } from "./pages/CoursesForm";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CourseProvider } from "./context/courseContext";
import { Mentors } from "./pages/Mentors";
import { MentorsForm } from "./pages/MentorsForm";
import { Students } from "./pages/Students";
import { StudentsForm } from "./pages/StudentsForm";
import { Lessons } from "./pages/Lessons";

function App() {
  return (
    <>
      <header className="px-5 py-5 shadow-md fixed bg-white block w-full text-center flex gap-2 flex-wrap justify-center items-center">
        <Link className="px-3 py-2 bg-blue-200 font-bold rounded" to="/">
          Home
        </Link>
        <Link className="px-3 py-2 bg-blue-200 font-bold rounded" to="/courses">
          Courses
        </Link>
        <Link
          className="px-3 py-2 bg-blue-200 font-bold rounded"
          to="/newcourse"
        >
          + Create Course
        </Link>
        <Link className="px-3 py-2 bg-blue-200 font-bold rounded" to="/mentors">
          Mentors
        </Link>
        <Link
          className="px-3 py-2 bg-blue-200 font-bold rounded"
          to="/newmentor"
        >
          + Create Mentor
        </Link>
        <Link
          className="px-3 py-2 bg-blue-200 font-bold rounded"
          to="/students"
        >
          Students
        </Link>
        <Link
          className="px-3 py-2 bg-blue-200 font-bold rounded"
          to="/newstudent"
        >
          + Create Student
        </Link>
        <Link
          className="px-3 py-2 bg-blue-200 font-bold rounded"
          to="/lessons"
        >
          Lessons
        </Link>
      </header>
      <div className="pt-60 min-h-screen flex justify-center">
        <div className="px-10 container mx-auto mt-5">
          <CourseProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/newcourse" element={<CoursesForm />} />
              <Route path="/courses/:id" element={<CoursesForm />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/newmentor" element={<MentorsForm />} />
              <Route path="/mentors/:id" element={<MentorsForm />} />
              <Route path="/students" element={<Students />} />
              <Route path="/newstudent" element={<StudentsForm />} />
              <Route path='/lessons' element={<Lessons />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </CourseProvider>
        </div>
      </div>
    </>
  );
}

export default App;
