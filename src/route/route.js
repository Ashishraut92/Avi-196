const express=require('express');
const router=express.Router();

const authorController= require("../controllers/authorController")
const blogController=require("../controllers/blogController")
const middleware=require("../middleware/middle")

router.post('/createAuthors',authorController.createAuthors)
router.post('/createBlogs',blogController.createBlogs)
router.get('/getBlogs',middleware.MDwear,blogController.getBlogs)
router.put('/updatedBlog/:blogId',middleware.MDwear,blogController.updatedBlog)
router.delete('/blogDeleted/:blogId',middleware.MDwear,blogController.BlogDeleted)
router.delete("/deleteByQuery",middleware.MDwear,blogController.deleteByQuery)
router.post("/login", blogController.loginUser)

module.exports=router;