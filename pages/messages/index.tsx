import Header from "../../layout/Header";
import axios from "axios";

const Messages = () => {
  // const testFetch = async () => {
  //   const res = await axios.get("/api/messages");
  //   const data = await res.data;
  //   console.log(data);
  // };
  // testFetch();
  return (
    <div>
      <Header />
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
        <div className={"flex flex-col bg-gray-100 p-4 w-full"}>
          <h1 className={"text-xl font-light text-left"}>
            Welcome to Next.js!
          </h1>
          <p className={"text-xl font-light text-right"}>
            Get started by editing pages/index.tsx
          </p>
          <p className={"text-xl font-light text-left"}>Привет</p>
          <p className={"text-xl font-light text-right"}>Привет, как дела?</p>
        </div>
      </div>
    </div>
  );
};

export default Messages;
