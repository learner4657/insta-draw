const express = require('express');

const router = express.Router();

const jwt = require('jsonwebtoken');

const userService = require('../services/userService');

const authService = require('../services/authService');

router.use(express.json());

router.post('', async ({ body: { data } }, res) => {
  try {
    const user = await userService.addUser(data);
    const token = authService.generateToken(user._id.toString());
    res.send({ user, token });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
