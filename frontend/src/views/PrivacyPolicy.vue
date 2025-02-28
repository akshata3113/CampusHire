<template>
  <div class="privacy-container">
    <h1>Privacy Policy</h1>
    <p class="intro">
      Your privacy is our top priority. We are committed to safeguarding your data and ensuring transparency.
    </p>

    <div class="privacy-sections">
      <div class="privacy-item" v-for="(policy, index) in policies" :key="index">
        <img :src="policy.icon" alt="Privacy Icon" />
        <div class="privacy-content">
          <h2>{{ policy.title }}</h2>
          <p>{{ policy.description }}</p>
        </div>
      </div>
    </div>

    <div class="contact-info">
      <p>For any questions, reach out to us at:</p>
      <p><strong>Email:</strong> privacy@campushire.com</p>
      <p><strong>Phone:</strong> +91 9876543210</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      policies: [
        {
          title: "Data Security",
          description: "We use advanced encryption to protect your personal information.",
          icon: "https://cdn-icons-png.flaticon.com/512/1021/1021032.png"
        },
        {
          title: "No Unauthorized Sharing",
          description: "Your data will never be sold or shared without your consent.",
          icon: "https://cdn-icons-png.flaticon.com/512/807/807311.png"
        },
        {
          title: "Transparency",
          description: "We ensure clear communication about how your data is used.",
          icon: "https://cdn-icons-png.flaticon.com/512/3501/3501273.png"
        },
        {
          title: "User Control",
          description: "You can update or delete your data anytime through account settings.",
          icon: "https://cdn-icons-png.flaticon.com/512/2103/2103658.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
.privacy-container {
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  margin: auto;
}

h1 {
  font-size: 2.5rem;
  color: #222;
  margin-bottom: 10px;
}

.intro {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

/* Privacy Sections */
.privacy-sections {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.privacy-item {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.privacy-item:hover {
  transform: scale(1.02);
}

.privacy-item img {
  width: 60px;
  height: 60px;
}

.privacy-content {
  text-align: left;
}

h2 {
  font-size: 1.5rem;
  color: #222;
  margin-bottom: 5px;
}

p {
  font-size: 1rem;
  color: #555;
}

/* Contact Info */
.contact-info {
  margin-top: 2rem;
  padding: 1rem;
  background: #f1f1f1;
  border-radius: 10px;
}
</style>
