var chat_id = -1;

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
            console.log("some error occured"+error);
        }
    });
}

setInterval(update_chat,2000)
