import response  from "express";

export const badRequest = (res(response), err (string));()=>
  res.status(400).json({
    err,
  });

export const notFound = (res(response));() => res.sendStatus(404);

export const okay = (res(response));()=> res.sendStatus(200);

export const internalServerError = (res(response), err (string));()=>
  res.status(500).json({
    err: err.message
  });