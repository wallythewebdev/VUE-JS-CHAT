<template>
    <div class="chat container">
        <h2 class="center teal-text">Chat Group: {{ chatName }}</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <span class="teal-text">{{ message.name }}</span>
                        <span class="grey-text text-darken-3">{{ message.content }}</span>
                        <span class="grey-text time">{{ message.timestamp }}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card-action">
            <NewMessage :name="name" :chatName="chatName" />
        </div>
    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
    name: 'Chat',
    props: ['name', 'chatName'],
    components: {
        NewMessage,
    },
    data(){
        return{
            messages: [],
        }
    },
    created(){
        let ref = db.collection(`messages`).orderBy('timestamp');

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added'){
                    let doc = change.doc
                    if(doc.data().chatName == this.chatName){
                        this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll'),
                        })
                    }
                }
            })
        })
        

        
    }
}
</script>

<style>
.chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
}

.chat li {
    text-align: left;
}

.chat span {
    font-size: 1.4em;
    margin: 0 5px;
}

.chat .time {
    display: block;
    font-size: 0.8em;
}

.messages {
    max-height: 300px;
    overflow: auto;
}
</style>