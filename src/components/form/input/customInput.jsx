import React from "react";

const CustomInput = ({ inputChangeHandler, currentData, Title, Id, Type }) => {
  return (
    <>
      <label htmlFor={Id} className="block text-sm font-medium text-gray-700">
        {Title}
      </label>
      <input
        type={Type}
        name={Id}
        id={Id}
        autoComplete={Id}
        min={0}
        className="mt-1 block w-full bg-slate-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  py-1 px-2 sm:text-sm"
        onChange={(e) => inputChangeHandler(e, Id)}
        value={currentData[Id]}
      />
    </>
  );
};

export default CustomInput;
