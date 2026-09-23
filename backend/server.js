import app from "./src/app.js";
import connectDb from "./src/db/db.js";
import "dotenv/config";

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

connectDb(DATABASE_URL);

app.listen(PORT, () => {
  console.log(`The server is listening on ${PORT}`);
});
