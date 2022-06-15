import React from "react";
import getAllFavoritesAPI from "../api/GetAllFavoritesAPI";
import deleteFavoriteAPI from "../api/DeleteFavoriteAPI";

export default async function FavoritesList() {
  async function deleteFavorite(cityKey) {
    const response = await deleteFavoriteAPI(cityKey);
    console.log(response);
    //getAllFavorites();
  }
  const favorites = await getAllFavoritesAPI();
  console.log("-----Array-------getAllFavoritesAPI--------------");
  console.log(favorites);
  //  setFavorites(response);
  //}
  return (
    <ul>
      {favorites.map((favorite) => (
        <li key={favorite.cityKey}>
          {favorite.LocalizedName}
          <button onClick={() => deleteFavorite(favorite.Key)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
