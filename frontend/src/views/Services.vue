<template>
  <div class="services-container">
    <h1>Our Services</h1>
    <p>We provide opportunities and resources to help students build their careers.</p>

    <div class="services-grid">
      <div class="service-item" v-for="(service, index) in services" :key="index" :class="{'reverse': index % 2 !== 0}">
        <img :src="service.image" alt="Service Image" />
        <div class="service-content">
          <h2>{{ service.title }}</h2>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Verified Company Profiles",
          description: "We ensure only genuine and trusted companies post jobs.",
          image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        },
        {
          title: "Student Portfolio Showcase",
          description: "Students can highlight their projects, skills, and achievements.",
          image: "https://cdn-icons-png.flaticon.com/512/2333/2333492.png"
        },
        {
          title: "Campus Recruitment Events",
          description: "Stay updated about upcoming placement drives in your college.",
          image: "https://cdn-icons-png.flaticon.com/512/2910/2910793.png"
        },
        {
          title: "Alumni Network",
          description: "Connect with alumni for career advice and job referrals.",
          image: "https://cdn-icons-png.flaticon.com/512/2333/2333561.png"
        },
        {
          title: "Internship & Training Programs",
          description: "Find the best internships and skill-building programs.",
          image: "https://cdn-icons-png.flaticon.com/512/2333/2333585.png"
        },
        {
          title: "One-Click Job Applications",
          description: "Apply to multiple jobs quickly with a single click.",
          image: "https://cdn-icons-png.flaticon.com/512/3039/3039352.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
.services-container {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #222;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

/* Services Grid */
.services-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}

.service-item {
  display: flex;
  align-items: center;
  width: 80%;
  gap: 30px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.service-item:hover {
  transform: scale(1.02);
}

.service-item.reverse {
  flex-direction: row-reverse;
}

.service-item img {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

.service-content {
  text-align: left;
  max-width: 500px;
}

h2 {
  font-size: 1.8rem;
  color: #222;
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
  color: #555;
}
</style>
