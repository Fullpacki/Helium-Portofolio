import React from "react";
import InvestorsOne from "../images/investlogo2blue.png";
import InvestorsTwo from "../images/investlogo3blue.png";
import InvestorsThree from "../images/investlogo4blue.png";

function Footer() {
  return (
    <div className="flex flex-row px-5 py-2 bg-black/70 text-white fixed bottom-0 w-full left-0">
      <div className="w-1/3 flex flex-col gap-3">
        <h4 className="text-xl font-bold">Core Technologies</h4>
        <div className="flex flex-col w-[40%] px-5 justify-center gap-3">
          <button className="w-full p-2 rounded-lg bg-[#e07dc5] hover:scale-125 ease-in-out duration-500">
            Tokens
          </button>
          <button className="w-full p-2 rounded-lg bg-[#e07dc5] hover:scale-125 ease-in-out duration-500">
            Proof of Coverage
          </button>
          <button className="w-full p-2 rounded-lg bg-[#e07dc5] hover:scale-125 ease-in-out duration-500">
            LongFi
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-8">
        <h4 className="text-xl font-bold">Our Investors</h4>
        <div className="flex flex-row items-center justify-around">
          <img
            className="w-[8em] h-[4em] animate-pulse"
            src={InvestorsOne}
            alt=""
          />
          <img
            className="w-[8em] h-[4em] animate-pulse"
            src={InvestorsTwo}
            alt=""
          />
          <img
            className="w-[8em] h-[4em] animate-pulse"
            src={InvestorsThree}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
