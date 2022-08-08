import express from "express";
import cards from "./cardsRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.json({
      statusCode: 200,
      message: "Welcome to Multi Versus Battle Cards!",
    });
  });

  app.use(express.json(), cards);
};

export default routes;
