var mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({
    user_name : String,
    user_comment: String,
}, {usePushEach: true});

module.exports = mongoose.model('Chat', chatSchema);
