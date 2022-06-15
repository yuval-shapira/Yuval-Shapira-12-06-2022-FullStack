import city_model from "./city.model.mjs";
import express, { json } from "express";
import fetch from "node-fetch";

const { API_KEY, LOCATION_AUTOCOMPLETE_API } = process.env;
const router = express.Router();

router.get("/citiesList/:text", async (req, res) => {
  const api = `${LOCATION_AUTOCOMPLETE_API}?apikey=${API_KEY}&q=${req.params.text}`;
  try {
    const response = await fetch(api);
    const data = await response.json();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/favorites", async (req, res) => {
  const { cityKey, LocalizedName } = req.body;
  const duplicate = await city_model.findOne({ cityKey }).exec();
  if (duplicate) {
    return res.status(400).send("City already exists");
  }
  try {
    const city = await city_model.create({
      cityKey: cityKey,
      LocalizedName: LocalizedName,
    });
    res.status(200).json(city);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/favorites", async (req, res) => {
  try {
    const allCities = await city_model.find().exec();
    res.status(200).send(allCities);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/favorites/:cityKey", async (req, res) => {
  try {
    const city = await city_model
      .deleteOne({ cityKey: req.params.cityKey })
      .exec();
    res.status(200).json(city);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
