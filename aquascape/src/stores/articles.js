import { defineStore } from "pinia";

export const useArticleStore = defineStore("articleStore", {
    state: () => ({
        articles: [], // Hold the articles here
    }),
    actions: {
        async fetchArticles() {
            if (this.articles.length === 0) {
                // Fetch articles only if not already fetched
                try {
                    const response = await fetch("/src/data/articles.json"); // Adjust the path if necessary
                    if (response.ok) {
                        const data = await response.json();
                        this.articles = data;
                    } else {
                        console.error("Failed to load articles.");
                    }
                } catch (error) {
                    console.error("Error fetching articles:", error);
                }
            }
        },
    },
});
