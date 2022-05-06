import { useState, useContext, createContext, useEffect } from "react";
import {
  createPostRequest,
  getPostsRequest,
  deletePostRequest,
  getPostRequest,
  updatePostRequest,
} from "../api/courses";
import {
  getLessonsRequest,
  createLessonRequest,
  updateLessonRequest,
  deleteLessonRequest,
} from "../api/lessons";
import {
  getMentorsRequest,
  createMentorRequest,
  deleteMentorRequest,
  getMentorRequest,
  updateMentorRequest,
} from "../api/mentors";
import {
  createStudentRequest,
  deleteStudentRequest,
  getStudentsRequest,
} from "../api/students";

const courseContext = createContext();

export const useCourses = () => {
  const context = useContext(courseContext);
  return context;
};

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [students, setStudents] = useState([]);
  const [courseSelected, setCourseSelected] = useState(null);
  const [lessonSelected, setLessonSelected] = useState(null);
  const [showAddLesson, setShowAddLesson] = useState(false);
  const [showSignupStudent, setShowSignupStudent] = useState(false);
  const [showLessonModal, setShowLessonModal] = useState(false);

  const getCourses = async () => {
    const res = await getPostsRequest();
    setCourses(res.data);
  };

  const createCourse = async (course) => {
    try {
      // const mentorFound = mentors.find(
      //   (mentor) => mentor._id === course.sourceMentor
      // );
      const newCourse = {
        name: course.name,
        description: course.description,
      };
      const res = await createPostRequest(newCourse);
      setCourses([...courses, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCourse = async (id) => {
    const lessonsRelated = lessons.filter((lesson) => lesson.course.uid === id);
    const res = await deletePostRequest(id);
    if (res.status === 204) {
      setCourses(courses.filter((course) => course._id !== id));
    }
    lessonsRelated.map((lesson) => {
      const res = util1(lesson._id);
      if (res.status === 204) {
        setLessons(lessons.filter((lsn) => lsn._id !== lesson._id));
      }
    });
  };

  const util1 = async (id) => {
    const res = await deleteLessonRequest(id);
    return res;
  };

  const getCourse = async (id) => {
    const res = await getPostRequest(id);
    return res.data;
  };

  const updateCourse = async (id, course) => {
    const res = await updatePostRequest(id, course);
    setCourses(courses.map((post) => (post._id === id ? res.data : post)));
  };

  const getMentors = async () => {
    const res = await getMentorsRequest();
    setMentors(res.data);
  };

  const createMentor = async (mentor) => {
    try {
      const newMentor = {
        name: mentor.name,
        email: mentor.email,
      };
      const res = await createMentorRequest(newMentor);
      setMentors([...mentors, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteMentor = async (id) => {
    const res = await deleteMentorRequest(id);
    if (res.status === 204) {
      setMentors(mentors.filter((mentor) => mentor._id !== id));
    }
  };

  const updateMentor = async (id, mentor) => {
    const res = await updateMentorRequest(id, mentor);
    setMentors(
      mentors.map((mentor) => (mentor._id === id ? res.data : mentor))
    );
  };

  const getLessons = async () => {
    const res = await getLessonsRequest();
    setLessons(res.data);
  };

  const createLesson = async (lesson) => {
    try {
      const mentorFound = mentors.find(
        (mentor) => mentor._id === lesson.mentor
      );
      const courseFound = courses.find(
        (course) => course._id === lesson.course
      );
      const lessonFound = lessons.find(
        (lsn) =>
          lsn.mentor.name === mentorFound.name &&
          lsn.schedule.day === lesson.day &&
          lsn.schedule.turn === lesson.turn
      );
      if (lessonFound) {
        throw new Error("El horario ya esta ocupado para este mentor");
      } else {
        const newLesson = {
          course: {
            name: courseFound?.name,
            uid: courseFound?._id,
          },
          mentor: {
            name: mentorFound?.name,
            uid: mentorFound?._id,
          },
          schedule: {
            day: lesson.day,
            turn: lesson.turn,
          },
        };
        const res = await createLessonRequest(newLesson);
        setLessons([...lessons, res.data]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteLesson = async (id) => {
    const res = await deleteLessonRequest(id);
    if (res.status === 204) {
      setLessons(lessons.filter((lesson) => lesson._id !== id));
    }
  };

  const deleteStudentFromLesson = async (student) => {
    const newLesson = {
      ...lessonSelected,
      students: lessonSelected.students.filter(
        (sdt) => sdt.uid !== student.uid
      ),
    };
    const res = await updateLessonRequest(lessonSelected._id, newLesson);
    setLessonSelected(res.data);
    setLessons(
      lessons.map((lesson) =>
        lesson._id === lessonSelected._id ? res.data : lesson
      )
    );
  };

  const signUpStudent = async (lesson_id, student) => {
    const lessonFound = lessons.find((lesson) => lesson._id === lesson_id);
    const studentFound = students.find((sdt) => sdt._id === student.name);
    const newLesson = {
      ...lessonFound,
      students: [
        ...lessonFound.students,
        { name: studentFound.name, uid: studentFound._id },
      ],
    };
    const res = await updateLessonRequest(lesson_id, newLesson);
    setLessons(
      lessons.map((lesson) => (lesson._id === lesson_id ? res.data : lesson))
    );
  };

  const getStudents = async () => {
    const res = await getStudentsRequest();
    setStudents(res.data);
  };

  const createStudent = async (student) => {
    try {
      const newStudent = {
        name: student.name,
        email: student.email,
      };
      const res = await createStudentRequest(newStudent);
      setStudents([...students, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteStudent = async (id) => {
    const res = await deleteStudentRequest(id);
    if (res.status === 204) {
      setStudents(students.filter((student) => student._id !== id));
    }
    const res1 = lessons.map((lesson) =>
      lesson.students.map((student) => student.uid)
    );
    const lessonsFound = res1.map((el, i) => {
      const found = el.find((item) => item === id);
      if (found) {
        const newLesson = {
          ...lessons[i],
          students: lessons[i].students.filter((student) => student.uid !== id),
        };
        util2(lessons[i]._id, newLesson);
        getLessons();
      }
    });
  };

  const util2 = async (lesson_id, newLesson) => {
    const res = await updateLessonRequest(lesson_id, newLesson);
    return res;
  };

  useEffect(() => {
    getStudents();
    getCourses();
    getMentors();
    getLessons();
  }, []);

  useEffect(() => {
    if (!showAddLesson) {
      setCourseSelected(null);
    }
  }, [showAddLesson]);

  return (
    <courseContext.Provider
      value={{
        courses,
        getCourses,
        createCourse,
        deleteCourse,
        getCourse,
        updateCourse,
        mentors,
        deleteMentor,
        createMentor,
        updateMentor,
        showAddLesson,
        setShowAddLesson,
        lessons,
        courseSelected,
        setCourseSelected,
        createLesson,
        students,
        createStudent,
        deleteStudent,
        showSignupStudent,
        setShowSignupStudent,
        signUpStudent,
        lessonSelected,
        setLessonSelected,
        showLessonModal,
        setShowLessonModal,
        deleteLesson,
        deleteStudentFromLesson,
      }}
    >
      {children}
    </courseContext.Provider>
  );
};
