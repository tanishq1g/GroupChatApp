var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');



//connecting tso database
mongoose.connect("mongodb://localhost/yelp_camp_v");
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




app.listen(3000, function() {
    console.log(" server has started!!!");
});
