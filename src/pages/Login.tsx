import { Button } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redex/feature/auth/authApi";
import { useAppDispatch } from "../redex/hook";
import { setUser } from "../redex/feature/auth/authSlice";
import { varyfyToken } from "../utils/veryfyToken";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0003",
      password: "admin123",
    },
  });
  const dispatch = useAppDispatch();

  const [login, { data, error }] = useLoginMutation();

  console.log("data =>", data);
  console.log("error =>", error);

  const onsubmit = async (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();
    const user = varyfyToken(res.data.accessToken);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
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
