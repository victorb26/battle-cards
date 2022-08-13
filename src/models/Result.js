import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    playerWinner: { type: Number },
    playerLoser: { type: Number },
    details: {
      hp: { type: Number },
      attack: { type: Number },
      defense: { type: Number },
      speed: { type: Number },
      specialAttack: { type: Number },
      specialDefense: { type: Number },
    },
  },
  { versionKey: false }
);

const resultModel = mongoose.model("resultModel", resultSchema);

export default resultModel;
