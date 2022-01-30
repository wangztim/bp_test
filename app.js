const express = require("express");
const cors = require("cors");
const indexRouter = require("./server/index");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

// Body-parser setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/server", indexRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
