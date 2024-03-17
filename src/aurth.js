const jwt = require('jsonwebtoken');
const secret = 'your_jwt_secret'; // Replace with a strong secret key

const generateToken = (userId) => {
  const payload = { userId };
  return jwt.sign(payload, secret, { expiresIn: '1h' });  // Token expires in 1 hour
};