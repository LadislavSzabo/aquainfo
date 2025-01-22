<template>
  <div v-if="article">
    <div class="article-page">
      <h1>{{ article.name }}</h1>
      <p class="article-description">{{ article.description }}</p>
      <div v-html="article.text"></div>
      <router-link to="/article-list" class="back-button">← Back to Articles</router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading article...</p>
  </div>
</template>

<script>
import { useArticleStore } from "../stores/articles.js";

export default {
  name: "ArticlePage",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      article: null,
    };
  },
  computed: {
    articleStore() {
      return useArticleStore();
    },
  },
  methods: {
    async fetchArticle() {
      if (this.articleStore.articles.length === 0) {
        await this.articleStore.fetchArticles();
      }
      this.article = this.articleStore.articles.find(
        (a) => a.id === Number(this.id)
      );
    },
  },
  mounted() {
    this.fetchArticle();
  },
};
</script>


<style scoped>
.article-page {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: #ffffff;
  color: #0a3d62;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: "Arial", sans-serif;
}
.article-page h1{
  color: #0a3d62;
}
.article-header {
  text-align: center;
  margin-bottom: 30px;
}

.article-header h1 {
  font-size: 2.5rem;
  color: #0a3d62;
  margin-bottom: 10px;
}

.article-header .article-description {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin: 0;
}

.article-body {
  font-size: 1rem;
  color: #34495e;
  line-height: 1.6;
  margin-top: 20px;
}

.article-body p {
  margin-bottom: 15px;
}

.back-button {
  display: inline-block;
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #3498db;
  color: #ffffff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #2980b9;
}
h1{
  color: #000;
}
</style>
