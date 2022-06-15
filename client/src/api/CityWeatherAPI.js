
export default async function getCityWeatherAPI(cityKey) {
    const dataTest = {
        cityName: "Jerusalem",
        cityKey: "JER",
        LocalObservationDateTime: "2022-06-13T15:33:00+03:00",
          EpochTime: 1655123580,
          WeatherText: "Mostly sunny",
          WeatherIcon: 2,
          HasPrecipitation: false,
          PrecipitationType: null,
          IsDayTime: true,
          Temperature: {
            Metric: {
              Value: 26.6,
              Unit: "C",
              UnitType: 17
            },
            Imperial: {
              Value: 80,
              Unit: "F",
              UnitType: 18
            }
          },
          MobileLink: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
          Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
        }
    return dataTest;
    // try{
    // const url = `http://localhost:3030/api/weather/${cityKey}`;
    // const response = await fetch(url);
    // let data = await response.json();
    // return data[0];
    // }
    // catch(err){
    //     return false;
    // }
}