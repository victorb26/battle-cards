import express from "express";
import  CardController  from "../controllers/cardController.js";
const router = express.Router();

router.get("/characters", CardController.getAll);
router.post("/character", CardController.insertCharacter);
router.patch("/character/:id");
router.delete("/character/:_id");

export default router;