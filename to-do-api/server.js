const express = require("express");
const colors = require("colors");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const rateLimit = require("express-rate-limit");
const taskRoutes = require("./routes/taskRoutes");

require("dotenv").config();
const server = express();
const PORT = process.env.PORT || 5000;

//add check
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(`MongoDB Connected`.random.bold);
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
  }
};

connectDb();

server.use(cors());
server.use(express.json());

server.use("/api/user", userRoutes);
server.use("/api/tasks", taskRoutes);

server.listen(PORT, () => {
  console.log(`Listening to you on port: ${PORT}`.rainbow.bold);
});

//be clear about the purpose of the code
//be clear about endpoints and routes
