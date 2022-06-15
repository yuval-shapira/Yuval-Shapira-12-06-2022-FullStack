import mongoose from "mongoose";

const { Schema, model } = mongoose;

const citySchema = new Schema({
  cityKey: String,
  LocalizedName: String,
});

export default model("city", citySchema);
