var chat_id = 0;

function update_chat(){
    $.ajax({
        url : "/chats/" + chat_id,
        type: 'get',
        contentType: 'application/json',
        success: function(response){
            chat_id = chat_id + 1;
            console.log(response);
        },
        error: function(error){
            console.log("some error occured"+error);
        }
    });
}

setInterval(update_chat,2000)
