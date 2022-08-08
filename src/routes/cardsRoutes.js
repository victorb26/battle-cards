import express, { Router } from "express";

const router = express.Router();

router.get("/pokemons");
router.post("/pokemon");
router.put("/pokemon/:id");
router.delete("/pokemon/:_id");

export default router;