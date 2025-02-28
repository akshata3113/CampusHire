<template>
  <div class="messages-container">
    <MessageList @selectConversation="openConversation" />
    <MessageChat :selectedUser="selectedUser" v-if="selectedUser" />
  </div>
</template>

<script>
import MessageList from "@/components/messages/MessageList.vue";
import MessageChat from "@/components/messages/MessageChat.vue";

export default {
  components: {
    MessageList,
    MessageChat,
  },
  data() {
    return {
      selectedUser: null,
    };
  },
  methods: {
    openConversation(user) {
      this.selectedUser = user;
    },
  },
};
</script>

<style scoped>
.messages-container {
  display: flex;
  height: 100vh;
}
</style>
