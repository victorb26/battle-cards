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

 
}
