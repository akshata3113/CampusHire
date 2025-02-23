<template>
  <div class="register-container">
    <h2>Register</h2>
    <p class="subtext">Create an account to get started</p>

    <form @submit.prevent="register">
      <label for="name">Full Name</label>
      <input v-model="form.name" type="text" id="name" placeholder="Enter your name" required />

      <label for="email">Email Address</label>
      <input v-model="form.email" type="email" id="email" placeholder="Enter your email" required />

      <label for="password">Password</label>
      <div class="password-container">
        <input
          v-model="form.password"
          :type="showPassword ? 'text' : 'password'"
          id="password"
          placeholder="Enter your password"
          required
        />
        <span @click="togglePassword" class="toggle-password" title="Show/Hide Password">
          <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
        </span>
      </div>

      <button type="submit" :disabled="loading">
        <span v-if="!loading">Register</span>
        <span v-else>Registering...</span>
      </button>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>

    <p class="or-divider">or</p>

    <div class="social-login">
      <button class="google-login">
        <i class="fab fa-google"></i> Sign up with Google
      </button>
      <button class="linkedin-login">
        <i class="fab fa-linkedin"></i> Sign up with LinkedIn
      </button>
    </div>

    <p class="login-text">
      Already have an account?
      <router-link to="/login" class="login-link">Login</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      showPassword: false, // Toggle Password Visibility
      loading: false,
      errorMessage: "",
    };
  },
  methods: {
    async register() {
      this.loading = true;
      this.errorMessage = "";

      console.log("Registering user:", this.form);

      try {
        const response = await axios.post("http://localhost:5000/api/auth/register", this.form);

        console.log("Registration successful:", response.data);

        // Store JWT token
        localStorage.setItem("token", response.data.token);

        // Redirect to dashboard
        this.$router.push("/dashboard");
      } catch (error) {
        console.error("Registration error:", error.response ? error.response.data : error.message);
        this.errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
      } finally {
        this.loading = false;
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
/* 🔹 Main Container */
.register-container {
  max-width: 420px;
  margin: 50px auto;
  padding: 35px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* 🔹 Heading */
h2 {
  margin-bottom: 10px;
  font-size: 26px;
  font-weight: 700;
  color: #1E3A8A;
}

/* 🔹 Subtext */
.subtext {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

/* 🔹 Labels */
label {
  display: block;
  text-align: left;
  font-weight: 600;
  margin: 10px 0 5px;
  color: #333;
}

/* 🔹 Input Fields */
input {
  width: 100%;
  padding: 12px;
  font-size: 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

input:focus {
  border-color: #2563EB;
  outline: none;
  box-shadow: 0 0 5px rgba(37, 99, 235, 0.3);
}

/* 🔹 Password Container */
.password-container {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #555;
  transition: color 0.3s ease-in-out;
}

.toggle-password:hover {
  color: #2563EB;
}

/* 🔹 Register Button */
button {
  width: 100%;
  background: linear-gradient(to right, #1E3A8A, #2563EB);
  color: white;
  border: none;
  padding: 12px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

button:hover {
  background: linear-gradient(to right, #2563EB, #1E3A8A);
  transform: scale(1.03);
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

/* 🔹 Error Message */
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

/* 🔹 OR Divider */
.or-divider {
  margin: 15px 0;
  font-size: 14px;
  color: #888;
  position: relative;
}

.or-divider::before,
.or-divider::after {
  content: "";
  width: 40%;
  height: 1px;
  background: #ddd;
  display: inline-block;
  margin: 0 10px;
}

/* 🔹 Social Login Buttons */
.social-login {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.google-login,
.linkedin-login {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.google-login {
  background: #db4437;
  color: white;
}

.google-login:hover {
  background: #c1351d;
}

.linkedin-login {
  background: #0077b5;
  color: white;
}

.linkedin-login:hover {
  background: #005582;
}

.google-login i,
.linkedin-login i {
  margin-right: 8px;
}

/* 🔹 Login Redirect */
.login-text {
  margin-top: 20px;
  font-size: 14px;
  color: #555;
}

.login-link {
  color: #2563EB;
  font-weight: bold;
  text-decoration: none;
}

.login-link:hover {
  text-decoration: underline;
}

/* 🔹 Responsive */
@media (max-width: 480px) {
  .register-container {
    width: 90%;
  }
}
</style>
