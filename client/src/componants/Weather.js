import React from "react";

export default function Weather({cityTemp}) {
    console.log(cityTemp);
    return (<>
         {/* <div className="weather"> */}
            <div>{cityTemp.cityName}</div>
            <div>{cityTemp.Temperature.Metric.Value}</div>
            <div>{cityTemp.WeatherText}</div>
         {/* </div> */}
        </>
    );
}