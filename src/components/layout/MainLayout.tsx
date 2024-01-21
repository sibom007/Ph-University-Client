import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useAppDispatch } from "../../redex/hook";
import { logout } from "../../redex/feature/auth/authSlice";
const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handlesubmit = () => {
    dispatch(logout());
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <SideBar />
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Button onClick={handlesubmit}>Logout</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
