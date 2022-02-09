const express = require('express');
const port = 3000
let url = require("url")
let router = express.Router()

let forbidden = '/forbidden'

router.get(forbidden, function(req, res, next) {
    if(req.url == forbidden) {
        
        res.render('index', { title: 'Access denied' });
    } else {
        res.render('index', { title: 'Access approved' });
    } 

    
  });

  module.exports = router

