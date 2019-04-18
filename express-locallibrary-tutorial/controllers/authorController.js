var Author = require('../models/author')
var async = require('async')
var Book = require('../models/book')

// Display list of all Authors.
exports.author_list = function (req, res, next) {

    Author.find()
        .sort([['family_name', 'ascending']])
        .exec(function (err, list_authors) {
            if (err) { return next(err); }
            // Successful, so render.
            res.render('author_list', { title: 'Author List', author_list: list_authors });
        })

};