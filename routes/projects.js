var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    var Query = Stack.ContentType('projects').Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            res.render('pages/projects/index.html', {
                entry: result[0],
            });
            console.log(result[0].group.projects);
        }, function error(error) {
            next(error);
        });
});

module.exports = router;