import React from "react";
import CitiesList from "./CitiesList.js";
import Weather from "./Weather.js";
import addToFavoritesAPI from "../api/AddToFavoritesAPI.js";
import getCitiesListAPI from "../api/CitiesListAPI.js";
import getCityDataAPI from "../api/CityDataAPI.js";

export default function MainScreen() {
  const [citySearch, setCitySearch] = React.useState('');
  const [citiesListAcc, setCitiesListAcc] = React.useState(null);
  const [cityData, setCityData] = React.useState(null);

  function handleCityChange(e) {
    const value = e.target.value;
    setCitySearch(value);
  }
  async function handleFormSubmit(e) {
    e.preventDefault();
    const cities = await getCitiesListAPI(citySearch);
    (cities) ? setCitiesListAcc(cities) : console.log("No cities found");
  }

  async function handleCityClick(cityKey, cityName) {
    //Call to server to get weather data
    const cityDetails = await getCityDataAPI(cityKey);
    if(cityDetails) {
      cityDetails.LocalizedName = cityName;
      cityDetails.Key = cityKey;
      setCityData(cityDetails)
    }else{
      console.log("No city found");
    }
  }
  async function addToFavorites(cityData) {
    const response = await addToFavoritesAPI(cityData);
    console.log(response);
  }
  return (<>
      <h1>Main Screen</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="City Name" value={citySearch} onChange={handleCityChange} />
        <button type="submit">Submit</button>
      </form>
      <div className="grid-container">
        <div className="weather">{cityData && <Weather cityData={cityData} addToFavorites={addToFavorites}/>}</div>
        {citiesListAcc && <CitiesList citiesListAcc={citiesListAcc} handleCityClick={handleCityClick}/>}
      </div>
    </>);
}
