import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 w-full h-28 sm:h-36 mt-12 flex flex-col items-center justify-center sm:flex-row sm:justify-around sm:px-20">
      <div className="py-2.5 hidden sm:block sm:order-last">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mr-4">
          Login
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
          Sign Up
        </button>
      </div>

      <p className="text-white">&copy; 2023 event-addis</p>
    </div>
  );
};

export default Footer;
