<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Branding -->
      <div class="footer-brand">
        <h2>CampusHire</h2>
        <p>Your career starts here!</p>
      </div>

      <!-- Quick Links -->
      <div class="footer-links">
        <router-link to="/about">About</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/privacy">Privacy Policy</router-link>
        <router-link to="/terms">Terms of Use</router-link>
      </div>

      <!-- Social Media -->
      <div class="footer-social">
        <div class="social-icons">
          <a href="#" class="icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="icon"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" class="icon"><i class="fab fa-instagram"></i></a>
        </div>
        <p>&copy; 2025 CampusHire. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Footer Background */
.footer {
  background: linear-gradient(to right, #1E3A8A, #2563EB);
  color: #F3F4F6;
  padding: 30px 0;
  text-align: center;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
}

/* Footer Layout */
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 40px;
}

/* Branding */
.footer-brand h2 {
  font-size: 24px;
  font-weight: bold;
}

.footer-brand p {
  font-size: 14px;
  opacity: 0.8;
}

/* Quick Links */
.footer-links {
  display: flex;
  gap: 20px;
}

.footer-links a {
  text-decoration: none;
  color: #F3F4F6;
  font-weight: 500;
  transition: opacity 0.3s;
}

.footer-links a:hover {
  opacity: 0.7;
  text-decoration: underline;
}

/* Social Media */
.footer-social {
  text-align: right;
}

/* Icons Styling */
.social-icons {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 8px;
}

.icon {
  color: #F3F4F6;
  font-size: 22px;
  padding: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, background 0.3s;
}

.icon:hover {
  transform: scale(1.2);
  background: rgba(255, 255, 255, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .footer-links {
    flex-direction: column;
    gap: 10px;
  }

  .footer-social {
    text-align: center;
  }
}
</style>
