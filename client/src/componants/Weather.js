import React from "react";

export default function Weather({cityData, addToFavorites}) {
    console.log(cityData);
    return (<>
            <div>
                <div>{cityData.cityName}</div>
                <div>{cityData.Temperature.Metric.Value}</div>
                <div>{cityData.WeatherText}</div>
            </div>
            <button onClick={() => {addToFavorites(cityData)}}>Add to favorites</button>
        </>
    );
}