var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/checkUser', function(req, res, next) {
  console.log(req.body)
  res.send('0')
});

router.post('/checkPermission', function(req, res, next) {
    console.log(req.body)
    res.send('0')
  });

module.exports = router;
