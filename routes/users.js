var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Joe' },
    { id: 4, name: 'Jill' },
  ]

  res.send(users);
});

module.exports = router;
