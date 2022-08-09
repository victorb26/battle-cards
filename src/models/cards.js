import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required:true },
  attributes: {
    hp: { type: Number, required:true },
    attack: { type: Number, required:true },
    defense: { type: Number, required:true },
    speed: { type: Number, required:true },
    specialAttack: { type: Number, required:true },
    specialDefense: { type: Number, required:true },
  },
});

const cardModel = mongoose.model("cardModel", cardSchema);

export default cardModel;
