export default async function addToFavoritesAPI(cityData) {
    try{
        const url = `http://localhost:3030/api/favorites`;
        const dataToSave = {
        cityKey: cityData.Key,
        LocalizedName: cityData.LocalizedName,
     //   Temperature: cityData.Temperature.Metric.Value,
     //   WeatherText: cityData.WeatherText
    }
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSave)
            });
    const data = await response.json();
    return data;
    }
    catch(err){
        return false;
    }
}