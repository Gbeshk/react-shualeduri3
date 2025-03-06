import React from "react";
import data from "../../../data.json";
import MovieInfo from "../MovieInfo/MovieInfo";
import ImageHover from "../ImgHover/ImgHover";
import empty from "../../../assets/images/empty.svg";

function Movies() {
  return (
    <>
      <h1 className="!ml-[36px] !mt-[35px] text-white font-[outfit] text-[32px] font-normal leading-none tracking-[-0.5px]">
        Movies
      </h1>
      <div className="!ml-[36px] flex flex-wrap gap-[40px] !mt-[32px]">
        {data.map((movie, key) => {
          return (
            movie.category === "Movie" && (
              <div key={key}>
                <div className="relative group">
                  <img
                    className="w-[280px] h-[174px] object-fill rounded-[8px] cursor-pointer"
                    src={movie.thumbnail.regular.medium}
                    alt=""
                  />
                  <ImageHover />
                  <img
                    src={empty}
                    className="absolute left-[232px] top-[16px]"
                    alt=""
                  />
                </div>
                <MovieInfo movie={movie} />
              </div>
            )
          );
        })}
      </div>
    </>
  );
}

export default Movies;
