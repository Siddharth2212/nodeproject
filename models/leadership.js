/**
 * Created by Admin on 18-12-2016.
 */
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Will add the Currency type to the Mongoose Schema types
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

// create a schema
var leadershipSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    },
    designation: {
        type: String
    },
    abbr: {
        type: String
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Leadership = mongoose.model('Leadership', leadershipSchema);

// make this available to our Node applications
module.exports = Leadership;