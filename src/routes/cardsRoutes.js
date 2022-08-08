import express from "express";

const router = express.Router();

router.get("/pokemons");
router.post("/pokemon");
router.patch("/pokemon/:id");
router.delete("/pokemon/:_id");

export default router;