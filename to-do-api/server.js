//Importing the required modules
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const rateLimit = require("express-rate-limit");
const taskRoutes = require("./routes/taskRoutes");
const tagRoutes = require("./routes/tagRoutes");

require("dotenv").config();
//Initializing the server
const server = express();
const PORT = process.env.PORT || 5000;

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(`MongoDB Connected`.rainbow.bold);
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
  }
};

connectDb();

//find out what this is doing
server.use(cors());
//Parsing the request JSON body
server.use(express.json());

server.use("/api/user", userRoutes);
server.use("/api/tasks", taskRoutes);
server.use("/api/tags", tagRoutes);

//Starts the server with the port
server.listen(PORT, () => {
  console.log(`Listening to you on port: ${PORT}`.rainbow.bold);
});

//be clear about endpoints and routes
