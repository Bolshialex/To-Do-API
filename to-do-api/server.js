const express = require("express");
const colors = require("colors");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const rateLimit = require("express-rate-limit");

require("dotenv").config();
const server = express();
const PORT = process.env.PORT || 5000;

//add check
mongoose.connect(process.env.CONNECTION_STRING);

server.use(cors());
server.use(express.json());

server.use("/api/users", userRoutes);

server.listen(PORT, () => {
  console.log(`Listening to you on port: ${PORT}`.rainbow.bold);
});

//be clear about the purpose of the code
//be clear about endpoints and routes
