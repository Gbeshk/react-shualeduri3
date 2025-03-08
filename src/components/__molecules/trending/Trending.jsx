import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImageHover from "../ImgHover/ImgHover";
import empty from "../../../assets/images/empty.svg";
import filled from "../../../assets/images/filled.svg";

import TrendingMovieInfo from "../ReccomendedMovieInfo/ReccomendedMovieInfo";

function Trending({ data, favorites, setFavorites }) {
  function addToFav(movie) {
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
  }

  return (
    <>
      <h1 className="!ml-[36px] !mt-[35px] text-white font-[outfit] text-[32px] font-normal leading-none tracking-[-0.5px]">
        Trending
      </h1>
      <div
        style={{ width: "calc(100vw - 200px)", height: "auto" }}
        className="!ml-[36px] !mt-[25px]"
      >
        <Swiper
          spaceBetween={20}
          slidesPerView={2.5}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
        >
          {data.map(
            (movie) =>
              movie.isTrending && (
                <SwiperSlide key={movie.title}>
                  <div className="relative group w-[470px]">
                    <img
                      className="w-[470px] h-[230px] object-cover rounded-[8px] cursor-pointer"
                      src={movie.thumbnail.regular.large}
                      alt={movie.title}
                    />
                    <img
                      src={
                        favorites.some(
                          (favMovie) => favMovie.title === movie.title
                        )
                          ? filled
                          : empty
                      }
                      className="absolute left-[414px] top-[16px] cursor-pointer z-10"
                      alt="favorite"
                      onClick={() => addToFav(movie)}
                    />
                    <TrendingMovieInfo movie={movie} />
                    <ImageHover />
                  </div>
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
    </>
  );
}

export default Trending;
