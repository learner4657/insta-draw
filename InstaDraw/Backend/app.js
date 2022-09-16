const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./db');
const userController = require('./controllers/userController');

const app = express();
const port = 3000;
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'InstaDraw';

app.use(cors());

app.use(morgan('tiny'));

app.use('/users', userController);

app.use(express.json());


app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

db.connectToDb(mongoUrl, dbName);
