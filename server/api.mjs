import express from "express";
import { connect_db } from "./db/mongoose.connection.mjs";

import log from "@ajar/marker";
import city_router from "./modules/city/city.router.mjs";
import cors from "cors";

const { PORT, HOST, DB_URI } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", city_router);

app.use((req, res, next) => {
  res.status(404).send(` - 404 - url was not found`);
});

(async () => {
  //connect to mongo db
  await connect_db(DB_URI);
  app.listen(PORT, HOST);
  //, () => {
  log.magenta(`🌎  listening on`, `http://${HOST}:${PORT}`);
})().catch(console.log);
