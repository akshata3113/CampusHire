<template>
  <div class="contact-container">
    <h1>Contact Us</h1>
    <p class="contact-info">Have questions? Reach out to us!</p>

    <!-- Contact Details -->
    <div class="contact-details">
      <div class="contact-card">
        <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="Email Icon" />
        <h3>Email</h3>
        <p>support@campushire.com</p>
      </div>
      <div class="contact-card">
        <img src="https://cdn-icons-png.flaticon.com/128/3059/3059594.png" alt="Phone Icon" />
        <h3>Phone</h3>
        <p>+91 9876543210</p>
      </div>
      <div class="contact-card">
        <img src="https://cdn-icons-png.flaticon.com/128/684/684908.png" alt="Location Icon" />
        <h3>Address</h3>
        <p>Mumbai, India</p>
      </div>
    </div>

    <!-- Contact Form -->
    <form class="contact-form">
      <h2>Send Us a Message</h2>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea rows="4" placeholder="Your Message" required></textarea>
      <button type="submit">Submit</button>
    </form>

    <!-- Google Map Embed -->
    <div class="map-container">
      <h2>Visit Our Office</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30235.68258070355!2d72.819444!3d19.133432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzM4LjAiTiA3MsKwNDknMDguMCJF!5e0!3m2!1sen!2sin!4v1646273905756"
        allowfullscreen=""
        loading="lazy">
      </iframe>
    </div>

    <!-- Social Media Links -->
    <div class="social-links">
      <h2>Connect With Us</h2>
      <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="Facebook" /></a>
      <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/733/733558.png" alt="Twitter" /></a>
      <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="LinkedIn" /></a>
      <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="Instagram" /></a>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #222;
  margin-bottom: 10px;
}

.contact-info {
  font-size: 1.2rem;
  color: #666;
}

/* Contact Details */
.contact-details {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 2rem;
}

.contact-card {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  width: 220px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: scale(1.05);
}

.contact-card img {
  width: 50px;
  margin-bottom: 10px;
}

/* Contact Form */
.contact-form {
  margin-top: 3rem;
  padding: 2rem;
  background: #f0f0f0;
  border-radius: 10px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  margin-bottom: 15px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.contact-form button {
  width: 100%;
  margin-top: 15px;
  padding: 12px;
  background: #007bff;
  color: white;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.contact-form button:hover {
  background: #0056b3;
}

/* Google Maps */
.map-container {
  margin-top: 3rem;
  text-align: center;
}

.map-container iframe {
  width: 90%;
  height: 350px;
  border-radius: 10px;
}

/* Social Media Links */
.social-links {
  margin-top: 3rem;
}

.social-links h2 {
  margin-bottom: 15px;
}

.social-links a {
  margin: 0 10px;
}

.social-links img {
  width: 40px;
  transition: transform 0.3s ease;
}

.social-links img:hover {
  transform: scale(1.1);
}
</style>
