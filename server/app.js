const express = require("express");
const cors = require("cors");
const indexRouter = require("./index");

const app = express();
const port = 8080;

app.use(
  cors() // {  origin: ["https://www.berkeleyproject.org/"] }
);

// Body-parser setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/server", indexRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
