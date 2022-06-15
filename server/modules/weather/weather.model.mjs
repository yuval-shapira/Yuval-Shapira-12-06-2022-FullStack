import mongoose from "mongoose";
const { Schema, model } = mongoose;

const weatherSchema = new Schema({
  cityKey: String,
  LocalizedName: String,
  Temperature: Number,
  WeatherText: String,
  EpochTime: Number,
});

export default model("weather", weatherSchema);
