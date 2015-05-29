var Item = require('../models/item');

exports.save = function (name, callback, errback) {
  Item.create({ name: name }, function(err, item) {
    if (err) {
      errback(err);
      return;
    }
    callback(item);
  });
};

exports.list = function (callback, errback) {
  Item.find(function(err, items) {
    if (err) {
      errback(err);
      return;
    }
    callback(items);
  });
};

exports.remove = function (id, callback, errback) {
  Item.remove({ id: id }, function(err, item) {
    if (err) {
      errback(err);
      return;
    }
    callback(item);
  });
};

exports.update = function (id, newName, callback, errback) {
  Item.findOneAndUpdate({ id: id }, { name: newName }, function(err, item) {
    if (err) {
      errback(err);
      return;
    }
    callback(item);
  });
};