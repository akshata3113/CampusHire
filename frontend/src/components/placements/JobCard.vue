<template>
  <div class="job-card">
    <div class="job-header">
      <img :src="job.companyLogo" alt="Company Logo" class="company-logo" />
      <div>
        <h3 class="job-title">{{ job.title }}</h3>
        <p class="company-name">{{ job.company }}</p>
      </div>
      <button class="save-job">
        <i class="fas fa-bookmark"></i> Save Job
      </button>
    </div>

    <p class="job-info"><strong>Skills:</strong> {{ job.skills.join(", ") }}</p>
    <p class="job-info"><strong>Location:</strong> {{ job.location }}</p>
    <p class="job-info"><strong>Bond:</strong> {{ job.bond }}</p>

    <div class="job-meta">
      <span class="salary">💰 {{ job.salary }} LPA</span>
      <span class="applicants">👥 {{ job.applicants }} Students applied</span>
    </div>

    <div class="job-actions">
      <button class="apply-btn">Apply Now</button>
      <div class="job-tags">
        <span class="tag">Last date: {{ job.lastDate }}</span>
        <span class="tag">Handbook</span>
        <span class="tag">View job details</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    job: Object
  }
};
</script>

<style scoped>
/* Job Card */
.job-card {
  background: white;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 15px;
}

/* Header */
.job-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.company-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.job-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 2px;
}

.company-name {
  font-size: 14px;
  color: gray;
}

/* Job Info */
.job-info {
  font-size: 14px;
  margin: 5px 0;
}

/* Meta Information */
.job-meta {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.salary,
.applicants {
  font-size: 14px;
  font-weight: bold;
}

/* Actions */
.job-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.apply-btn {
  background: #ff3b3b;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s ease;
}

.apply-btn:hover {
  background: #d92626;
}

/* Tags */
.job-tags {
  display: flex;
  gap: 8px;
}

.tag {
  background: #f1f1f1;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  transition: 0.3s;
}

.tag:hover {
  background: #ddd;
}

/* Save Job Button */
.save-job {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
}

.save-job:hover {
  text-decoration: underline;
}
</style>
