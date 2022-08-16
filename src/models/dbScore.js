import mongoose from "mongoose";

const battleScoreSchema = new mongoose.Schema(
    {
        "playerOne": { type: Number, default: 0 },
        "playerTwo": { type: Number, default: 0 },
    },
    { versionKey: false }
);

const scoreModel = mongoose.model("scoreModel", scoreSchema);

export default scoreModel ;