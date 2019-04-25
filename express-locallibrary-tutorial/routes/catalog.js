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

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/author/create', author_controller.author_create_get);

// POST request for creating Author.
router.post('/author/create', author_controller.author_create_post);

// GET request for one Author.
router.get('/author/:id', author_controller.author_detail);


module.exports = router;