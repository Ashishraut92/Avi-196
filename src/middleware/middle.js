const jwt = require("jsonwebtoken");

// A. Atuthentication
const MDwear = (req, res, next) => {
  try {
    const token = req.headers["x-api-key"];
    if (!token) {
      return res
        .status(401)
        .send({ status: false, msg: "token must be present" });
    }

    const decodedToken = jwt.verify(token, "mykey");
// B. Authorization
    if (decodedToken.authorId !== req.params.authorId) {
      return res.status(401).send({ msg: "you must have to login first" });
    }
    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.MDwear = MDwear;