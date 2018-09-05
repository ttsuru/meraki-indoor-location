'use strict';

var cache = require('../cache');

exports.list = function (req, res) {

    cache.getKeys( function(err, keys) {
        if (err) {
            util.log(err);
        }

        res.status(200).send(keys);
    });

};

exports.user = function(req, res) {

    cache.getObject(req.params.userId, function(err, object){
        if (err) {
            util.log(err);
        }

        res.status(200).send(object);
    })

}
