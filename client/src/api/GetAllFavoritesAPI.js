export default async function getAllFavoritesAPI() {
    try{
    const url = `http://localhost:3030/api/city/favorites`;
    const response = await fetch(url);
    const data = await response.json();
    
    console.log("-----Array---------------data-------------------");
    console.log(data);
    return data;
    }
    catch(err){
        return false;
    }
}