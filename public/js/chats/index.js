var chat_id = $(".chat_id").text();

function add_comment(){
    if( $('#username').val().length == 0 ) {
		alert('Please Enter a User Name');
        return false
		// return false;
	}
    $.ajax({
        url: "/chats",
        type: 'POST',
        data : {
            "chat_id" : Number($(".chat_id").text())+1,
            "user_name": $('#username').val(),
            "user_comment": $('#add_comment').val(),
        },
        // data :chat_id,
        dataType: 'json',
        success: function(response){
            // $('#chats').val( $('#chats').val() + response.user_name + " : " + response.user_comment + '\n');
            // $(".chat_id").text(chat.chat_id.toString());
            // console.log(response);
        },
        error: function(error){
            console.log("some error occured in post route"+error);
        }
    });
    return false;
}

function update_chat(){
    $.ajax({
        url : "/chats/" + $(".chat_id").text(),
        type: 'get',
        contentType: 'application/json',
        success: function(response){
            console.log(response);
            if(response.length != 0){
                response.forEach(function(chat){
                    $('#chats').val( $('#chats').val() + chat.user_name + " : " + chat.user_comment + '\n');
                    $(".chat_id").text(chat.id);
                });
            };
        },
        error: function(error){
            console.log("some error occured in get route" + error);
        }
    });
}

setInterval(update_chat,2000);
