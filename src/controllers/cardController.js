import cardModel from "../models/Cards.js";

export default class CardController {
  static getAll = (req, res) => {
    cardModel.find((err, cardModel) => {
      cardModel.sort((a, b) => a._id - b._id);
      res.status(200).json(cardModel);
    });
  };

  static insert = (req, res) => {
    const character = new cardModel(req.body);
    character.save((err) => {
      if (err) {
        res.status(404).json({
          message: `Error! Insert all params!/Character already registered `,
        });
      } else {
        res.status(201).json({ message: `Sucess! Character has been added!` });
      }
    });
  };

  static update = (req, res) => {
    const id = req.params.id;
    cardModel.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(201).send({ message: `Character updated successfully` });
      } else {
        res
          .status(404)
          .send({ message: `Something's wrong!/Character notFound` });
      }
    });
  };

  static delete = (req, res) => {
    const id = req.params.id;

    cardModel.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(201).send({ message: `Character removed sucessfully!` });
      } else {
        res
          .status(404)
          .send({ message: `Something's wrong!/Could not delete character` });
      }
    });
  };
}
