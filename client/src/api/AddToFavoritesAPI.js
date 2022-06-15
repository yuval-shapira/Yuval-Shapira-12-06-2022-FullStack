export default async function addToFavoritesAPI(cityData) {
    try{
        const url = `http://localhost:3030/api/city/favorites`;
        const dataToSave = {
        cityKey: cityData.Key,
        LocalizedName: cityData.LocalizedName
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