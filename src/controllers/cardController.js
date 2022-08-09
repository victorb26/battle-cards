import { response, request } from "express";
import cardModel from "../models/Cards.js";
import { badRequest,
     internalServerError,  
     okay, 
     notFound } from "../util/util.js";

export default class CardController {
    static async getAll   (res, req) {
        try {
         const cards = await cardModel.find();
         
         return okay(res, "All ok");
          
        } catch (err) {
          return badRequest(res,"Something's wrong :(" )
        }
      };
}