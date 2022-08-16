import express from "express";
import CardController from "../controllers/cardController.js";
import BattleController from "../controllers/battleController.js";
import ScoreController from "../controllers/scoreController.js";


const router = express.Router();

router.get("/characters", CardController.getAll);
router.get("/character/:id", CardController.getId);
router.get("/scores",ScoreController.scoreTotal);
router.post("/character", CardController.insert);
router.post("/battle", BattleController.battle);
router.patch("/character/:id", CardController.update);
router.delete("/character/:id", CardController.delete);

export default router;
