var express = require("express");
var router = express.Router();

var Chat = require('../models/chat');

//Root route
router.get("/:chat_id",function(req,res){
    console.log('get route reached');
    Chat.find({id : {$gt : req.params.chat_id}}, function(err,foundchats){
        if(err){
            console.log("some error in finding the correct chats");
        }
        else{
            res.send({"chats" : foundchats, "id" : req.params.chat_id});
        }
    });
});


router.post('/',function(req,res){
    console.log('post route reached');
    var data = req.body;
    console.log(req);
    res.send(data);
});
module.exports = router;
