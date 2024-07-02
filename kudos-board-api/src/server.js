const express = require("express");
const port = 3000;
const cors = require("cors");
const morgan = require("morgan");

const boardRoutes = require("../routes/boardRoutes");
const cardRoutes = require('../routes/cardRoutes')


// Middleware
const app = express();
app.use(cors()); // Enable CORS middleware to handle cross-origin requests
app.use(morgan("dev"));
app.use(express.json()); //Enable the use of JSON data


// testing
app.get("/", (req, res) => {
    res.send("Hello from the backend -- You are currently at the / route");
  });

//add board routes here
app.use("/boards", boardRoutes);
app.use('/cards', cardRoutes);

app.listen(port, () => {
    console.log(`Server is up and running on PORT: ${port}`);
  });