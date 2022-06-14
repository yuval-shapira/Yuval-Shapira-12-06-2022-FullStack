
export default async function getCityDataAPI(cityKey) {
    try{
    const url = `http://localhost:3030/api/city/${cityKey}`;
    console.log(url);
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data[0];
    }
    catch(err){
        return false;
    }
}