import React from "react";

export default function CitiesList({ citiesListAcc, handleCityClick }) {
  return (
    <ul className="list-of-cities">
      {citiesListAcc.map((city, index) => (
        <li
          key={index}
          className="city"
          onClick={() => handleCityClick(city.Key, city.LocalizedName)}
        >{`${city.LocalizedName}, ${city.Country.LocalizedName}`}</li>
      ))}
    </ul>
  );
}
