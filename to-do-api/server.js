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

// 10 minute rate limit
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
  headers: true,
});

server.use(limiter);
//Sets up Cross-Origin Resource Sharing. This allows the server to accept requests from the client
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
