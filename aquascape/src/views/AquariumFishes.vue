<template>
  <div class="fishes-page">
    <h1>Popular Aquarium Fishes</h1>
    <div class="filters">
      <label for="water">Water Type:</label>
      <select id="water" v-model="selectedWater">
        <option value="">All</option>
        <option value="freshwater">Freshwater</option>
        <option value="saltwater">Saltwater</option>
      </select>

      <label for="diet">Diet Type:</label>
      <select id="diet" v-model="selectedDiet">
        <option value="">All</option>
        <option value="Omnivorous">Omnivorous</option>
        <option value="Carnivorous">Carnivorous</option>
        <option value="Herbivorous">Herbivorous</option>
      </select>
    </div>
    <div class="fish-list">
      <FishCard
        v-for="(fish, index) in filteredFishes"
        :key="index"
        :image="fish.image"
        :name="fish.name"
        :water="fish.water"
        :scientificName="fish.scientificName"
        :waterParams="fish.waterParams"
        :diet="fish.diet"
        :tankSize="fish.tankSize"
      />
    </div>
  </div>
</template>

<script>
import { useFishStore } from "../stores/fish.js";
import FishCard from "../components/FishCard.vue";

export default {
  name: "AquariumFishes",
  components: { FishCard },
  data() {
    return {
      fishStore: useFishStore(),
      selectedWater: "",
      selectedDiet: "",
    };
  },
  computed: {
    filteredFishes() {
      return this.fishStore.filterFishes({
        water: this.selectedWater,
        diet: this.selectedDiet,
      });
    },
  },
  created() {
    this.fishStore.fetchFishData();
  },
};
</script>

  
  <style scoped>
  .fishes-page {
    text-align: center;
    padding: 20px;
    padding-bottom: 25px;
    margin-bottom: 25px;
  }
  
  h1 {
    color: #ffffff;
  }
  
  .filters {
    margin-bottom: 20px;
  }
  
  .filters label {
    margin-right: 10px;
    font-size: 1rem;
    color: #ffffff;
  }
  
  .filters select {
    margin-right: 20px;
    padding: 5px 10px;
    font-size: 1rem;
  }
  
  .fish-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  </style>
  