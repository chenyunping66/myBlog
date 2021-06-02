let express = require('express')
let router = express.Router()
// 用户注册/user/signup
router.get('/add',function(req,res){
  res.send('发表文章')
})
module.exports = router;