import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    attributes: {
      type: {
        hp: { type: Number, required: true },
        attack: { type: Number, required: true },
        defense: { type: Number, required: true },
        speed: { type: Number, required: true },
        specialAttack: { type: Number, required: true },
        specialDefense: { type: Number, required: true },
        _id: { required: false },
      },
      required: true,
    },
  },
  { versionKey: false }
);

const cardModel = mongoose.model("cardModel", cardSchema);

export default cardModel;
