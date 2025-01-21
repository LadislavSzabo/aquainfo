import { defineStore } from "pinia";

export const useArticleStore = defineStore("articleStore", {
    state: () => ({
        articles: [],
        favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    }),
    actions: {
        async fetchArticles() {
            if (this.articles.length === 0) {
                try {
                    const response = await fetch("/src/data/articles.json");
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
        toggleFavorite(articleId) {
            if (this.favorites.includes(articleId)) {
                this.favorites = this.favorites.filter((id) => id !== articleId);
            } else {
                this.favorites.push(articleId);
            }

            localStorage.setItem("favorites", JSON.stringify(this.favorites));
        },
        isFavorite(articleId) {
            return this.favorites.includes(articleId);
        },
    },
});
