<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          
          <!-- create input to either join to create chat -->
          <p>
            <label>
              <input name="create" type="radio" @click="createChat = !createChat"/>
              <span>Enter Chat</span>
            </label>
          </p>

          <div class="createChat" v-if="createChat">
            <label for="createChat">Enter a chat name - if chat name does not exist it will be created</label>
            <input type="text" name="createChat" v-model="chatName">
            <p v-if="feedback" class="red-text">{{feedback}}</p>
          </div>
          

          <div class="inputName" v-if="chatName">
            <label for="name">Enter your name:</label>
            <input type="text" name="name" v-model="name">
            <p v-if="feedback" class="red-text">{{feedback}}</p>
          </div>
          
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: ['fromRouter'],
  data(){
    return {
      name: null,
      feedback: null,
      createChat: false,
      chatName: null
    }
  },
  methods: {
    enterChat(){
      if(this.name){
        this.$router.push({name: 'Chat', params: { name: this.name, chatName: this.chatName } } )
      } else {
        this.feedback="you must enter a name to join the chat!"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .welcome {
    max-width: 400px;
    margin-top: 40px;
  }
  .welcome h2 {
    font-size: 3em;
  }

  .welcome button {
    margin: 30px auto
  }

  .welcome form {
    text-align: left;
  }

</style>
