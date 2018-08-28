var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    //console.log('saqlain');
    var Query = Stack.ContentType('about').Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            res.render('pages/about_page/index.html', {
                entry: result[0],
            });
            console.log(result[0].bootstarp.title);
        }, function error(error) {
            next(error);
        });
});

module.exports = router;