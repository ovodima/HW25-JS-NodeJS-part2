const express = require('express');
const port = 3000
let url = require("url")
let router = express.Router()

let home = '/home'
router.get(home, function(req, res, next) {
    if(req.url == home) {
        res.render('index', { title: 'This Home page' });
    } else {
        next()
    }

    
  });

  module.exports = router


