const jwt = require("jsonwebtoken");
const blogsModel=require("../models/blogsModel")


const MDwear = (req, res, next) => {
    try {
  
      let id2=req.query.authorId
      const token = req.headers["x-api-key"];
      if (!token) {
        return res
          .status(401)
          .send({ status: false, msg: "token must be present" });
      }
    //   const decodedToken = jwt.verify(token, "backend-project");
    //   if (decodedToken.authorId !== id2) {
    //     return res
    //       .status(401)
    //       .send({ status: false, msg: "you must have to login first" });
    //   }
      next();
    } catch (err) {
      res.status(500).send({status: false, msg: err.message});
    }
  };
  


module.exports.MDwear = MDwear;