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

        <p class="forgot-password" @click="showResetForm = true">Forgot password?</p>

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

    <!-- Forgot Password Modal -->
    <div v-if="showResetForm" class="modal">
      <div class="modal-content">
        <span class="close" @click="showResetForm = false">&times;</span>
        <h3>Reset Password</h3>
        <p>Enter your email to receive a password reset link.</p>
        <input type="email" v-model="resetEmail" placeholder="Enter your email" required />
        <button @click="resetPassword" :disabled="resetLoading">
          <span v-if="!resetLoading">Send Reset Link</span>
          <span v-else>Sending...</span>
        </button>
        <p v-if="resetMessage" class="reset-message">{{ resetMessage }}</p>
      </div>
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
      showResetForm: false,
      resetEmail: "",
      resetLoading: false,
      resetMessage: "",
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

    async resetPassword() {
      this.resetLoading = true;
      this.resetMessage = "";

      try {
        const response = await axios.post("http://localhost:5000/api/auth/reset-password", {
          email: this.resetEmail,
        });

        console.log("Password reset email sent:", response.data);
        this.resetMessage = "✅ Reset link sent! Check your email.";
      } catch (error) {
        console.error("Reset error:", error.response ? error.response.data : error.message);
        this.resetMessage = error.response?.data?.message || "❌ Failed to send reset link.";
      } finally {
        this.resetLoading = false;
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

/* Forgot Password */
.forgot-password {
  font-size: 14px;
  color: #1a3bb4;
  cursor: pointer;
  margin-bottom: 1rem;
}

.forgot-password:hover {
  text-decoration: underline;
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 350px;
}

.modal-content h3 {
  color: #1a3bb4;
  margin-bottom: 10px;
}

.modal-content input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.modal-content button {
  width: 100%;
  background: #1a3bb4;
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
}

.modal-content button:hover {
  background: #153191;
}

/* Close Button */
.close {
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 20px;
  cursor: pointer;
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

/* Reset Message */
.reset-message {
  color: green;
  font-size: 14px;
  margin-top: 10px;
}
</style>
