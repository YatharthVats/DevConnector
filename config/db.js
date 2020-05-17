const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

//create a default.json file in config folder
//and add in your mongoDB project connection there under mongoURI

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MongoDB database connected");
  } catch (err) {
    console.log(err.message);
    //Exiting the process
    process.exit(1);
  }
};

module.exports = connectDB;
