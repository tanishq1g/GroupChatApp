var mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({

}, {usePushEach: true});

module.exports = mongoose.model('Chat', chatSchema);
