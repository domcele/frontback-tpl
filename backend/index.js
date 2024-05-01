const express = require("express");
const cors = require("cors");
const studentsRoutes = require("./routes/studentsRoutes");
require("dotenv").config();

const app = express();
app.use(express.json()); // must
app.use(cors()); // must
const port = process.env.PORT || 8080;

app.use("/students", studentsRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
