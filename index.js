const express = require("express");
const app = express();
const passCodeRoute = require("./routes/passCodeRoute");
const connectDB = require("./connect/db");
app.use(express.json());
app.use("/pass-code", passCodeRoute);

connectDB();

app.get("/", (req, res) => {
  return res.status(200).send("Welcome To Al-K6 Management.");
});

const port = 5000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
