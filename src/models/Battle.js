import mongoose from "mongoose";

const battleSchema = new mongoose.Schema(
  {
    hp: { type: Number },
    attack: { type: Number },
    defense: { type: Number },
    speed: { type: Number },
    specialAttack: { type: Number },
    specialDefense: { type: Number },
  },
  { versionKey: false }
);

const battleModel = mongoose.model("battleModel", battleSchema);

export default battleModel;
