import express from "express";
import { connect_db } from "./db/mongoose.connection.mjs";
import city_router from "./modules/city/city.router.mjs";
import weather_router from "./modules/weather/weather.router.mjs";
import cors from "cors";

const { PORT, HOST, DB_URI } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/city", city_router);
app.use("/api/weather", weather_router);

app.use((req, res, next) => {
  res.status(404).send(` - 404 - url was not found`);
});

(async () => {
  await connect_db(DB_URI);
  app.listen(PORT, HOST);

})().catch(console.log);
