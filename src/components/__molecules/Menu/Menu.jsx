import React, { useState } from "react";
import Movie from "../../../assets/images/Movie.png";
import avatar from "../../../assets/images/image-avatar.png";
import HomeIcon from "../../__atoms/HomeIcon/HomeIcon";
import TvSeriesIcon from "../../__atoms/TvSeriesIcon/TvSeriesIcon";
import MoviesIcon from "../../__atoms/MoviesIcon/MoviesIcon";
import FavIcon from "../../__atoms/FavIcon/FavIcon";
function Menu({ setShow }) {
  const [whiteicon, setWhiteIcon] = useState("home");
  return (
    <>
      <div
        className="mmd:w-[96px] mmd:h-[960px] px-[24px] mmd:justify-baseline justify-between flex mmd:flex-col flex-row items-center flex-shrink-0 rounded-[20px] bg-[#161D2F] 
               max-w-[720px] h-[50px]"
      >
        <img src={Movie} alt="" className="w-[35px] h-[26px] mmd:!mt-[36px] " />

        <div className="mmd:gap-[40px] gap-[30px] flex mmd:flex-col flex-row mmd:!mt-[75px]">
          <HomeIcon
            setShow={setShow}
            whiteicon={whiteicon}
            setWhiteIcon={setWhiteIcon}
          />
          <MoviesIcon
            setShow={setShow}
            whiteicon={whiteicon}
            setWhiteIcon={setWhiteIcon}
          />
          <TvSeriesIcon
            setShow={setShow}
            whiteicon={whiteicon}
            setWhiteIcon={setWhiteIcon}
          />
          <FavIcon
            setShow={setShow}
            whiteicon={whiteicon}
            setWhiteIcon={setWhiteIcon}
          />
        </div>
        <img
          src={avatar}
          className="w-[40px] h-[40px] mmd:!mb-[24px] mmd:!mt-[552px]"
          alt=""
        />
      </div>
    </>
  );
}
export default Menu;
