import React, { useState } from "react";

const Input = () => {
  return (
    <div className="flex w-1/2  ">
      <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-10">
        input
      </label>
      <input
        type="text"
        id="small-input"
        className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      />
    </div>
  );
};

function Home() {
  const [inputList, setInputList] = useState([]);

  const handleClick = () => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleClick}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          ADD
        </button>
      </div>
      <div className="flex flex-col w-full gap-4">{inputList}</div>
    </>
  );
}

export default Home;
