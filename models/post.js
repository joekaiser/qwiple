var mongoose = require('mongoose');
var moment = require('moment');
var random = require("random-js")();


// Define our user schema
var PostSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: false,
        required: true
    },

    created_at: {
        type: Date,
        required: true,
        default: function() {
            return moment.utc();
        }
    },
    body: {
        type: String,
        required: true
    },
    ownerId: {
        type: String,
        required: true,
        default: function() {
            return random.uuid4();
        }
    }

});

module.exports = mongoose.model('Post', PostSchema);