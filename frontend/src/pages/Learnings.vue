<template>
  <div class="learnings-container">
    <h1 class="heading">Learnings</h1>
    <p class="subheading">Explore video tutorials and resources to prepare for placements.</p>
    
    <div class="categories">
      <button :class="{ active: selectedCategory === 'Personal Grooming' }" @click="setCategory('Personal Grooming')">
        Personal Grooming
      </button>
      <button :class="{ active: selectedCategory === 'Interview Preparation' }" @click="setCategory('Interview Preparation')">
        Interview Preparation
      </button>
      <button :class="{ active: selectedCategory === 'Tech Trends & Questions' }" @click="setCategory('Tech Trends & Questions')">
        Tech Trends & Questions
      </button>
    </div>
    
    <div class="video-list" v-if="selectedVideos.length">
      <div v-for="(video, index) in selectedVideos" :key="index" class="video-card">
        <a :href="video.link" target="_blank">
          <img :src="video.thumbnail" alt="Video Thumbnail">
        </a>
        <p>{{ video.title }}</p>
      </div>
    </div>
    <p v-else class="no-videos">No videos available for this category.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: 'Personal Grooming',
      videos: {
        'Personal Grooming': [
          { title: 'Grooming Tips', link: 'https://youtu.be/5NFs9tAgMyQ?si=sLwPWWoCr8exDngy', thumbnail: 'https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png' },
          { title: 'Body Language Tips', link: 'https://youtu.be/Go4GVvcS02Y?si=tvZm1sQQ7LB1dV8j', thumbnail: 'https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png' }
        ],
        'Interview Preparation': [
          { title: 'Common Interview Questions', link: 'https://youtu.be/RfFbA5uHqqw?si=_E5nSYRCgtvfVUhw', thumbnail: 'https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png' },
          { title: 'Tech Interview Questions', link: 'https://youtu.be/n9baKDP91ko?si=KaHdUXl6LVHozuEL', thumbnail: 'https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png' }
        ],
        'Tech Trends & Questions': [
          { title: 'Latest Tech Trends', link: 'https://youtu.be/2rN0XTW8dU8?si=OGgBx9WiwhoiasMk', thumbnail: 'https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png' },
         { title: 'Top tech jobs', link: 'https://youtu.be/en0SLDyj_UI?si=0s5Iw1zsbyJeZ3tW', thumbnail: 'https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png' }
        ]
      }
    };
  },
  computed: {
    selectedVideos() {
      return this.videos[this.selectedCategory] || [];
    }
  },
  methods: {
    setCategory(category) {
      this.selectedCategory = category;
    }
  }
};
</script>

<style scoped>
.learnings-container {
  text-align: center;
  padding: 20px;
}
.heading {
  font-size: 2rem;
  font-weight: bold;
}
.subheading {
  color: gray;
  margin-bottom: 20px;
}
.categories button {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: lightgray;
  border-radius: 5px;
}
.categories .active {
  background-color: blue;
  color: white;
}
.video-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.video-card {
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  width: 200px;
  text-align: center;
}
.video-card img {
  width: 100%;
  border-radius: 10px;
}
</style>
