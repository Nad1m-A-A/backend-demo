const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const connectDB = require("./connect/db");
const chemicalsRoute = require("./routes/chemicalsRoute");
const shapesRoute = require("./routes/shapesRoute");
const ordersRoute = require("./routes/ordersRoute");
const alloyRoute = require("./routes/alloyRoute");
const collectionsRoute = require("./routes/collectionsRoute");
const errorHandler = require("./utils/errorHandler");

app.use(express.json());
app.use(cors());
app.use("/chemicals", chemicalsRoute);
app.use("/shapes", shapesRoute);
app.use("/orders", ordersRoute);
app.use("/alloy", alloyRoute);
app.use("/collections", collectionsRoute);
app.use(errorHandler);

connectDB();

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  return res.status(200).send(`
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
          }
          h1 {
            color: #333;
            margin-top: 50px;
          }
          a {
            margin: 20px 0;
            color: #fff;
            text-decoration: none;
            font-size: 18px;
            padding: 1rem 2rem;
            background: #333;
            border-radius: 3px;
          }
          a:hover {
            text-decoration: underline;
          }
          .container {
            padding: 20px;
          }
          .links-container {
            display: flex;
            justify-content: center;
            gap: 1rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome To Al-K6 Management.</h1>
          <div class="links-container">
          <a href="${process.env.APP_BASE_URL}/alloy">Alloy</a>
          <a href="${process.env.APP_BASE_URL}/shapes">Shapes</a>
          <a href="${process.env.APP_BASE_URL}/orders">Orders</a>
          <a href="${process.env.APP_BASE_URL}/chemicals">Chemicals</a>
          </div>
        </div>
      </body>
    </html>
  `);
});

const port = 5000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
