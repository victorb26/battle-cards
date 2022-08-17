import express from "express";
import cards from "./cardsRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).json({
      message: `Welcome to Multi Versus Battle Cards!`,
    });
  });

  app.use(express.json(), cards);
};

export default routes;
