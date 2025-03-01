const mongoose = require("mongoose");


const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected");
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

module.exports = connectMongoDb;
