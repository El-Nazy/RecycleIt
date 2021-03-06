const mongoose = require("mongoose");
const uri = "mongodb://localhost/recycledb";
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

module.exports = function initDB() {
  mongoose
    .connect(uri, options)
    .then(() => {
      console.log(":: connected to database");
    })
    .catch(error => {
      console.log(":: couldn't connect to database ", error);
    });
};
