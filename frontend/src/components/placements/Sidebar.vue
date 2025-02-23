<template>
  <div class="sidebar">
    <!-- Profile Section -->
    <div class="profile">
      <img :src="profilePic" alt="Profile Picture" class="profile-pic" />
      <h3 class="profile-name">Andre Salaman</h3>
      <p class="profile-email">andresalaman@gmail.com</p>
      <button class="edit-btn">Edit Profile</button>
    </div>

    <!-- Skills Section -->
    <div class="skills">
      <div class="skills-header">
        <h4>Top Skills</h4>
        <span class="edit-link">Edit</span>
      </div>
      <ul class="skills-list">
        <li v-for="skill in skills" :key="skill.name">
          <span class="skill-name">{{ skill.name }}</span>
          <span class="skill-exp">{{ skill.experience }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profilePic: "https://i.pravatar.cc/100", // Random profile image placeholder
      skills: [
        { name: "UI Design", experience: "1-2 years" },
        { name: "UX Research", experience: "1-2 years" },
        { name: "Wireframing", experience: "1-2 years" },
        { name: "Prototyping", experience: "1-2 years" },
        { name: "Bootstrap", experience: "1-2 years" },
        { name: "CSS", experience: "1-2 years" },
        { name: "HTML", experience: "1-2 years" },
      ],
    };
  },
};
</script>

<style scoped>
/* Sidebar container */
.sidebar {
  width: 260px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Profile Section */
.profile {
  text-align: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.profile-pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #007bff;
}

.profile-name {
  margin: 10px 0 5px;
  font-size: 18px;
  font-weight: bold;
}

.profile-email {
  font-size: 14px;
  color: gray;
}

.edit-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  transition: 0.3s ease;
}

.edit-btn:hover {
  background: #0056b3;
}

/* Skills Section */
.skills {
  margin-top: 15px;
}

.skills-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skills-header h4 {
  font-size: 16px;
}

.edit-link {
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
  transition: 0.3s;
}

.edit-link:hover {
  text-decoration: underline;
}

/* Skills List */
.skills-list {
  list-style: none;
  padding: 0;
  margin-top: 10px;
  max-height: 150px;
  overflow-y: auto;
}

.skills-list li {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-radius: 5px;
  background: #f8f9fa;
  margin-bottom: 5px;
  font-size: 14px;
  transition: 0.3s;
}

.skills-list li:hover {
  background: #e9ecef;
}

.skill-name {
  font-weight: 500;
}

.skill-exp {
  font-size: 12px;
  color: gray;
}
</style>
