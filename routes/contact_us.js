var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    var Query = Stack.ContentType('contact_us').Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            res.render('pages/contact_us_page/index.html', {
                entry: result[0],
            });
        }, function error(error) {
            next(error);
        });
});

module.exports = router;