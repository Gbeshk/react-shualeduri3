import React, { useState } from "react";
import Login from "../../__molecules/Login/Login";
import SignUp from "../../__molecules/SignUp/SignUp";
import Menu from "../../__molecules/Menu/Menu";
import Search from "../../__molecules/Search/Search";
import Trending from "../../__molecules/trending/Trending";
import Reccomended from "../../__molecules/Reccomended/Reccomended";
import Movies from "../../__molecules/movies/Movies";
import TvSeries from "../../__molecules/TvSeries/TvSeries";
function MovieSite() {
  const [loginVisible, setLoginVisible] = useState(true);
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [show, setShow] = useState("normal");
  return (
    <>
      {/* {loginVisible && (
        <Login
          setLoginVisible={setLoginVisible}
          setSignUpVisible={setSignUpVisible}
        />
      )}
      {signUpVisible && (
        <SignUp
          setLoginVisible={setLoginVisible}
          setSignUpVisible={setSignUpVisible}
        />
      )}
      {!loginVisible && !signUpVisible && ( */}
      <div className="flex">
        <Menu setShow={setShow} />
        <div>
          <Search />
          {show == "normal" && (
            <>
              <Trending />
              <Reccomended />
            </>
          )}
          {show == "movies" && <Movies />}
          {show == "TV Series" && <TvSeries />}
        </div>
      </div>
      {/* )} */}
    </>
  );
}
export default MovieSite;
