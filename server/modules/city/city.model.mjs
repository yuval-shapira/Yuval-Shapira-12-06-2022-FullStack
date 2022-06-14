import mongoose from "mongoose";
const { Schema, model, query } = mongoose;

const citySchema = new Schema({
  cityKey: String,
  LocalizedName: String,
 // Temperature: Number,
 // WeatherText: String,
});

export default model("city", citySchema);
