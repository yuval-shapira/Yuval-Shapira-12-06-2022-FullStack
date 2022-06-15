import React from "react";
import CitiesList from "./CitiesList.js";
import Weather from "./Weather.js";
import addToFavoritesAPI from "../api/AddToFavoritesAPI.js";
import getCitiesListAPI from "../api/CitiesListAPI.js";
import getCityWeatherAPI from "../api/CityWeatherAPI.js";

export default function MainScreen() {
  const [citySearch, setCitySearch] = React.useState("");
  const [citiesListAcc, setCitiesListAcc] = React.useState(null);
  const [cityData, setCityData] = React.useState(null);

  function handleCityChange(e) {
    const value = e.target.value;
    setCitySearch(value);
  }
  async function handleFormSubmit(e) {
    e.preventDefault();
    if (e.target.value !== "") {
      const cities = await getCitiesListAPI(citySearch);
      cities ? setCitiesListAcc(cities) : window.alert("No city found");
    }
  }

  async function handleCityClick(cityKey, cityName) {
    const cityDetails = await getCityWeatherAPI(cityKey);
    if (cityDetails) {
      cityDetails.LocalizedName = cityName;
      cityDetails.Key = cityKey;
      setCityData(cityDetails);
    } else {
      window.alert("No city found");
    }
  }
  async function addToFavorites(cityData) {
    await addToFavoritesAPI(cityData);
    window.alert("City added to favorites");
  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="City Name"
          value={citySearch}
          onChange={handleCityChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="grid-container">
        <div className="weather">
          {cityData && (
            <Weather cityData={cityData} addToFavorites={addToFavorites} />
          )}
        </div>
        {citiesListAcc && (
          <CitiesList
            citiesListAcc={citiesListAcc}
            handleCityClick={handleCityClick}
          />
        )}
      </div>
    </>
  );
}
