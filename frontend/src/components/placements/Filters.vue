<template>
  <div class="filters">
    <div class="filter-header">
      <h3>Job Filter</h3>
      <button class="clear-btn">Clear All</button>
    </div>

    <div class="filter-group">
      <h4>Job Location <span class="clear">Clear</span></h4>
      <div class="filter-option">
        <input type="checkbox" id="on-site" v-model="filters.location.onSite" />
        <label for="on-site">On Site <span class="count">150 jobs</span></label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="remote" v-model="filters.location.remote" />
        <label for="remote">Remote <span class="count">180 jobs</span></label>
      </div>
    </div>

    <div class="filter-group">
      <h4>Job Type <span class="clear">Clear</span></h4>
      <div class="filter-option">
        <input type="checkbox" id="full-time" v-model="filters.type.fullTime" />
        <label for="full-time">Full Time <span class="count">150 jobs</span></label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="freelance" v-model="filters.type.freelance" />
        <label for="freelance">Freelance <span class="count">25 jobs</span></label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="part-time" v-model="filters.type.partTime" />
        <label for="part-time">Part Time <span class="count">180 jobs</span></label>
      </div>
    </div>

    <div class="filter-group">
      <h4>Experience Level <span class="clear">Clear</span></h4>
      <div class="filter-option">
        <input type="checkbox" id="entry" v-model="filters.experience.entryLevel" />
        <label for="entry">Entry Level <span class="count">100 jobs</span></label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="intermediate" v-model="filters.experience.intermediate" />
        <label for="intermediate">Intermediate <span class="count">200 jobs</span></label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="expert" v-model="filters.experience.expert" />
        <label for="expert">Expert <span class="count">50 jobs</span></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        location: { onSite: false, remote: false },
        type: { fullTime: false, freelance: false, partTime: false },
        experience: { entryLevel: false, intermediate: false, expert: false },
      },
    };
  },
};
</script>

<style scoped>
.filters {
  width: 280px;
  background: white;
  padding: 18px;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
}

/* Header with Clear Button */
.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.clear-btn {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
}

.clear-btn:hover {
  text-decoration: underline;
}

/* Section Headers */
.filter-group {
  margin-bottom: 16px;
}

.filter-group h4 {
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
}

.clear {
  font-size: 12px;
  color: #007bff;
  cursor: pointer;
}

.clear:hover {
  text-decoration: underline;
}

/* Checkbox Styling */
.filter-option {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

label {
  font-size: 14px;
  color: #333;
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
}

.count {
  color: #777;
  font-size: 12px;
}
</style>
