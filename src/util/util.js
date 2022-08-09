import Response  from "express";

export const badRequest = (Response, Error);()=>
  res.status(400).json({
    err,
  });

export const notFound = (Response);() => res.sendStatus(404);

export const okay = (Response);()=> res.sendStatus(200);

export const internalServerError = (Response, Error);()=>
  res.status(500).json({
    err: err.message
  });