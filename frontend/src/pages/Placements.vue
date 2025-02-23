<template>
  <div class="placements-container">
    <Sidebar />
    <div class="placements-content">
      <SearchBar />
      <div class="job-section">
        <JobList />
        <Filters />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/placements/Sidebar.vue";
import SearchBar from "@/components/placements/SearchBar.vue";
import JobList from "@/components/placements/JobList.vue";
import Filters from "@/components/placements/Filters.vue";

export default {
  components: {
    Sidebar,
    SearchBar,
    JobList,
    Filters
  }
};
</script>

<style scoped>
.placements-container {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.placements-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.job-section {
  display: flex;
  gap: 20px;
}
</style>
