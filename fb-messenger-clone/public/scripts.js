const socket = io();
let username = prompt('Enter your name:');

socket.emit('user joined', username);

document.getElementById('send').onclick = function() {
    const input = document.getElementById('m');
    const messageContent = input.value;
    const data = { user: username, content: messageContent };

    appendMessage(data, 'sent');
    socket.emit('chat message', data);
    input.value = '';
};

socket.on('chat message', function(data) {
    console.log("scripts.js data from socket.on(chat message)", data)
    if(data.user !== username) {
        appendMessage(data, 'received');
    }
});

const EMOJI_SEARCH_REPLACE = {
    congratulations: '🎉',
    woah : '😯',
    hey: '👋',
    lol : '😂',
    like: '🤍',
    react: '⚛️',
}; 


function emoji_search_and_replace(message_string){
    /*
        Strips special characters but I want to keep the special characters in the output just not during the conversion. so
        Hey, how are you? --> 👋, how are you? 
        Hey, how are you? !-- 👋 how are you

    */
    message_string = message_string.replace(/[^a-zA-Z0-9 ]/g, '');

    /* 
    I want to make this case insensitive. 
    Right now it is case insensitive but I want to keep the case output how it was. 
    Meaning --> 
        expected    Hey How are you? --> 👋 How are you? 
        current     Hey How are you? --> 👋 how are you
    */
    let message_array = message_string.toLowerCase().split(' '); 

    /*
        Make this cleaner and better. 
    */
    for (const [index, value] of Object.entries(message_array)){
        if(value == 'congratulations'){
            message_array[index] = EMOJI_SEARCH_REPLACE['congratulations']; 
        }
        else if(value == 'woah'){
            message_array[index] = EMOJI_SEARCH_REPLACE['woah']; 
        }
        else if(value == 'hey'){
            message_array[index] = EMOJI_SEARCH_REPLACE['hey']; 
        }
        else if(value == 'lol'){
            message_array[index] = EMOJI_SEARCH_REPLACE['lol']; 
        }
        else if(value == 'like'){
            message_array[index] = EMOJI_SEARCH_REPLACE['like']; 
        }
        else{
            continue; 
        }
    }; 
   return message_array.join(' '); 
}; 

function appendMessage(data, type) {
    const messages = document.getElementById('messages');
    const message = document.createElement('div');
    message.className = `message ${type}`;
    console.log('data.content before emoji function', data.content); 
    data.content = emoji_search_and_replace(data.content); 
    console.log('data.content after emoji function', data.content); 
    message.textContent = type === 'received' ? `${data.user}: ${data.content}` : data.content;
    messages.appendChild(message);
}; 

socket.on('user list', function(userList) {
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = ''; 
    userList.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.textContent = user;
        usersDiv.appendChild(userDiv);
    });
});
