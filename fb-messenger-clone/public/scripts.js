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
    //console.log("scripts.js data from socket.on(chat message)", data)
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
   let message_array = message_string.split(' '); 
   console.log(message_array); 
    const result = message_array.map((word) => {
        const lowerCaseWord = word.toLowerCase();
        if (EMOJI_SEARCH_REPLACE.hasOwnProperty(lowerCaseWord)) {
            return EMOJI_SEARCH_REPLACE[lowerCaseWord]; 
        }
        return word; 
    });
    
    return result.join(' '); 
}; 


function emojiSearchAndReplace_character(message_string){
    let result = ''; 
    let word = ''; 
    let string_len = message_string.length; 

    for(let i =0; i<string_len; i++){
        const current_char = message_string[i]; 

        if (current_char.match(/[a-zA-Z0-9]/)){
            word += current_char; 
        } else{
            let lower_case_word = word.toLowerCase(); 
            if (EMOJI_SEARCH_REPLACE.hasOwnProperty( lower_case_word )){
                result += EMOJI_SEARCH_REPLACE[lower_case_word]; 
            } else { 
                result += word; 
            }
            result += current_char; 
            word = ''; 
        }
    }
    
    if (word) {
        if (EMOJI_SEARCH_REPLACE.hasOwnProperty(word.toLowerCase())) {
            result += EMOJI_SEARCH_REPLACE[word.toLowerCase()];
        } else {
            result += word;
        }
    }
    return result; 
}

function appendMessage(data, type) {
    const messages = document.getElementById('messages');
    const message = document.createElement('div');
    message.className = `message ${type}`;
    data.content = emojiSearchAndReplace_character(data.content); 
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
