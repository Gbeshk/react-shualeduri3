import React, { useState } from "react";
import search from "../../../assets/images/icon-search.svg";

function Search({ setSearchQuery }) {
  const [query, setQuery] = useState("");

  function Search(e) {
    setQuery(e.target.value);
    setSearchQuery(e.target.value);
  }

  return (
    <div className="flex !mt-[32px] !ml-[36px]">
      <img src={search} className="w-[32px] h-[32px]" alt="Search Icon" />
      <input
        type="text"
        value={query}
        onChange={Search}
        placeholder="Search for movies or TV series"
        className="!ml-[24px] focus:outline-none w-[321px] h-[30px] text-white placeholder:white placeholder:opacity-50 font-[outfit] text-2xl font-normal"
      />
    </div>
  );
}

export default Search;
