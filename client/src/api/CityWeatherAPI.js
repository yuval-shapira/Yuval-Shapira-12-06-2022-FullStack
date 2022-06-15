export default async function getCityWeatherAPI(cityKey) {
  try {
    const url = `http://localhost:3030/api/weather/${cityKey}`;
    const response = await fetch(url);
    let data = await response.json();
    return data[0];
  } catch (err) {
    return false;
  }
}
