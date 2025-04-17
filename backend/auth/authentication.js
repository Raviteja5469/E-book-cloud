const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// Load env vars
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

// Function to generate a JWT token
function generateToken(user) {
  return jwt.sign({ id: user._id }, JWT_SECRET, {
    expiresIn: "1h", // Token expires in 1 hour
  });
}

// Middleware to verify a JWT token
function verifyToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
}

module.exports = { generateToken, verifyToken };
