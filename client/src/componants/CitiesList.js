import React from "react";

export default function CitiesList({citiesList, handleCityClick}) {

 return (<ul className="list-of-cities">
        {citiesList.map((city, index) => (
       <li key={index} className="city" onClick={() => handleCityClick(city.key, city.LocalizedName)}>{`${city.LocalizedName}, ${city.Country.LocalizedName}`}</li>
        ))}
    </ul>
  );
}
