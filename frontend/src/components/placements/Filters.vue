<template>
  <div class="filters">
    <h3>Job Filters</h3>

    <div class="filter-group">
      <h4>Job Location</h4>
      <div v-for="location in locations" :key="location.value">
        <input
          type="checkbox"
          :id="location.value"
          :value="location.value"
          v-model="selectedFilters.location"
        />
        <label :for="location.value">{{ location.label }}</label>
      </div>
    </div>

    <div class="filter-group">
      <h4>Job Type</h4>
      <div v-for="jobType in jobTypes" :key="jobType.value">
        <input
          type="checkbox"
          :id="jobType.value"
          :value="jobType.value"
          v-model="selectedFilters.jobType"
        />
        <label :for="jobType.value">{{ jobType.label }}</label>
      </div>
    </div>

    <div class="filter-group">
      <h4>Experience Level</h4>
      <div v-for="exp in experienceLevels" :key="exp.value">
        <input
          type="checkbox"
          :id="exp.value"
          :value="exp.value"
          v-model="selectedFilters.experience"
        />
        <label :for="exp.value">{{ exp.label }}</label>
      </div>
    </div>

    <div class="filter-group">
      <h4>Salary Range</h4>
      <select v-model="selectedFilters.salary">
        <option value="">Select</option>
        <option v-for="salary in salaryRanges" :key="salary.value" :value="salary.value">
          {{ salary.label }}
        </option>
      </select>
    </div>

    <div class="filter-group">
      <h4>Industry</h4>
      <select v-model="selectedFilters.industry">
        <option value="">Select</option>
        <option v-for="industry in industries" :key="industry.value" :value="industry.value">
          {{ industry.label }}
        </option>
      </select>
    </div>

    <button @click="applyFilters" class="apply-btn">Apply Filters</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { defineEmits } from "vue";

const emit = defineEmits(["filterJobs"]);

const selectedFilters = reactive({
  location: [],
  jobType: [],
  experience: [],
  salary: "",
  industry: "",
});

const locations = [
  { label: "Remote", value: "remote" },
  { label: "On-Site", value: "onsite" },
  { label: "Hybrid", value: "hybrid" },
];

const jobTypes = [
  { label: "Full Time", value: "full-time" },
  { label: "Part Time", value: "part-time" },
  { label: "Internship", value: "internship" },
];

const experienceLevels = [
  { label: "Entry Level", value: "entry" },
  { label: "Mid Level", value: "mid" },
  { label: "Senior Level", value: "senior" },
];

const salaryRanges = [
  { label: "0-3 LPA", value: "0-3" },
  { label: "3-6 LPA", value: "3-6" },
  { label: "6-10 LPA", value: "6-10" },
  { label: "10+ LPA", value: "10+" },
];

const industries = [
  { label: "IT & Software", value: "it" },
  { label: "Finance", value: "finance" },
  { label: "Marketing", value: "marketing" },
  { label: "Healthcare", value: "healthcare" },
];

const applyFilters = () => {
  emit("filterJobs", selectedFilters);
};
</script>

<style scoped>
.filters {
  width: 280px;
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.filter-group {
  margin-bottom: 12px;
}

h4 {
  margin: 8px 0;
}

input[type="checkbox"] {
  margin-right: 8px;
}

select {
  width: 100%;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.apply-btn {
  width: 100%;
  padding: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.apply-btn:hover {
  background-color: #0056b3;
}
</style>
