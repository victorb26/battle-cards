import express from "express";
import  CardController  from "../controllers/cardController.js";
const router = express.Router();

router.get("/characters", CardController.getAll);
router.get("/character/:id", CardController.getId);
router.post("/character", CardController.insert);
router.patch("/character/:id", CardController.update);
router.delete("/character/:id",CardController.delete);

export default router;