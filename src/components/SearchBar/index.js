import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./index.css";
//import search from "../../images/search-01.svg";

const SearchBar = (props) => {
  const [word, setWord] = useState("");

  const handleSubmit = () => {
    props.history.push(`/categories/search/${word}`);
  }

  return (
    <div className="searchBar">
      <form onSubmit={()=>handleSubmit()}>
        <input
          placeholder="Buscar"
          value={word}
          onChange={(event) => setWord(event.target.value)}
          type="text"
          required
        />
        <button className="btn" type="submit">
          {/* <img classname="icon" src={search} alt="search"></img> */}
          <span role="img" aria-label="search">
            🔍
          </span>
        </button>
      </form>

    </div>
  );
};

export default withRouter(SearchBar);
