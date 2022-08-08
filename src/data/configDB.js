import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./src/data/database.db");

process.on("SIGINT", () =>
  db.close(() => {
    console.log("DB Finished!");
    process.exit(0);
  })
);

export default db;