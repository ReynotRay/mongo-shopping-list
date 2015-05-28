var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

ItemSchema.plugin(autoIncrement.plugin, { model: 'Item', field: 'id' });

var Item = mongoose.model('Item', ItemSchema);

module.exports = Item;

