const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getMe } = require("../controllers/users");
const { protect } = require("../middlewares/auth");

//Register
router.post("/", registerUser);

//Login
router.post("/login", loginUser);

router.get("/me", protect, getMe);

module.exports = router;
