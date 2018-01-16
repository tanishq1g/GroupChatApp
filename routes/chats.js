var express = require("express");
var router = express.Router();

var Chat = require('../models/chat');

//Root route
router.get("/:chat_id",function(req,res){
    console.log('get route reached');
    Chat.find({id : {$gt : req.params.chat_id}},function(err,foundchats){
        if(err){
            console.log("some error in finding the correct chats");
            res.send({});
        }
        else{
            res.send(foundchats);
            // res.send({"chats" : foundchats, "id" : req.params.chat_id});
        }
    });
});


router.post('/',function(req,res){
    console.log('post route reached');
    var data = req.body;
    console.log(req.body);
    var newChat = {
        id : data.chat_id,
        user_name: data.user_name,
        user_comment: data.user_comment,
    }
    Chat.create(newChat,function(err, chat){
        if(err){
            console.log("error while creating chats in seedDB");
            console.log(err);
        }
        else {
            console.log("added a chat");
            chat.save();
            console.log(chat);
        }
    });
    res.send(data);
});
module.exports = router;
