const express = require("express");
const cors = require("cors");

const app = express();

const connectDB = require("./connect/db");
const chemicalsRoute = require("./routes/chemicalsRoute");
const shapesRoute = require("./routes/shapesRoute");
const ordersRoute = require("./routes/ordersRoute");
const alloyRoute = require("./routes/alloyRoute");
const collectionsRoute = require("./routes/collectionsRoute");
const errorHandler = require("./utils/errorHandler");

app.use(express.json())
app.use(cors());
app.use("/chemicals", chemicalsRoute);
app.use("/shapes", shapesRoute);
app.use("/orders", ordersRoute);
app.use("/alloy", alloyRoute);
app.use("/collections", collectionsRoute);
app.use(errorHandler);

connectDB();

app.get("/", (req, res) => {
  return res.status(200).send("Welcome To Al-K6 Management.");
});

const port = 5000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
