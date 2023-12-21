const jwt = require("jsonwebtoken");
const jwtSecret = "password";

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  try {
    const [bearer, token] = req.headers.authorization.split(" ");
    jwt.verify(token.trim(), jwtSecret);
    next();
  } catch (error) {
    res.status(404).json({ message: "invalid jwt token" });
  }
}

module.exports = userMiddleware;
