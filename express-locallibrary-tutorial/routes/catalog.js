var express = require('express');
var router = express.Router();


// Require our controllers.
// var book_controller = require('../controllers/bookController'); 
var author_controller = require('../controllers/authorController');

// GET catalog home page.
router.get('/', author_controller.author_list);

/// AUTHOR ROUTES ///
// GET request for list of all Authors.
router.get('/authors', author_controller.author_list);


module.exports = router;