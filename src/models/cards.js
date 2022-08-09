import mongoose from 'mongoose';
import pkg from 'mongoose';
const { Schema } = pkg;

const cardSchema = new Schema({
  _id: { type: Number },
  name: { type: String },
  attributes: {
    hp: { type: Number },
    attack: { type: Number },
    defense: { type: Number },
    speed: { type: Number },
    specialAttack: { type: Number },
    specialDefense: { type: Number },
  },
});

const cardModel = mongoose.model("card", cardSchema);

export default cardModel;
