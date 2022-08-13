import mongoose from "mongoose";

const aResultSchema = new mongoose.Schema(
  {
    playerOneWins: { type: Number, default: 0 },
    playerTwoWins: { type: Number, default: 0 }
  },
  { versionKey: false }
);

const aResultModel = mongoose.model("aResultModel", aResultSchema);

export default aResultModel;
