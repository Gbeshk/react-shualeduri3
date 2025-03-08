import React, { useEffect, useState } from "react";
import Login from "../../__molecules/Login/Login";
import SignUp from "../../__molecules/SignUp/SignUp";
import Menu from "../../__molecules/Menu/Menu";
import Search from "../../__molecules/Search/Search";
import Trending from "../../__molecules/trending/Trending";
import Reccomended from "../../__molecules/Reccomended/Reccomended";
import Movies from "../../__molecules/movies/Movies";
import TvSeries from "../../__molecules/TvSeries/TvSeries";
import Favorites from "../../__molecules/Favorites/Favorites";
import data from "../../../data.json";
function MovieSite() {
  const [loginVisible, setLoginVisible] = useState(true);
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [show, setShow] = useState("normal");
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <>
      {loginVisible && (
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
      {!loginVisible && !signUpVisible && (
        <div className="flex">
          <Menu setShow={setShow} />
          <div>
            <Search setSearchQuery={setSearchQuery} />
            {show === "normal" && (
              <>
                {searchQuery == "" && (
                  <Trending
                    data={data}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    filteredData={filteredData}
                    searchQuery={searchQuery}
                  />
                )}
                <Reccomended
                  favorites={favorites}
                  setFavorites={setFavorites}
                  filteredData={filteredData}
                  searchQuery={searchQuery}
                />
              </>
            )}
            {show === "movies" && (
              <Movies
                favorites={favorites}
                setFavorites={setFavorites}
                filteredData={filteredData}
                searchQuery={searchQuery}
              />
            )}
            {show === "favorites" && (
              <Favorites
                favorites={favorites}
                setFavorites={setFavorites}
                filteredData={filteredData}
                searchQuery={searchQuery}
              />
            )}
            {show === "TV Series" && (
              <TvSeries
                favorites={favorites}
                setFavorites={setFavorites}
                filteredData={filteredData}
                searchQuery={searchQuery}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default MovieSite;
