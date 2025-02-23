<template>
  <div class="job-list">
    <JobCard v-for="job in jobs" :key="job.id" :job="job" />
  </div>
</template>

<script>
import JobCard from "@/components/placements/JobCard.vue";

export default {
  components: { JobCard },
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: "UI/UX Designer",
          company: "Slack Technologies",
          skills: "DSA, React, SQL, OOPS",
          location: "Bangalore",
          bond: "2 years",
          salary: "10 LPA",
          applicants: "55 Students applied",
        },
        {
          id: 2,
          title: "Mechanical Engg Trainee",
          company: "Line Corporation",
          skills: "Machine Design, Autocad, Solidwork",
          location: "Delhi",
          bond: "1 year",
          salary: "5.5 LPA",
          applicants: "55 Students applied",
        },
      ],
    };
  },
};
</script>

<style scoped>
.job-list {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
