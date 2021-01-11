import React from "react";
import "./Search.css";

export default function Search() {
  function filterContinent() {
    //pass to App.js filter
  }

  return (
    <div className="Search">
      <input type="text" placeholder="Search for a country..." />
      <form aria-label="Choose a continent to filter:">
        <select name="continents" id="continents">
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
}
