const { User } = require('../models/user');

exports.addUser = (user) => User.create(user);
