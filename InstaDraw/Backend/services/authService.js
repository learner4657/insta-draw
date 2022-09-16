const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.generateToken = (id) => jwt.sign(id, process.env.ACCESS_TOKEN_SECRET);
