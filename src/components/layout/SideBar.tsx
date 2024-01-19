import { Layout, Menu } from "antd";
import { sidebarItemsGenater } from "../../utils/sideBargenater";
import { adminPaths } from "../../routes/admin.routes";
import { FacultyPaths } from "../../routes/faculty.routes";
import { StudentPaths } from "../../routes/student.routes";
const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACUlTY: "faculty",
  STUDENT: "student",
};

const SideBar = () => {
  const role = "student";

  let sideBarRole;

  switch (role) {
    case userRole.ADMIN:
      sideBarRole = sidebarItemsGenater(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACUlTY:
      sideBarRole = sidebarItemsGenater(FacultyPaths, userRole.FACUlTY);
      break;
    case userRole.STUDENT:
      sideBarRole = sidebarItemsGenater(StudentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider>
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        PH UNI
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarRole}
      />
    </Sider>
  );
};

export default SideBar;
