import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
    {
        "playerOneCard": { type: Number, required: true, default:0} ,
        "playerTwoCard": { type: Number, required: true, default:0}
      },
      { versionKey: false }
)

const playerModel = mongoose.model("playerModel", playerSchema);

export default playerModel;