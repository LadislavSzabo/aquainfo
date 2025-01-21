import { defineStore } from "pinia";

export const useFishStore = defineStore("fishStore", {
    state: () => ({
        fishes: [], // Empty array to hold fish data
    }),
    getters: {
        filterFishes: (state) => (criteria) => {
            return state.fishes.filter((fish) => {
                const matchesWater = criteria.water ? fish.water === criteria.water : true;
                const matchesDiet = criteria.diet ? fish.diet === criteria.diet : true;
                return matchesWater && matchesDiet;
            });
        },
    },
    actions: {
        // Action to fetch fish data from a JSON file
        async fetchFishData() {
            try {
                const response = await fetch("/src/data/FishData.json"); // Adjust path based on where your JSON file is
                if (response.ok) {
                    const data = await response.json();
                    this.fishes = data; // Set the fish data into the store
                } else {
                    console.error("Failed to load fish data.");
                }
            } catch (error) {
                console.error("Error fetching fish data:", error);
            }
        },

        // Action to get fish by name
        getFishByName(name) {
            return this.fishes.filter((fish) => fish.name === name);
        },
    },
});
