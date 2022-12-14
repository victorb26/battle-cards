import app from "./src/app.js";
import db from "./src/data/configDB.js";

const port = process.env.PORT || 4000;

const server = app.listen(port, async () => {
  await db();
  console.log(`Server listening on port http://localhost:${port}/`);
});
process.on("SIGINT", () => {server.close();
  console.log("Server Finished!");
});
