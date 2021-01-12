import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Countrie.css";
export default function Countrie() {
  let { pais } = useParams();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${pais}`)
      .then((data) => data.json())
      .then((response) => {
        setCountry(response);
        console.log(response);
      });
  }, []);
  return (
    <div className="countrie">
      {country.map((item, index) => (
        <>
          <a href="/">
            <button className="backButton">&#x2190;Go Back</button>
          </a>
          <div class="countryInfo">
            <div className="Left">
              <img
                src={item.flag}
                width={500}
                height={500}
                alt={"Bandeira do país " + item.name}
              />
            </div>
            <div className="Right">
              <h1>{pais}</h1>

              <div id="wrapper">
                <div className="innerLeft">
                  <p key={index}>
                    Native Name:{" "}
                    <span className="InfoAPI">{item.nativeName}</span>
                  </p>
                  <p key={index}>Population: {item.population}</p>
                  <p key={index}>Region: {item.region}</p>
                  <p key={index}>Sub Region: {item.subregion}</p>
                  <p key={index}>Capital: {item.capital}</p>
                </div>
                <div className="innerRight">
                  <p key={index}>
                    Top Level Domain: {item.topLevelDomain.map((obj) => obj)}
                  </p>
                  <p key={index}>
                    Currencies:{item.currencies.map((obj) => obj.name + ", ")}
                  </p>
                  <p key={index}>
                    Languages: {item.languages.map((obj) => obj.name + ", ")}
                  </p>
                </div>
              </div>
              <div id="borders" key={index}>
                Border Countries:{" "}
                {item.borders.map((borderCountry) => (
                  <a href={"/" + borderCountry}>
                    <button>{borderCountry}</button>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
