const express = require("express");
const { generateToken, verifyToken } = require("../auth/authentication");
const User = require("../models/User");

const router = express.Router();

// User registration route
router.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
});

// User login route
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
});

module.exports = router;
