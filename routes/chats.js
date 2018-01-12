var express = require("express");
var router = express.Router();


//Root route
router.get("/:chat_id",function(req,res){
    res.send('succeess ' + req.params.chat_id);
});



module.exports = router;
