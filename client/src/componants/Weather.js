import React from "react";

export default function Weather({ cityData, addToFavorites }) {
  return (
    <>
      <div>
        <div>{cityData.LocalizedName}</div>
        <div>{cityData.Temperature.Metric.Value}</div>
        <div>{cityData.WeatherText}</div>
      </div>
      <button
        onClick={() => {
          addToFavorites(cityData);
        }}
      >
        Add to favorites
      </button>
    </>
  );
}
