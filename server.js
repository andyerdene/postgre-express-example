const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const userRouter = require("./routes/user.js");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
