import React, { useState, useEffect } from "react";
import MainImg from "../images/main.png";

function Main() {
  const [dots, setDots] = useState("...");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots === "..." ? "" : prevDots + "."));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row w-full justify-center items-center">
      <div className="w-1/2 flex flex-col gap-5">
        <h3 className="text-8xl font-bold">People-Powered Networks</h3>
        <p className="text-4xl text-[#e07dc5] font-semibold">
          Start a Wireless Revolution{dots}
        </p>
        <p className="w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          rerum, voluptatum ad delectus vero aperiam corporis ipsum animi nisi
          impedit repellendus totam excepturi distinctio earum dignissimos
          quisquam sint necessitatibus odio!
        </p>
      </div>
      <img className="w-[37%]" src={MainImg} alt="" />
    </div>
  );
}

export default Main;
