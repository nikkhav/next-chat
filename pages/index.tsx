import type { NextPage } from "next";
import Link from "next/link";

const Login: NextPage = () => {
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
          />
          <input
            className={
              "border-2 border-gray-300 p-3 my-3 font-thin text-lg rounded-lg outline-none focus:border-blue-500"
            }
            type={"password"}
            placeholder={"Пароль"}
          />
          <button
            className={
              "bg-green-400 text-lg font-semibold text-white border-gray-300 p-2 mt-5 rounded-lg"
            }
            type={"submit"}
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
