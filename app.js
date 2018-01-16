var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');



//connecting tso database
mongoose.connect("mongodb://localhost/GroupChatApp");
//setting up all rendered files to be ejs files
app.set('view engine','ejs');
//for post routes
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/public'));
//using method-override and look for _method in url
app.use(methodOverride('_method'));



//add models here

var Chat = require('./models/chat');



//add routes here

var indexRoutes = require("./routes/index");
var chatRoutes = require("./routes/chats");


app.use("/", indexRoutes);
app.use("/chats", chatRoutes);

var data = [
    {
        id : 1,
        user_name: "tanishq",
        user_comment: "hi baby",
    },
    {
        id : 2,
        user_name: "geetuu",
        user_comment: "hey what's up ???",
    }
];
data.forEach(function(seed){
    Chat.create(seed,function(err, chat){
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
});


app.listen(3000, function() {
    console.log(" server has started!!!");
});
