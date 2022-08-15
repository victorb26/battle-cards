import cardModel from "../models/dbCards.js";
import compare from "../models/compare.js";


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
    let resultAttack = "";
    let resultDefense = "";
    let resultSpeed = "";
    let resultSpecialAttack = "";
    let resultSpecialDefense = "";



    if (characStatus1.hp > characStatus2.hp) {
      resultHp = result1.toObject()._id;
    } else {
      resultHp = result2.toObject()._id;
    };

    if (characStatus1.attack > characStatus2.attack){
      resultAttack = result1.toObject()._id
    }else{
      resultAttack = result2.toObject()._id
    };

    if (characStatus1.defense > characStatus2.defense) {
      resultDefense = result1.toObject()._id
    }else{
      resultDefense = result2.toObject()._id
    };

    if(characStatus1.speed > characStatus2.speed){
      resultSpeed = result1.toObject()._id
    }else{
      resultSpeed = result2.toObject()._id
    };

    if (characStatus1.specialAttack > characStatus2.specialAttack) {
      resultSpecialAttack = result1.toObject()._id
    }else{
      resultSpecialAttack = result2.toObject()._id
    };

    if (characStatus1.specialDefense > characStatus2.specialDefense) {
      resultSpecialDefense = result1.toObject()._id
    }else{
      resultSpecialDefense = result2.toObject()._id
    };

    const FinalResult = compare(
      charac1,
      charac2,
      result1,
      result2,
      resultHp,
      resultAttack,
      resultDefense,
      resultSpeed,
      resultSpecialAttack,
      resultSpecialDefense
    );

    res.status(200).send({ FinalResult });
  };
}