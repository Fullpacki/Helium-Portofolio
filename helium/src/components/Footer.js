import React from "react";
import InvestorsOne from "../images/investlogo2blue.png";
import InvestorsTwo from "../images/investlogo3blue.png";
import InvestorsThree from "../images/investlogo4blue.png";

function Footer() {
  return (
    <div className="flex flex-row p-5 bg-black/70 text-white absolute bottom-0 w-full left-0 items-center">
      <div className="w-2/3 flex flex-col gap-5">
        {/* <h4 className="text-xl font-bold">Core Technologies</h4> */}
        <div className="flex flex-row w-3/4 px-5 justify-center gap-5">
          <button className="w-full p-2 rounded-lg bg-[#e07dc5] hover:scale-110 ease-in-out duration-500">
            Tokens
          </button>
          <button className="w-full p-2 rounded-lg bg-[#e07dc5] hover:scale-110 ease-in-out duration-500">
            Proof of Coverage
          </button>
          <button className="w-full p-2 rounded-lg bg-[#e07dc5] hover:scale-110 ease-in-out duration-500">
            LongFi
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        {/* <h4 className="text-xl font-bold">Our Investors</h4> */}
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
