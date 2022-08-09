import { response, request } from "express";
import cardModel from "../models/Cards.js";

export default class CardController {
    static async getAll (res) {
        try {
         const cards = await cardModel.find();
         
         res.status(200).json ("All ok");
          
        } catch (err) {
          res.status(500).json("Internal Server Error")
        }
      };

    static async insertCharacter (req, res) {
        const newCharacter = req.body
        try{
            await cardModel.create(newCharacter);
            res.status(200).json ("New character added with sucess!");
        } catch(err){
            res.status(400).json("Error! Try again!");
        }

    };
}