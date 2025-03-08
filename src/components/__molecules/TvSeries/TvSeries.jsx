import React, { useEffect, useState } from "react";
import MovieInfo from "../MovieInfo/MovieInfo";
import ImageHover from "../ImgHover/ImgHover";
import empty from "../../../assets/images/empty.svg";
import filled from "../../../assets/images/filled.svg";

function TvSeries({ favorites, setFavorites, filteredData, searchQuery }) {
  const addToFav = (movie) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(
        (favMovie) => favMovie.title === movie.title
      );
      if (isAlreadyFavorite) {
        return prevFavorites.filter(
          (favMovie) => favMovie.title !== movie.title
        );
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  const [x, setX] = useState(0);

  useEffect(() => {
    const filteredMovies = filteredData.filter(
      (movie) =>
        movie.category === "TV Series" &&
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setX(filteredMovies.length);
  }, [filteredData, searchQuery]);

  return (
    <>
      <h1 className="!ml-[36px] !mt-[35px] text-white font-[outfit] text-[32px] font-normal leading-none tracking-[-0.5px]">
        {filteredData.length === 29
          ? "TV Series"
          : `Found ${x} results for '${searchQuery}'`}
      </h1>
      <div className="!ml-[36px] flex flex-wrap gap-[40px] !mt-[32px]">
        {filteredData
          .filter(
            (movie) =>
              movie.category === "TV Series" &&
              movie.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((movie, key) => {
            const isFilled = favorites.some(
              (favMovie) => favMovie.title === movie.title
            );

            return (
              <div key={key}>
                <div className="relative group">
                  <img
                    className="w-[280px] h-[174px] object-fill rounded-[8px] cursor-pointer"
                    src={movie.thumbnail.regular.medium}
                    alt={movie.title}
                  />
                  <ImageHover />
                  <img
                    src={isFilled ? filled : empty}
                    className="absolute left-[232px] top-[16px] cursor-pointer"
                    alt=""
                    onClick={() => addToFav(movie)}
                  />
                </div>
                <MovieInfo movie={movie} />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default TvSeries;
