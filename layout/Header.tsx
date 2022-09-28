import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className={"flex flex-row p-4 bg-gray-200 rounded"}>
      <h1 className={"text-2xl mx-5"}>Next Chat</h1>
      <Link href={"/"}>
        <a className={"text-2xl font-light mx-5"}>Home</a>
      </Link>
    </header>
  );
};

export default Header;
