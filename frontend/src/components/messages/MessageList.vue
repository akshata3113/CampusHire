<template>
  <div class="message-list">
    <h2>Messages</h2>
    <ul>
      <li v-for="user in users" :key="user.id" @click="selectUser(user)">
        <span>{{ user.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: "Company A" },
        { id: 2, name: "HR - XYZ Corp" },
        { id: 3, name: "Placement Officer" },
      ],
    };
  },
  methods: {
    selectUser(user) {
      this.$emit("selectConversation", user);
    },
  },
};
</script>

<style scoped>
.message-list {
  width: 30%;
  background: #f5f5f5;
  padding: 10px;
  border-right: 1px solid #ddd;
}
.message-list ul {
  list-style: none;
  padding: 0;
}
.message-list li {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
}
.message-list li:hover {
  background: #e0e0e0;
}
</style>
