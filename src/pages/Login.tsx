import { Button } from "antd";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redex/feature/auth/authApi";
import { useAppDispatch } from "../redex/hook";
import { setUser } from "../redex/feature/auth/authSlice";
import { varyfyToken } from "../utils/veryfyToken";
import { useNavigate } from "react-router-dom";
import { TUser } from "../types/authSlice.Type";
import { toast } from "sonner";

const Login = () => {
  const navagate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0003",
      password: "admin123",
    },
  });
  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();

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
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
