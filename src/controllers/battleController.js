import cardModel from "../models/dbCards.js";
import compare from "../models/compare.js";
import sum from "../models/sum.js";

export default class BattleController {
  static battle = async (req, res) => {
    const charac1 = req.body.playerOneCard;
    const charac2 = req.body.playerTwoCard;


    const [result1, result2] = [
      await cardModel.findById(charac1).exec(),
      await cardModel.findById(charac2).exec(),
    ];

    const characStatus1 = result1.attributes.toObject();
    const characStatus2 = result2.attributes.toObject();

    let resultHp = "";

    if (characStatus1.hp > characStatus2.hp) {
      resultHp = result1.toObject()._id;
    } else {
      resultHp = result2.toObject()._id;
    }


    const power = sum(characStatus1, characStatus2);
    const FinalResult = compare(
      power.charac1,
      power.charac2,
      result1,
      result2,
      resultHp
    );

    res.status(200).send({ FinalResult });
  };
}