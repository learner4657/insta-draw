const mongoose = require('mongoose');

exports.connectToDb = async (mongoUrl, dbName) => {
  try {
    await mongoose.connect(`${mongoUrl}/${dbName}`);
    console.log('successfully connected');
  } catch (err) {
    console.log(`can't connect to mongo ${err.message}`);
  }
};
