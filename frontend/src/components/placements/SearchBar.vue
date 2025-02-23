<template>
  <div class="search-bar">
    <div class="input-container">
      <i class="fas fa-search search-icon"></i>
      <input type="text" placeholder="Search a job..." v-model="query" class="search-input" />
    </div>
    <button class="save-btn">Save Search</button>
    <div class="dropdown-container">
      <select v-model="sortOption" class="sort-dropdown">
        <option>Newest</option>
        <option>Oldest</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      sortOption: "Newest",
    };
  },
};
</script>

<style scoped>
/* Search Bar Container */
.search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  margin-bottom: 20px;
}

/* Input Wrapper */
.input-container {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
}

/* Search Icon */
.search-icon {
  position: absolute;
  left: 12px;
  color: #777;
  font-size: 16px;
}

/* Search Input */
.search-input {
  width: 100%;
  padding: 10px 12px 10px 35px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: 0.3s;
}

.search-input:focus {
  border-color: #007bff;
}

/* Save Search Button */
.save-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 10px;
}

.save-btn:hover {
  background: #0056b3;
}

/* Sort Dropdown */
.dropdown-container {
  margin-left: 10px;
}

.sort-dropdown {
  border: 1px solid #ddd;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  background: white;
}
</style>
