<template>
  <div class="article-card">
    <div class="article-content">
      <router-link :to="`/article/${id}`" class="article-link">
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
      </router-link>
      <div class="card-actions">
        <button class="favorite-button" @click="toggleFavorite">
          <span :class="{ favorited: isFavorited }">★</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useArticleStore } from "../stores/articles.js";

export default {
  name: "ArticleCard",
  props: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    id: { type: Number, required: true },
  },
  data() {
    return {
      articleStore: useArticleStore(),
    };
  },
  computed: {
    isFavorited() {
      return this.articleStore.isFavorite(this.id);
    },
  },
  methods: {
    toggleFavorite() {
      this.articleStore.toggleFavorite(this.id);
    },
  },
};
</script>


<style scoped>
.article-card {
  width: 100%;
  max-width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  background: #0a3d62;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  padding: 10px 10px;
  margin: 20px;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.article-link {
  text-decoration: none;
  color: inherit;
}

.article-content {
  padding: 15px;
  text-align: center;
}

.article-content h3 {
  font-size: 1.5rem;
  color: #ffffff;
  margin: 0 0 10px;
}

.article-content p {
  font-size: 1rem;
  color: #ffffff;
  margin: 0 0 15px;
}

.read-more {
  padding: 8px 16px;
  background-color: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.read-more:hover {
  background-color: #2980b9;
}
.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.favorite-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #bbb;
  transition: color 0.3s;
}

.favorite-button .favorited {
  color: #f39c12; /* Gold color for favorited */
}

.favorite-button:hover {
  color: #f39c12;
}
</style>
