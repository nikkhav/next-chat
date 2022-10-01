import type { NextPage } from "next";
import Link from "next/link";
import axios from "axios";
import React, { useState } from "react";
import { LoginForm } from "../types";
import { useRouter } from "next/router";
import { setUser } from "../store/slices/userSlice";
import { useAppDispatch } from "../store/hooks";

const Login: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [formState, setFormState] = useState<LoginForm>({
    username: "",
    password: "",
  });
  const loginHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response = await axios.post("/api/login", formState);
    if (response.status === 200) {
      dispatch(
        setUser({
          _id: response.data.data.user._id,
          username: response.data.data.user.username,
          firstName: response.data.data.user.firstName,
          lastName: response.data.data.user.lastName,
          loggedIn: true,
        })
      );
      await router.push(`/messages/${response.data.data.user._id}`);
    }
  };
  //from-blue-400 to-purple-500 from-[#DAE2F8] to-[#D6A4A4]
  return (
    <div
      className={
        "flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#DAE2F8] to-[#D7DDE8]"
      }
    >
      <div
        className={
          "flex flex-col p-14 mx-auto w-8/12 bg-gray-100 rounded-2xl justify-center form_animation"
        }
      >
        <h1 className={"text-4xl mb-4 text-center font-thin"}>
          Вход в Next-Chat
        </h1>
        <form className={"flex flex-col justify-center"}>
          <input
            className={
              "border-2 border-gray-300 p-3 my-3 font-thin text-lg rounded-lg outline-none focus:border-blue-500"
            }
            type={"text"}
            placeholder={"Имя пользователя"}
            value={formState.username}
            onChange={(e) =>
              setFormState({ ...formState, username: e.target.value })
            }
          />
          <input
            className={
              "border-2 border-gray-300 p-3 my-3 font-thin text-lg rounded-lg outline-none focus:border-blue-500"
            }
            type={"password"}
            placeholder={"Пароль"}
            value={formState.password}
            onChange={(e) =>
              setFormState({ ...formState, password: e.target.value })
            }
          />
          <button
            className={
              "bg-green-400 text-lg font-semibold text-white border-gray-300 p-2 mt-5 rounded-lg"
            }
            type={"submit"}
            onClick={loginHandler}
          >
            Войти
          </button>
        </form>
        <h2 className={"text-lg text-center mt-5 font-thin"}>Нет аккаунта? </h2>
        <Link href={"/register"}>
          <a className={"text-lg text-center mt-2 font-thin text-blue-500"}>
            Зарегистрироваться
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Login;
