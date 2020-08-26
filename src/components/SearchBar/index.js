import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import search from "../../images/search-01.svg";

const SearchBar = () => {
  const [word, setWord] = useState("");

  return (
    <div className="searchBar">
      <input
        placeholder="Buscar"
        value={word}
        onChange={(event) => setWord(event.target.value)}
        type="text"
      />
      <Link to={`/categories/search/${word}`}>
        <button className="btn" type="button">
          {/* <img classname="icon" src={search} alt="search"></img> */}
          <span role="img" aria-label="search">
            🔍
          </span>
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
