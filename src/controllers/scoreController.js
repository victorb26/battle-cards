import scoreModel from "../models/dbScore.js";

export default class ScoreController {
  static scoreTotal = async (req, res) => {
    try {
      const playersScore = await scoreModel.find();
      const [{ playerOne, playerTwo }] = playersScore;

      res.status(200).json({ playerOne, playerTwo });
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  static reset = async (req, res) => {
    try {
      const playersScore = await scoreModel.find();
      if (playersScore[0] === undefined)
        await scoreModel.create({ playerOne: 0, playerTwo: 0 });

      await scoreModel.updateOne({ playerOne: 0 });
      await scoreModel.updateOne({ playerTwo: 0 });
      res.status(200).json("Punctuation reseted");
    } catch (error) {
      res.status(404).json(error.message);
    }
  };
}
