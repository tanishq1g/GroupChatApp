var chat_id = -1;


function add_comment(){
    alert("Ds");
    if( $('#username').val().length == 0 ) {
		alert('Please Enter a User Name');
		// return false;
	}
    $.ajax({
        url: "/chats",
        type: 'POST',
        data : {
            "chat_id" : chat_id,
            "user_name": $('#username').val(),
            "user_comment": $('#add_comment').val(),
        },
        // data :chat_id,
        dataType: 'json',
        success: function(response){
            console.log(response);
        },
        error: function(error){
            console.log("some error occured in post route"+error);
        }
    });
    // return false;
}

function update_chat(){
    $.ajax({
        url : "/chats/" + chat_id,
        type: 'get',
        contentType: 'application/json',
        success: function(response){
            console.log(response);
            $('#chats').val( $('#chats').val() + response.chats[0].user_name + " : " + response.chats[0].user_comment + '\n');
        },
        error: function(error){
            console.log("some error occured in get route" + error);
        }
    });
}

setInterval(update_chat,8000);
