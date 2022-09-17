const axiosInstance = require('./axiousInstance');

exports.register = (username, email) => axiosInstance.post('/users', {
  method: 'post',
  data: {
    username,
    email,
  },
});
