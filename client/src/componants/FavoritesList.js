import { useState, useEffect } from "react";
import getAllFavoritesAPI from "../api/GetAllFavoritesAPI";
import deleteFavoriteAPI from "../api/DeleteFavoriteAPI";

export default function FavList() {
  const [favorites, setFavorites] = useState(["hello", "world"]);
  useEffect(() => {
    getAllFavorites();
  }, []);

  async function getAllFavorites() {
    const response = await getAllFavoritesAPI();
    setFavorites(response);
  }
  async function deleteFavorite(cityKey) {
    await deleteFavoriteAPI(cityKey);
    await getAllFavorites();
  }
  return (
    <ul>
      {favorites.map((favorite) => (
        <li className="favorite" key={favorite.cityKey}>
          <button onClick={() => deleteFavorite(favorite.cityKey)}>
            Delete
          </button>
          <div>{favorite.LocalizedName}</div>
        </li>
      ))}
    </ul>
  );
}
