import React from "react";
import FavoritesList from "./FavoritesList";

export default function FavoritesScreen() {
  return (
    <>
      <h1>Favorites</h1>
      <div className="favorites-screen">
        <FavoritesList />
      </div>
    </>
  );
}
