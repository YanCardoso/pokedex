import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({search}) {
    const [state, setState] = useState();
  return (
    <div className="search-container">
        <input type="text" placeholder="Search for Pokémon...
" onChange={event => {setState(event.target.value)}}></input>
        <button type="button" onClick={() => {search(state)}}>
          <img src="/pokebutton.png" />
        </button>
    </div>
  );
}

export default SearchBar;
