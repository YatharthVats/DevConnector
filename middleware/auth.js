const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  //Getting token from the header
  const token = req.header("x-auth-token");

  //Check if no token
  if (!token) {
    return res.status(401).json({ message: "No token. Authorization denied" });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Invalid token. " });
  }
};
