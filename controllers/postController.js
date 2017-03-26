var Post = App.require('models/post.js');
var ErrorHandler = App.require('errorHandler.js');
var random = require("random-js")();
var moment = require('moment');


exports.addSystemPet = function(req, res, next) {
    next("endpoint not secure");
    var pet = new Pet({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image
    });

    App.logger.log('warn', "Request to create pet %s", pet.name);

    pet.save(function(err) {
        if (err) {
            ErrorHandler.logAndSend(err, "failed to create pet", next);
        } else {
            res.json(pet);
        }
    });
};

exports.getUsersPets = function(req, res, next) {
    Pet.find({ ownerId: req.query.userId }).where('name').ne('Egg')
        .then(function(pets) {
            res.json(pets);
        })
        .catch(function(err) {
            ErrorHandler.logAndSend(err, "failed to get pets for user", next);
        });
};