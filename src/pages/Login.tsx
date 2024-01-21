import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redex/feature/auth/authApi";
import { useAppDispatch } from "../redex/hook";
import { setUser } from "../redex/feature/auth/authSlice";
import { varyfyToken } from "../utils/veryfyToken";
import { useNavigate } from "react-router-dom";
import { TUser } from "../types/authSlice.Type";
import { toast } from "sonner";
import PHInput from "../components/form/PHInput";
import PHFrom from "../components/form/PHFrom";

const Login = () => {
  const navagate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const defaultValues = {
    id: "A-0003",
    password: "admin123",
  };
  const onsubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loading...");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = varyfyToken(res.data.accessToken) as TUser;
      toast.success("Logged in", { id: toastId, duration: 3000 });
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      navagate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("somethink is worng !");
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <div
        style={{
          border: "2px solid white",
          padding: "100px",
          background: "linear-gradient(to right,#eacda3,#d6ae7b)",
          borderRadius: "5px",
        }}
      >
        <PHFrom onSubmit={onsubmit} defaultValues={defaultValues}>
          <PHInput type="text" name="id" label="ID:" />
          <PHInput type="text" name="password" label="Password:" />
          <Button htmlType="submit">Login</Button>
        </PHFrom>
      </div>
    </Row>
  );
};

export default Login;
