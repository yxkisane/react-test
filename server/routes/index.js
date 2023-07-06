var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', function(req, res, next) {
  if (req.body.username === 'admin1' && req.body.password === 'Admin1!') {
    res.send({
      code: 200,
      msg: '成功'
    });
  } else {
    res.send({
      code: 401,
      msg: '用户名或密码错误'
    });
  }
});

module.exports = router;
