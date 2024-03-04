const express = require("express");
const app = express();
const connectDB = require("./connect/db");
const passCodeRoute = require("./routes/passCodeRoute");
const chemicalsRoute = require("./routes/chemicalsRoute");
const shapesRoute = require("./routes/shapesRoute");

const errorHandler = require("./utils/errorHandler");

app.use(express.json());
app.use("/pass-code", passCodeRoute);
app.use("/chemicals", chemicalsRoute);
app.use("/shapes", shapesRoute);
app.use(errorHandler);

connectDB();

app.get("/", (req, res) => {
  return res.status(200).send("Welcome To Al-K6 Management.");
});

const port = 5000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
