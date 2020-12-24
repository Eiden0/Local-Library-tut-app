let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let GenreSchema = new Schema(
    {
        name : {type: String, required: true, maxlength: 100, minlength: 3}
    }
)

GenreSchema.virtual('url').get(function (){
    return '/catalog/genre' + this._id;
})

module.exports = mongoose.model('Genre', GenreSchema);