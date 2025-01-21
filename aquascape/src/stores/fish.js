import { defineStore } from "pinia";

export const useFishStore = defineStore("fishStore", {
    state: () => ({
        fishes: [],
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
        async fetchFishData() {
            try {
                const response = await fetch("/src/data/FishData.json");
                if (response.ok) {
                    const data = await response.json();
                    this.fishes = data;
                } else {
                    console.error("Failed to load fish data.");
                }
            } catch (error) {
                console.error("Error fetching fish data:", error);
            }
        },

        getFishByName(name) {
            return this.fishes.filter((fish) => fish.name === name);
        },
    },
});
