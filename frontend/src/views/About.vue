<template>
  <div class="about-container">
    <p class="about-title">Welcome to CampusHire, your gateway to career success!</p>

    <!-- Image Carousel -->
    <div class="carousel">
      <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="slide">
          <img :src="slide.image" alt="CampusHire Feature" />
          <div class="slide-text">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </div>
      <button @click="prevSlide" class="prev">&#10094;</button>
      <button @click="nextSlide" class="next">&#10095;</button>
    </div>

    <!-- Highlights Grid -->
    <div class="highlights">
      <div class="highlight-card" v-for="(feature, index) in features" :key="index">
        <img :src="feature.icon" alt="Feature Icon" />
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      slides: [
        {
          image: "https://www.eace.org/assets/images/Career%20Opportunities.jpg",
          title: "Find the Perfect Job",
          description: "Discover career opportunities that align with your skills and interests."
        },
        {
          image: "https://uploads-ssl.webflow.com/5aaee34b7fb511129d1ffaa7/5ca16405b9de9c218eb56103_5%20job%20search%20tools%20at%20work.jpg",
          title: "Boost Your Resume",
          description: "Get expert tips to craft a resume that stands out in the crowd."
        },
        {
          image: "https://history-computer.com/wp-content/uploads/2022/09/largest-telecommunications-companies-header-scaled.jpg",
          title: "Connect with Companies",
          description: "Network with top companies and build professional relationships."
        }
      ],
      features: [
        {
          icon: "https://cdn-icons-png.flaticon.com/128/2991/2991148.png",
          title: "Smart Job Matching",
          description: "AI-driven recommendations to match your profile with the best opportunities."
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/128/2333/2333132.png",
          title: "Skill Assessment Tests",
          description: "Take interactive quizzes to test and improve your skills."
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/128/3135/3135758.png",
          title: "Industry Expert Talks",
          description: "Gain insights from professionals through webinars and live sessions."
        }
      ]
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }
  }
};
</script>

<style scoped>
.about-container {
  text-align: center;
  padding: 2rem;
}

.about-title {
  font-size: 2.8rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: #333;
  margin-bottom: 20px;
}

/* Image Carousel */
.carousel {
  position: relative;
  width: 90%;
  max-width: 1100px; /* Increased size */
  height: 500px; /* Bigger size */
  margin: auto;
  overflow: hidden;
  border-radius: 10px;
}

.slides {
  display: flex;
  transition: transform 0.6s ease-in-out;
}

.slide {
  position: relative;
  min-width: 100%;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image fills the space properly */
  border-radius: 10px;
}

/* Direct Text Overlay without Box */
.slide-text {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-align: center;
  width: 80%;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7); /* Soft shadow for readability */
}

.slide-text h2 {
  font-size: 2rem;
  font-weight: bold;
}

.slide-text p {
  font-size: 1.2rem;
  margin-top: 5px;
}

/* Carousel Navigation Buttons */
.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 22px;
}

.prev {
  left: 15px;
}
.next {
  right: 15px;
}

/* Highlights Grid */
.highlights {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin-top: 3rem;
}

.highlight-card {
  width: 230px;
  padding: 1.5rem;
  border-radius: 12px;
  background: #f9f9f9;
  text-align: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;
}

.highlight-card:hover {
  transform: scale(1.05);
}

.highlight-card img {
  width: 60px;
  margin-bottom: 12px;
}

h3 {
  font-size: 1.4rem;
  font-weight: bold;
  color: #222;
}

p {
  font-size: 1.1rem;
  color: #555;
  margin-top: 8px;
}
</style>
