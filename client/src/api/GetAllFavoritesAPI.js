export default async function getAllFavoritesAPI() {
    try{
    const url = `http://localhost:3030/api/favorites`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
    }
    catch(err){
        return false;
    }
}