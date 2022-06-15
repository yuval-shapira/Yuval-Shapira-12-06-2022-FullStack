import './App.css';
import React, {useState} from 'react';
import MainScreen from './componants/MainScreen.js';
import FavoritesScreen from './componants/FavoritesScreen.js';


function App() {
  const [toggleScreen, setToggleScreen] = useState("Main Screen");


  return (
    <>
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>
        <button className="toggle" onClick={() => setToggleScreen(toggleScreen === "Main Screen"? "Favorites Screen" : "Main Screen" )}>
          {toggleScreen === "Main Screen"? "Favorites Screen" : "Main Screen" }
        </button>
        {toggleScreen === "Main Screen" && <MainScreen></MainScreen>} 
        {toggleScreen === "Favorites Screen" && <FavoritesScreen></FavoritesScreen>} 
      </main>
    </>
  );
}

export default App;
