import express from "express";
import coursesRoutes from "./routes/course.routes.js";
import mentorsRoutes from "./routes/mentor.routes.js";
import lessonRoutes from "./routes/lesson.routes.js";
import studentRoutes from "./routes/student.routes.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());

app.use(coursesRoutes);
app.use(mentorsRoutes);
app.use(lessonRoutes);
app.use(studentRoutes);

app.use(express.static(join(__dirname, '../client/build')));

export default app;
