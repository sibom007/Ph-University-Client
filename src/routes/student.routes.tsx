import StudentDashboard from "../pages/student/StudentDashboard";
import StudentsMycourse from "../pages/student/StudentsMycourse";

export const StudentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "My course",
        path: "Mycourse",
        element: <StudentsMycourse />,
      },
    ],
  },
];
