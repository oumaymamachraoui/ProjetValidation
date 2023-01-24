const User = require("../models/Users");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
// login user

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(400).send({ msg: "bad credential" });
    }
    const checkpass = await bcrypt.compare(password, existUser.password);
    if (!checkpass) {
      return res.status(400).send({ msg: "bad credential" });
    }
    const token = jwt.sign(
      {
        id: existUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "3h" }
    );
    res.status(200).send({ msg: "login successfully", user: existUser, token });
  } catch (error) {
    res.status(400).send({ msg: "cannot login " });
  }
};
