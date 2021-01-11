import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <div className="Search">
      <input type="text" />
      <form action="searchContinent">
        <label class="src-only" for="continents">
          Choose a continent to filter:
        </label>
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
