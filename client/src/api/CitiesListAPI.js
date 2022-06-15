export default async function getCitiesListAPI(cityName) {
  try {
    const url = `http://localhost:3030/api/city/citiesList/${cityName}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    return false;
  }
}
