var async = require('async');

module.exports = function (req, res, next) {

    async.parallel([
        function (callback) {
            // Get About data
            var Query = Stack.ContentType('about').Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            callback(null,result[0]);
            //console.log('About',result[0]);
        }, function error(error) {
            next(error);
        });

        },
        function (callback) {
            // Get Contact data
            var Query = Stack.ContentType('contact_us').Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            callback(null,result[0]);
            //console.log('Contact',result[0]);
        }, function error(error) {
            next(error);
        });
        },
        function (callback){
            //Get Projects
            var Query = Stack.ContentType('projects').Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            callback(null,result[0]);
            //console.log('Projects',result[0]);
        }, function error(error) {
            next(error);
        });
        }], function (error, success) {
            if (error) return next(error);
                res.locals.about = success[0];
            res.locals.contact = success[1];
            res.locals.project = success[2];
            next();
        })
};