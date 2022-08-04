const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/DoAnHumg", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to  Successfully");
  } catch (error) {
    console.log("Connected to  fail");
  }
}

module.exports = { connect };
