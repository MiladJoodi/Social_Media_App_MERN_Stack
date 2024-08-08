const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Get All User
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get User by ID

// Create user
router.post("/", async (req, res) => {
  try {

    const data = {
        name: req.body.name,
        email: req.body.email,
        image: req.body.name
    }

    const userRef = await User.findOneAndUpdate(data, data, {
        new: true,
        upsert: true,
        runValidators: true
    })

    const userRes = await userRef.save();
    res.status(201).json(userRes);


  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
