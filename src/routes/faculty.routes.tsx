import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import FacultyTeachers from "../pages/faculty/FacultyTeachers";

export const FacultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Faculty",
    children: [
      {
        name: "All Teacher",
        path: "All-Teacher",
        element: <FacultyTeachers />,
      },
    ],
  },
];
