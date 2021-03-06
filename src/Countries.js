import React, { useState, useEffect } from "react";
import "./Countries.css";
import { Link } from "react-router-dom";

export default function Countries() {
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          console.log(data);
          setCountries(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(true);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="countries">
        {countries.map((item) => (
          <div key={item.name} className="countrieBox" id={item.name}>
            <img
              src={item.flag}
              width={250}
              height={250}
              alt={`Flag of ${item.name}`}
            />
            <Link to={"/" + item.name}>
              <h1>{item.name}</h1>
            </Link>
            <p>Population: {item.population}</p>
            <p>Region: {item.region}</p>
            <p>Capital: {item.capital}</p>
          </div>
        ))}
      </div>
    );
  }
}
