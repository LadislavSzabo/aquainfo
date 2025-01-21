<template>
  <div class="article-list-page">
    <!-- Add the Banner component with article-specific props -->
    <Banner 
      title="Discover Aquarium Knowledge" 
      subtitle="Read our articles about aquariums, fishkeeping, and aquascaping!" 
    />
    
    <!-- Main heading -->
    <h1>Our Articles</h1>

    <!-- Article list -->
    <div class="article-list">
      <ArticleCard
        v-for="(article, index) in setupArticles"
        :key="index"
        :name="article.name"
        :description="article.description"
        :id="article.id"
      />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useArticleStore } from "../stores/articles.js";
import ArticleCard from "../components/ArticleCard.vue";
import Banner from "../components/Banner.vue";

export default {
  name: "ArticleList",
  components: {
    ArticleCard,
    Banner,
  },
  setup() {
    const articleStore = useArticleStore();

    // Fetch articles on mount if not already fetched
    onMounted(() => {
      if (articleStore.articles.length === 0) {
        articleStore.fetchArticles();
      }
    });

    // Computed property to get articles from the store
    const setupArticles = computed(() => articleStore.articles);

    return { setupArticles };
  },
};
</script>

<style scoped>
.article-list-page {
  color: white;
  min-height: 100vh;
}

h1 {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 2rem;
}

.article-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}
</style>
