<template>
  <div class="chat-container">
    <h2>Chat with {{ selectedUser.name }}</h2>
    <div class="chat-box">
      <div v-for="msg in messages" :key="msg.id" :class="['message', msg.sender]">
        {{ msg.text }}
      </div>
    </div>
    <div class="input-box">
      <input v-model="newMessage" type="text" placeholder="Type a message..." @keyup.enter="sendMessage" />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedUser"],
  data() {
    return {
      messages: [],
      newMessage: "",
    };
  },
  methods: {
    async sendMessage() {
      if (this.newMessage.trim()) {
        this.messages.push({ id: Date.now(), text: this.newMessage, sender: "you" });
        this.newMessage = "";
      }
    },
  },
};
</script>

<style scoped>
.chat-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
}
.chat-box {
  flex: 1;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 10px;
}
.message {
  padding: 8px;
  margin: 5px 0;
  border-radius: 5px;
}
.message.you {
  background: #d1e7ff;
  align-self: flex-end;
}
.input-box {
  display: flex;
}
.input-box input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
}
.input-box button {
  padding: 8px;
  background: blue;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
