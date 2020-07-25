# ninja_chat

## Base level project: 

this is the origianl project with no modifications or changes to the UI 

## [NINJA CHAT V1](https://ninja-chat-ad4d9.firebaseapp.com/)

## Features to add

* Ability to have seperate chat rooms 

- I think the best way to aproach this is to have a specific hash for the data base, right now the database is just called messages and all messages get put there for everyone to see - I think instead I could create a function that would say create database messages_XXXX

The user would also have a screen avalible to use log into specific chats based on the _XXXX name

This could be done with split(f)

let dbName = 'message_alpha'.split('_')[1]


* ability to reference previous chat dialog

- this could be done by adding an ID to each of the messages - then having a event listener on each of the message components. 
once clicked it could copy the innerText and paste it above the newly added message / alt could be to have a default database Key called - replied: null but once you click on the text it then gets filled with the text being replied to - add a function that checks if (replied){}

* noise when a new message is added + ability to mute

Need to look into this one a bit more.....

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
