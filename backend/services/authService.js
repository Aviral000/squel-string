const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const register = async (username, password, role) => {
    const existingUser = await User.findOne({ username });

    if(existingUser) {
        throw new Error("Username already exists");
    }

    const genSalt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, genSalt);
    const user = new User({ username, password: hashPassword, role });
    await user.save();
    return user;
}

const login = async (username, password) => {
    const user = await User.findOne({ username });

    if(!user) {
        throw new Error("Invalid Username or Password");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
        throw new Error("Invalid Username or Password");
    }

    const token = jwt.sign({id: user._id, role: user.role}, process.env.SECRET_CODE, { expiresIn: '1h' });

    return { user, token };
}

module.exports = { register, login };