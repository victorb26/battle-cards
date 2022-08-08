import express from "express";

const router = express.Router();

router.get("/characters");
router.post("/character");
router.patch("/character/:id");
router.delete("/character/:_id");

export default router;