import { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import { useAppSelector } from "../../store/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
let socket: any;

const Messages: NextPage = () => {
  const loggedIn = useAppSelector((state) => state.user.loggedIn);
  const router = useRouter();
  useEffect(() => {
    if (!loggedIn) {
      router.push("/");
    }
    socketInitializer();
  }, [loggedIn, router]);

  const [message, setMessage] = useState<string>("");
  //const [messages, setMessages] = useState<string[]>([]);
  const [messages, setMessages] = useState<string>("");

  const socketInitializer = async () => {
    await axios.get("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("update-message", (msg: string) => {
      setMessages(msg);
    });

    return null;
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" && message !== "") {
      socket.emit("message", message);
      setMessage("");
    }
  };
  // const testFetch = async () => {
  //   const res = await axios.get("/api/messages");
  //   const data = await res.data;
  //   console.log(data);
  // };
  // testFetch();
  return (
    <div>
      <div className={"flex flex-row justify-between"}>
        <div
          className={
            "flex flex-col flex-wrap w-4/12 justify-center ml-4 p-3 overflow-hidden overflow-y-scroll"
          }
        >
          <h1 className={"text-4xl text-center font-bold"}>Диалоги</h1>
          <p className={"text-xl"}>Lorem ipsum dolor sit amet</p>
          <p className={"text-xl"}>Lorem ipsum dolor sit amet</p>
          <p className={"text-xl"}>Lorem ipsum dolor sit amet</p>
          <p className={"text-xl"}>Lorem ipsum dolor sit amet</p>
          <p className={"text-xl"}>Lorem ipsum dolor sit amet</p>
          <p className={"text-xl"}>Lorem ipsum dolor sit amet</p>
          <p className={"text-xl"}>Lorem ipsum dolor sit amet</p>
        </div>
        <div
          className={
            "flex flex-col justify-between bg-gray-100 w-full h-screen"
          }
        >
          <div className={"flex flex-col p-4"}>
            <h1 className={"text-xl font-light text-left"}>
              Welcome to Next.js!
            </h1>
            <p className={"text-xl font-light text-right"}>
              Get started by editing pages/index.tsx
            </p>
            <p className={"text-xl font-light text-right"}>{messages}</p>
            <p className={`${messages.length > 0 ? "message" : ""}`}>
              {messages}
            </p>
          </div>
          <div className={"flex flex-row justify-around items-center bg-white"}>
            <input
              className={
                "border-2 border-gray-300 w-9/12 p-3 my-3 font-thin text-lg rounded-lg outline-none focus:border-blue-500"
              }
              value={message}
              placeholder={"Написать сообщение..."}
              type={"text"}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              onKeyDown={handleKeyPress}
            />
            <button
              onClick={() => {
                if (message !== "") {
                  socket.emit("message", message);
                  setMessage("");
                }
              }}
              className={
                "ml-4 px-4 py-2 w-2/12 h-1/2 bg-blue-500 rounded-2xl text-white text-center font-bold"
              }
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
