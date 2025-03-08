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
      <div className="w-[96px] h-[960px] flex flex-col items-center flex-shrink-0 rounded-[20px] bg-[#161D2F]">
        <img src={Movie} alt="" className="w-[35px] h-[26px] !mt-[36px] " />

        <div className="gap-[40px] flex flex-col !mt-[75px]">
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
        <img src={avatar} className="w-[40px] h-[40px] !mt-[552px]" alt="" />
      </div>
    </>
  );
}
export default Menu;
