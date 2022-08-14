import cardModel from "../models/Cards.js";


export default class CardController {
  static getAll = (req, res) => {
    cardModel.find((err, cardModel) => {
      if (err) {
        res.status(500).json({ message: `Internal Server Error` });
      } else {
        res.status(200).json(cardModel);
      }
    });
  };

  static getId = (req, res) => {
    let id = req.params.id;
    cardModel.findById(id, (err, cardModel) => {
      if (err) {
        res.status(404).json({ message: `Error :()` });
      } else {
        res.status(200).json(cardModel);
      }
    });
  };

  static insert = (req, res) => {
    const character = new cardModel(req.body);
    character.save((err) => {
      if (err) {
        res
          .status(404)
          .json({
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
      if (err) {
        res
          .status(404)
          .json({ message: `Something's wrong!/Character notFound` });
      } else {
        res.status(201).json({ message: `Character updated successfully` });
      }
    });
  };

  static delete = (req, res) => {
    const id = req.params.id;
    cardModel.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(404)
          .json({ message: `Something's wrong!/Could not delete character` });
      } else {
        res.status(201).json({ message: `Character removed sucessfully!` });
      }
    });
  };

 
}
