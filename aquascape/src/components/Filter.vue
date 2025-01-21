<template>
    <div class="filter">
      <label for="water">Water Type:</label>
      <select id="water" v-model="filters.water">
        <option value="">All</option>
        <option value="saltwater">Saltwater</option>
        <option value="freshwater">Freshwater</option>
      </select>
  
      <label for="diet">Diet:</label>
      <select id="diet" v-model="filters.diet">
        <option value="">All</option>
        <option value="Omnivorous">Omnivorous</option>
        <option value="Carnivorous">Carnivorous</option>
        <option value="Herbivorous">Herbivorous</option>
      </select>
  
      <button @click="applyFilters">Apply Filters</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "FishFilter",
    data() {
      return {
        filters: {
          water: "",
          diet: ""
        }
      };
    },
    emits: ["filter"],
    methods: {
      applyFilters() {
        this.$emit("filter", this.filters);
      }
    }
  };
  </script>
  
  <style scoped>
  .filter {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  label {
    font-weight: bold;
  }
  </style>
  