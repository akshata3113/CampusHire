<template>
  <nav class="navbar">
    <!-- Logo & Title -->
    <div class="logo-section">
      <h1 class="logo">CampusHire</h1>
      <p class="sub-title">Placement Cell</p>
    </div>

    <!-- Navigation Links -->
    <div class="nav-links">
      <router-link to="/placements" class="nav-item">Placements</router-link>
      <router-link to="/companies" class="nav-item">Companies</router-link>
      <router-link to="/messages" class="nav-item">Messages</router-link>
      <router-link to="/" class="nav-item">Learning</router-link>
    </div>

    <!-- Account and Auth -->
    <div class="auth-section">
      <router-link to="/login" class="login-btn">Login</router-link>
      <router-link to="/register" class="register-btn">Register</router-link>
    </div>
  </nav>
</template>

<style scoped>
/* Navbar container */
.navbar {
  background-color: #F4F8FF; /* Light blue background */
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  color: #1E3A8A; /* Dark blue text */
}

/* Logo Section */
.logo-section {
  display: flex;
  flex-direction: column;
}

.logo {
  font-size: 28px;
  font-weight: bold;
  color: #1E3A8A; /* Dark blue */
  margin: 0;
}

.sub-title {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.8;
  margin-top: 5px;
}

/* Navigation Links */
.nav-links {
  display: flex;
  gap: 30px;
}

.nav-item {
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: #1E3A8A; /* Dark blue */
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background-color: rgba(30, 58, 138, 0.1); /* Light hover effect */
  transform: scale(1.05);
}

/* Auth Section */
.auth-section {
  display: flex;
  gap: 15px;
}

/* Login Button */
.login-btn {
  font-size: 16px;
  font-weight: 600;
  padding: 8px 18px;
  color: white;
  background-color: #2563EB; /* Deep Blue */
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.login-btn:hover {
  background-color: #1E40AF; /* Darker Blue */
  transform: scale(1.05);
}

/* Register Button */
.register-btn {
  font-size: 16px;
  font-weight: 600;
  padding: 8px 18px;
  color: white;
  background-color: #EF4444; /* Red for Register */
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.register-btn:hover {
  background-color: #DC2626; /* Darker Red */
  transform: scale(1.05);
}
</style>
