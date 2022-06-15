import weather_model from "./weather.model.mjs";
import express from "express";
import fetch from "node-fetch";

const { API_KEY, GET_WEATHER_API } = process.env;
const router = express.Router();

router.get("/:cityKey", async (req, res) => {
  const exist = await weather_model
    .findOne({ cityKey: req.params.cityKey })
    .exec();
  const currentEpochTime = Math.floor(new Date() / 1000);
  const timeToLive = 60 * 60;

  if (exist && currentEpochTime - exist.epochTime < timeToLive) {
    res.status(200).send(exist);
  } else {
    const api = `${GET_WEATHER_API}${req.params.cityKey}?apikey=${API_KEY}`;
    try {
      const response = await fetch(api);
      const data = await response.json();
      if (exist) {
        await weather_model
          .updateOne(
            { cityKey: req.params.cityKey },
            {
              Temperature: data[0].Temperature.Metric.Value,
              WeatherText: data[0].WeatherText,
              epochTime: currentEpochTime,
            }
          )
          .exec();
      } else {
        await weather_model.create({
          cityKey: req.params.cityKey,
          LocalizedName: data[0].LocalizedName,
          Temperature: data[0].Temperature.Metric.Value,
          WeatherText: data[0].WeatherText,
          EpochTime: currentEpochTime,
        });
      }
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  }
});

export default router;
