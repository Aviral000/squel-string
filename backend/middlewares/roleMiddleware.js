const roleMiddleware = (roles) => (req, res, next) => {
    const { roles } = req.user;

    if(!roles.includes(role)) {
        return res.status(403).json({ message: "Access Denied" });
    }

    next();
}

module.exports = roleMiddleware;