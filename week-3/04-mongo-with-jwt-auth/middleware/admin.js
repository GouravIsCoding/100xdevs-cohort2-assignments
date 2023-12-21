const jwt = require("jsonwebtoken");
const jwtSecret = "password";

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  try {
    const [bearer, token] = req.headers.authorization.split(" ");
    jwt.verify(token.trim(), jwtSecret);
    next();
  } catch (error) {
    res.status(404).json({ message: "invalid jwt token" });
  }
}

module.exports = adminMiddleware;
