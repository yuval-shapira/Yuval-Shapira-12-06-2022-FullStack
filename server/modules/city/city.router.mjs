/* 
  if there is an error thrown in the DB, asyncMiddleware
  will pass it to next() and express will handle the error */
  //import raw from "../../middleware/route.async.wrapper.mjs";
  import city_model from "./city.model.mjs";
  import express from "express";
  import log from "@ajar/marker";
  import fetch from "node-fetch";
  
  const { API_KEY, LOCATION_AUTOCOMPLETE_API, GET_WEATHER_API} = process.env;
  const router = express.Router();

  ////// MIDWHERE FUNCTIONALITY //////////////


  ////// ROUTER FUNCTIONALITY //////////////
  
  // get all cities
  router.get("/citiesList/:text", async (req, res) => {
    const api = `${LOCATION_AUTOCOMPLETE_API}?apikey=${API_KEY}&q=${req.params.text}`;
    //api = "https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=6AjcSIfASrWNGVCA4UfxMnBwHFfAuWSI&q=jerusalem";
    try{
      const response = await fetch(api);
      const data = await response.json();
      //log.blue(data);
      res.status(200).send(data);
    }
    catch(err){
      log.red(err);
      res.status(500).send(err);
    }
  });

  // get city weather
  router.get("/city/:cityKey", async (req, res) => {
    const api = `${GET_WEATHER_API}${req.params.cityKey}?apikey=${API_KEY}`;
    //api = "https://dataservice.accuweather.com/currentconditions/v1/31206?apikey=6AjcSIfASrWNGVCA4UfxMnBwHFfAuWSI";
    try{
      log.red(api);
      const response = await fetch(api);
      const data = await response.json();
      log.blue(data);
      console.log(data);
      res.status(200).send(data);
    }
    catch(err){
      log.red(err);
      res.status(500).send(err);
    }
  }
  );
  //POST city to DB
  router.post("/favorites", async (req, res) => {
  const { cityKey, LocalizedName, Temperature, WeatherText} = req.body;
    const duplicate = await city_model.findOne({cityKey}).exec();
    if (duplicate) {
      return res.status(400).send("City already exists");
    }
    try{
      const city = await city_model.create({ 
        cityKey: cityKey,
        LocalizedName: LocalizedName,
      //  Temperature: Temperature,
      //  WeatherText: WeatherText,
      });
      res.status(200).json(city);
    }
    catch(err){
      log.red(err);
      res.status(500).send(err);
    }
  }
  );
//getting all cities from DB
  router.get("/favorites", async (req, res) => {
    try{
    const allCities = await city_model.find().exec();
    res.status(200).send(allCities);
    }
    catch(err){
      log.red(err);
      res.status(500).send(err);
    }
  }
  );
  //delete city from DB
  router.delete("/favorites/:cityKey", async (req, res) => {
    try{
    const city = await city_model.deleteOne({cityKey: req.params.cityKey}).exec();
    res.status(200).send(city);
    }
    catch(err){
      log.red(err);
      res.status(500).send(err);
    }
  }
  );

  export default router;
  