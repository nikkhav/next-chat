const mongoose = require("mongoose");

const connection = {};

const connectDB = async () => {
  if (connection.isConnected === 1) return;

  const DB = process.env.DB.replace("<password>", process.env.DB_PASSWORD);

  const mongoConnection = await mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection.isConnected = mongoConnection.connections[0]._readyState;
};

export default connectDB;
