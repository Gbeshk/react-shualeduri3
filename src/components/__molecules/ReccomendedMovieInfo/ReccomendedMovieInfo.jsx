import React from "react";
import Movie from "../../../assets/images/icon-category-movie.svg";
import Tv from "../../../assets/images/icon-category-tv.svg";
function TrendingMovieInfo({ movie }) {
  return (
    <>
      <div className="flex items-center gap-[8px] !mt-[8px] absolute left-[24px] top-[154px]">
        <p className="text-white font-[outfit] text-[15px] font-normal leading-none">
          {movie.year}
        </p>
        <div className="w-[3px] h-[3px] rounded-[50%] bg-white opacity-50"></div>
        <img src={movie.category === "Movie" ? Movie : Tv} alt="" />
        <p className="text-white font-[outfit] text-[15px] font-normal leading-none !ml-[-2px]">
          {movie.category}
        </p>
        <div className="w-[3px] h-[3px] rounded-[50%] bg-white opacity-50"></div>
        <p className="text-white font-[outfit] text-[15px] font-normal leading-none">
          {movie.rating}
        </p>
      </div>
      <h1 className="!mt-[5px] text-white font-outfit text-[24px] font-normal leading-none absolute left-[24px] top-[176px]">
        {movie.title}
      </h1>
    </>
  );
}
export default TrendingMovieInfo;
