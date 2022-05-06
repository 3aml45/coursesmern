import React, { useEffect, useState } from "react";
import { useCourses } from "../context/courseContext";
export const Lessons = () => {
  const { lessons } = useCourses();
  const [daySelected, setDaySelected] = useState("all");
  const handleDaySelected = (e) => {
    setDaySelected(e.target.name);
  };
  return (
    <div>
      <header className="text-center text-2xl mb-5">All Lessons List</header>
      <article className="flex flex-wrap justify-center items-center gap-3">
        <button
          name="all"
          onClick={handleDaySelected}
          className="bg-orange-700 rounded px-2 text-white"
        >
          all
        </button>
        <button
          name="lunes"
          onClick={handleDaySelected}
          className="bg-orange-700 rounded px-2 text-white"
        >
          lunes
        </button>
        <button
          name="martes"
          onClick={handleDaySelected}
          className="bg-orange-700 rounded px-2 text-white"
        >
          martes
        </button>
        <button
          name="miercoles"
          onClick={handleDaySelected}
          className="bg-orange-700 rounded px-2 text-white"
        >
          miercoles
        </button>
        <button
          name="jueves"
          onClick={handleDaySelected}
          className="bg-orange-700 rounded px-2 text-white"
        >
          jueves
        </button>
        <button
          name="viernes"
          onClick={handleDaySelected}
          className="bg-orange-700 rounded px-2 text-white"
        >
          viernes
        </button>
        <button
          name="sabado"
          onClick={handleDaySelected}
          className="bg-orange-700 rounded px-2 text-white"
        >
          sabado
        </button>
        <button
          name="domingo"
          onClick={handleDaySelected}
          className="bg-orange-700 rounded px-2 text-white"
        >
          domingo
        </button>
      </article>
      <ul className="flex flex-wrap gap-6 justify-center mt-5">
        {lessons.map((lesson, i) => {
          if(lesson.schedule.day === daySelected || daySelected === 'all'){
            return (
              <li
                key={i}
                className="cursor-pointer w-80 rounde shadow-3xl px-3 py-2 bg-orange-200"
              >
                <h1>Lesson #{lesson._id}</h1>
                <p>
                  <span>Course:</span> {lesson.course.name}
                </p>
                <p>
                  <span>Mentor:</span> {lesson.mentor.name}
                </p>
                <p>
                  <span>Day:</span> {lesson.schedule.day}
                </p>
                <p>
                  <span>Turn:</span> {lesson.schedule.turn}
                </p>
              </li>
            )
          }
        })}
      </ul>
    </div>
  );
};
