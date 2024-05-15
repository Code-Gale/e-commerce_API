//signup, login, logout
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//signing user up
const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, country, password } =
      req.body;
    const existEmail = await User.findOne({ email });
    if (existEmail) {
      res.status(400).json({ message: "E-mail already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      password: hashedPassword,
    });

    const savedUser = newUser.save();
    //token
    const payload = {
      userID: savedUser._id,
    };
    const secretKey = process.env.SECRET_KEY;
    const options = {
      expiresIn: "7d",
    };
    const token = jwt.sign(payload, secretKey, options);
    res.status(201).json({token});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
//logging user in
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User not Found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(400).json({ message: "Invalid Credentials" });
    }

    const payload = { userID: user._id };
    const secretKey = process.env.SECRET_KEY;
    const options = {
      expiresIn: "24h",
    };
    const token = jwt.sign(payload, secretKey, options);
    res.status(201).json({token});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const logout = async (req, res) => {
  try {
    // Clear the JWT token from the client-side
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports ={
    signup,
    login,
    logout
}

//fields for signup
//firstName,
//lastName,
//email,
//phoneNumber,
//country,
//password

//fields for login
//email,
//password