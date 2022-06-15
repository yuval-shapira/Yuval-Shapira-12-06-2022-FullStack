export default async function deleteFavoriteAPI(cityKey) {
    try{
    const url = `http://localhost:3030/api/city/favorites/${cityKey}`;
    const response = await fetch(url, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
            });
    const data = await response.json();
    return data;
    }
    catch(err){
        return false;
    }
}
