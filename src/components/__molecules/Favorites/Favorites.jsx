import React, { useState, useEffect } from "react";
import MovieInfo from "../MovieInfo/MovieInfo";
import ImageHover from "../ImgHover/ImgHover";
import filled from "../../../assets/images/filled.svg";

function Favorites({ favorites, setFavorites, searchQuery }) {
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

  const [filteredMovies, setFilteredMovies] = useState(favorites);

  useEffect(() => {
    const filtered = favorites.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [favorites, searchQuery]);

  const tvSeriesFavorites = filteredMovies.filter(
    (movie) => movie.category === "TV Series"
  );
  const moviesFavorites = filteredMovies.filter(
    (movie) => movie.category === "Movie"
  );

  return (
    <>
      <h1 className="!ml-[36px] !mt-[35px] text-white font-[outfit] text-[32px] font-normal leading-none tracking-[-0.5px]">
        {searchQuery == ""
          ? ""
          : `Found ${filteredMovies.length} results for '${searchQuery}'`}
      </h1>
      {moviesFavorites.length > 0 && (
        <>
          <h1 className="!ml-[36px] !mt-[35px] text-white font-[outfit] text-[32px] font-normal leading-none tracking-[-0.5px]">
            Bookmarked Movies
          </h1>
          <div className="!ml-[36px] flex flex-wrap gap-[40px] !mt-[32px]">
            {moviesFavorites.map((movie, key) => (
              <div key={key}>
                <div className="relative group">
                  <img
                    className="w-[280px] h-[174px] object-fill rounded-[8px] cursor-pointer"
                    src={movie.thumbnail.regular.medium}
                    alt={movie.title}
                  />
                  <ImageHover />
                  <img
                    src={filled}
                    className="absolute left-[232px] top-[16px] cursor-pointer"
                    alt=""
                    onClick={() => addToFav(movie)}
                  />
                </div>
                <MovieInfo movie={movie} />
              </div>
            ))}
          </div>
        </>
      )}
      {tvSeriesFavorites.length > 0 && (
        <>
          <h1 className="!ml-[36px] !mt-[35px] text-white font-[outfit] text-[32px] font-normal leading-none tracking-[-0.5px]">
            Bookmarked TV Series
          </h1>
          <div className="!ml-[36px] flex flex-wrap gap-[40px] !mt-[32px]">
            {tvSeriesFavorites.map((movie, key) => (
              <div key={key}>
                <div className="relative group">
                  <img
                    className="w-[280px] h-[174px] object-fill rounded-[8px] cursor-pointer"
                    src={movie.thumbnail.regular.medium}
                    alt={movie.title}
                  />
                  <ImageHover />
                  <img
                    src={filled}
                    className="absolute left-[232px] top-[16px] cursor-pointer"
                    alt=""
                    onClick={() => addToFav(movie)}
                  />
                </div>
                <MovieInfo movie={movie} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Favorites;
