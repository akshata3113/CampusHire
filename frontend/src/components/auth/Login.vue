<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Welcome Back</h2>
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="email">Email</label>
          <div class="input-field">
            <span class="icon">📧</span>
            <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
          </div>
        </div>

        <div class="input-group">
          <label for="password">Password</label>
          <div class="input-field">
            <span class="icon">🔒</span>
            <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
          </div>
        </div>

        <button type="submit" class="login-button" :disabled="loading">
          <span v-if="!loading">Login →</span>
          <span v-else>Logging in...</span>
        </button>

        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>

      <p class="register-link">
        Don't have an account? <router-link to="/register">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      this.loading = true;
      this.errorMessage = "";

      console.log("Attempting to log in with:", this.email, this.password);

      try {
        const response = await axios.post("http://localhost:5000/api/auth/login", {
          email: this.email,
          password: this.password,
        });

        console.log("Login successful:", response.data);

        // Store JWT token
        localStorage.setItem("token", response.data.token);

        // Redirect to dashboard
        this.$router.push("/dashboard");
      } catch (error) {
        console.error("Login error:", error.response ? error.response.data : error.message);
        this.errorMessage = error.response?.data?.message || "Login failed. Please try again.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
/* Background Styling */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eaf2ff;
}

/* Login Box */
.login-box {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center;
}

/* Headline */
h2 {
  color: #1a3bb4;
  margin-bottom: 1.5rem;
}

/* Input Group */
.input-group {
  text-align: left;
  margin-bottom: 1rem;
}

.input-group label {
  font-size: 14px;
  font-weight: bold;
  color: #1a3bb4;
  display: block;
  margin-bottom: 0.5rem;
}

/* Input Field */
.input-field {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
  background: white;
}

.input-field .icon {
  margin-right: 8px;
  font-size: 18px;
}

.input-field input {
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
  color: #333;
  background: transparent;
}

/* Login Button */
.login-button {
  width: 100%;
  background: #1a3bb4;
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.login-button:hover {
  background: #153191;
}

/* Error Message */
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

/* Register Link */
.register-link {
  margin-top: 1rem;
  font-size: 14px;
}

.register-link a {
  color: #1a3bb4;
  text-decoration: none;
  font-weight: bold;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
