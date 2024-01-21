import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Regester from "../pages/Regester";
import { adminPaths } from "./admin.routes";
import { routesGenater } from "../utils/routesGenater";
import { StudentPaths } from "./student.routes";
import { FacultyPaths } from "./faculty.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenater(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenater(FacultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenater(StudentPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/regester",
    element: <Regester />,
  },
]);
export default router;
