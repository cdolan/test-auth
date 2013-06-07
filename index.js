var crypto = require('crypto');
var request = require('request');

function login (user, pass) {
  return request({
    url: 'https://auth.pleaseignore.com/api/1.0/login',
    qs: {
      user: user,
      pass: sha1(pass)
    }
  });
};

function sha1 (data) {
  var shasum = crypto.createHash('sha1');
  shasum.update(data);
  return shasum.digest('hex');
}

exports.login = login;
