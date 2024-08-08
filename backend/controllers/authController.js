const authService = require('../services/authService');

const register = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const user = await authService.register(username, password, role);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const { user, token } = await authService.login(username, password, role);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { register, login };