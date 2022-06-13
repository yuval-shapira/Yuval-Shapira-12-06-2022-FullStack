import React from "react";
import CitiesList from "./CitiesList.js";
import Weather from "./Weather.js";
//import fs from "fs/promises";

export default function MainScreen() {
  const [cityName, setCityName] = React.useState('');
  const [citiesList, setCitiesList] = React.useState(null);
  const [cityTemp, setCityTemp] = React.useState(null);

  function handleCityChange(e) {
    const value = e.target.value;
    setCityName(value);
  }
  function handleFormSubmit(e) {
    e.preventDefault();

    //Call to server to get cities data
    const getCities = [
      {
        Version: 1,
        Key: "213225",
        Type: "City",
        Rank: 30,
        LocalizedName: "Jerusalem",
        Country: {
          ID: "IL",
          LocalizedName: "Israel"
        },
        AdministrativeArea: {
          ID: "JM",
          LocalizedName: "Jerusalem"
        }
      },
      {
        Version: 1,
        Key: "221483",
        Type: "City",
        Rank: 75,
        LocalizedName: "Jerusalem",
        Country: {
          ID: "JM",
          LocalizedName: "Jamaica"
        },
        AdministrativeArea: {
          ID: "10",
          LocalizedName: "Westmoreland"
        }
      },
      {
        Version: 1,
        Key: "3496636",
        Type: "City",
        Rank: 85,
        LocalizedName: "Jerusalem",
        Country: {
          ID: "AU",
          LocalizedName: "Australia"
        },
        AdministrativeArea: {
          ID: "SA",
          LocalizedName: "South Australia"
        }
      }
    ];

    setCitiesList(getCities);
    //setCityName('');
  }
  function handleCityClick(cityKey, cityName) {
    //Call to server to get weather data
    const getCityTemp = {
        LocalObservationDateTime: "2022-06-13T23:19:00+03:00",
        EpochTime: 1655151540,
        WeatherText: "Clear",
        WeatherIcon: 33,
        HasPrecipitation: false,
        PrecipitationType: null,
        IsDayTime: false,
        Temperature: {
          Metric: {
            Value: 18.3,
            Unit: "C",
            UnitType: 17
          },
          Imperial: {
            Value: 65,
            Unit: "F",
            UnitType: 18
          }
        },
        MobileLink: "http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us",
        Link: "http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us"
      }
    getCityTemp.cityName = cityName;
    setCityTemp(getCityTemp);
  } 
  return (<>
      <h1>Main Screen</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="City Name" value={cityName} onChange={handleCityChange} />
        <button type="submit">Submit</button>
      </form>
      <div className="grid-container">
      <div className="weather">{cityTemp && <Weather cityTemp={cityTemp}/>}</div>
        {citiesList && <CitiesList citiesList={citiesList} handleCityClick={handleCityClick}/>}
      </div>
    </>);
}
