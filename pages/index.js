import React, { useState } from "react";
import LoginComponet from "../components/LoginComponet";

function Home() {
  const [selected, setSelected] = useState(" ");
  const [toggle, settoggle] = useState(false);

  return (
    <>
      <div
        className={`${
          toggle ? "hidden" : " max-w-screen-xl mx-auto mt-10 px-2 py-2 "
        }`}
      >
        <button
          onClick={() => {
            setSelected("Login");
            settoggle(!toggle);
          }}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Login
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Sign up
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Contact
        </button>
      </div>

      {selected == "Login" && <LoginComponet />}
    </>
  );
}

export default Home;
