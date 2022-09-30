import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { RegisterForm } from "../types";
import axios from "axios";
import { useRouter } from "next/router";

const Register: NextPage = () => {
  const router = useRouter();
  const [formState, setFormState] = useState<RegisterForm>({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const registerHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response = await axios.post("/api/register", formState);
    if (response.status === 200) {
      await router.push("/login");
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
          Регистрация в Next-Chat
        </h1>
        <form className={"flex flex-col justify-center"}>
          <input
            onChange={(e) =>
              setFormState({ ...formState, username: e.target.value })
            }
            className={
              "border-2 border-gray-300 p-3 my-3 font-thin text-lg rounded-lg outline-none focus:border-blue-500"
            }
            type={"text"}
            placeholder={"Имя пользователя"}
            value={formState.username}
          />
          <input
            onChange={(e) =>
              setFormState({ ...formState, password: e.target.value })
            }
            className={
              "border-2 border-gray-300 font-thin p-3 my-3 rounded-lg outline-none focus:border-blue-500"
            }
            type={"password"}
            placeholder={"Пароль"}
            value={formState.password}
          />
          <input
            onChange={(e) =>
              setFormState({ ...formState, firstName: e.target.value })
            }
            className={
              "border-2 border-gray-300 p-3 my-3 font-thin text-lg rounded-lg outline-none focus:border-blue-500"
            }
            type={"name"}
            placeholder={"Ваше имя"}
            value={formState.firstName}
          />
          <input
            onChange={(e) =>
              setFormState({ ...formState, lastName: e.target.value })
            }
            className={
              "border-2 border-gray-300 p-3 my-3 font-thin text-lg rounded-lg outline-none focus:border-blue-500"
            }
            type={"surname"}
            placeholder={"Ваша фамилия"}
            value={formState.lastName}
          />
          <button
            onClick={registerHandler}
            className={
              "bg-green-400 text-lg font-semibold text-white border-gray-300 p-2 mt-5 rounded-lg"
            }
            type={"submit"}
          >
            Зарегистрироваться
          </button>
        </form>
        <h2 className={"text-lg text-center mt-5 font-thin"}>
          Уже есть аккаунт?{" "}
        </h2>
        <Link href={"/"}>
          <a className={"text-lg text-center mt-2 font-thin text-blue-500"}>
            Войти в свой аккаунт
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Register;
