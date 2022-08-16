import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema(
  {
    playerOne: { type: Number },
    playerTwo: { type: Number },
  },
  { versionKey: false }
);

const scoreModel = mongoose.model("scoreModel", scoreSchema);

export default scoreModel;
