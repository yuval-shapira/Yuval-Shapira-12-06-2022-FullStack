import React from "react";
import getAllFavoritesAPI from "../api/GetAllFavoritesAPI";
import deleteFavoriteAPI from "../api/DeleteFavoriteAPI";

export default function FavoritesScreen() {
  const favorites = getAllFavoritesAPI();
  return (
      <div>
        <h1>Favorites</h1>
        {favorites && 
          <ul>
            {favorites.map(city => <li> <div>{city.LocalizedName}</div><button onClick={deleteFavoriteAPI(city.cityKey)}>Delete</button></li>)}
          </ul>
        }
        {/* go to server --> DB and present all favorites cities */}
      </div>
    );
  }
