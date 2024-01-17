import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Regester from "../pages/Regester";
import { adminRoutes } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/faculty",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/student",
    element: <App />,
    children: adminRoutes,
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
