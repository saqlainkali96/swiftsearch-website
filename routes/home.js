var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    var Query = Stack.ContentType('home').Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            res.render('pages/home/index.html', {
                entry: result[0],
            });
        }, function error(error) {
            next(error);
        });
});

module.exports = router;