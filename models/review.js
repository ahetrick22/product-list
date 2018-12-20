const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

const ReviewSchema = new Schema({
  userName: String,
  text: String,
  product: {type: Schema.Types.ObjectId, ref: 'product'}
});

ReviewSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('review', ReviewSchema);