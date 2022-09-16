const userRepository = require('../repositories/userRepository');

exports.addUser = (user) => userRepository.addUser(user);
