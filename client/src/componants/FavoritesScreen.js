import React from "react";
import FavoritesList from "./FavoritesList";
import getAllFavoritesAPI from "../api/GetAllFavoritesAPI";
import deleteFavoriteAPI from "../api/DeleteFavoriteAPI";

export default function FavoritesScreen() {
//  const [favorites, setFavorites] = React.useState([]);

//     async function getAllFavorites() {
//       const response = await getAllFavoritesAPI();
//       console.log('getAllFavorites: ' + response);
//       setFavorites(response);
//   }
//   console.log('Favorites state: ' + favorites);

  //favorites.length > 0 && getAllFavorites();

    async function deleteFavorite(cityKey) {
        const response = await deleteFavoriteAPI(cityKey);
        console.log(response);
        //getAllFavorites();
    }
    return (<>
        <h1>Favorites</h1>
        {/* <button onClick={getAllFavorites}>Refresh</button> */}
        <div className="favorites-screen">
        
           <FavoritesList />
        </div>
        </>  );
}
//---------------------------

//   React.useEffect(() => {
//       getAllFavorites();
//   }
//   , []);
//   async function getAllFavorites() {
//       const response = await getAllFavoritesAPI();
//       console.log(response);
//       setFavorites(response);
//   }
//   async function deleteFavorite(cityKey) {
//       const response = await deleteFavoriteAPI(cityKey);
//       console.log(response);
//       getAllFavorites();
//   }
//   return (
//       <div>
//         <h1>Favorites 2</h1>
//         {favorites.length > 0 && (
//             <FavoritesList favorites={favorites} deleteFavorite={deleteFavorite} />
//           )}
//       </div>
//   );

// }

//-------------------

// Compare this snippet from client\src\componants\FavoritesList.js:
// import React from "react";
// export default function FavoritesList(favorites, deleteFavorite) {
//   return (
//     <div>
//       <h1>Favorites</h1>
//       <ul>
//         {favorites.map(favorite => (
//           <li key={favorite.Key}>
//             {favorite.LocalizedName}
//             <button onClick={() => deleteFavorite(favorite.Key)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
