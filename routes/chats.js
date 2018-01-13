var express = require("express");
var router = express.Router();

var Chat = require('../models/chat');

//Root route
router.get("/:chat_id",function(req,res){
    Chat.find({id : {$gt : req.params.chat_id}}, function(err,foundchats){
        if(err){
            console.log("some error in finding the correct chats");
        }
        else{
            res.send({"chats" : foundchats, "id" : req.params.chat_id});
        }
    });
});



module.exports = router;
