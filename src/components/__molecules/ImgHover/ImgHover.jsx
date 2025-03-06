import React from "react";
import playicon from "../../../assets/images/icon-play.svg";

function ImageHover() {
  return (
    <>
      <div className="opacity-0 cursor-pointer transition-opacity duration-1500 group-hover:opacity-100 w-full h-full flex absolute items-center justify-center left-0 top-0">
        <div className="w-[117px] h-[48px] flex-shrink-0 rounded-[28.5px] opacity-25 bg-white"></div>
        <div className="absolute flex items-center justify-center !ml-[-10px] gap-[16px]">
          <img src={playicon} alt="" />
          <p className="text-white font-[outfit] text-[18px] font-normal leading-none">
            play
          </p>
        </div>
      </div>
    </>
  );
}
export default ImageHover;
