<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (enter to add):</label>
            <input type="text" name="new-message" v-model="newMessage">
            <p class="red-text" v-if="feedback"> {{feedback}} </p>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'
export default {
    name: 'NewMessage', 
    props: ['name', 'chatName'],
    data(){
        return{
            newMessage: null,
            feedback: null
        }
    },
    methods: {
        addMessage(){
            // is chat name public? i.e. set to null so public chat shows
            this.chatName == 'public' ? this.chatName = null : null

            if(this.newMessage){
                this.feedback = null // encase ELSE set value prior
                db.collection('messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now(),
                    chatName: this.chatName
                }).catch(err => {
                    console.log(err)
                    this.feedback = 'Something went wrong'
                })
                this.newMessage = null // reset the message input
            }else{
                this.feedback = 'Please enter a message'
            }
            // console.log(this.newMessage, this.name, Date.now());
            
        }
    }
}
</script>