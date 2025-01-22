<template>
  <div class="article-list-page">
    <Banner 
      title="Discover Aquarium Knowledge" 
      subtitle="Read our articles about aquariums, fishkeeping, and aquascaping!" 
    />
    <h1>Our Articles</h1>
    <div class="article-list">
      <ArticleCard
        v-for="(article, index) in articles"
        :key="index"
        :name="article.name"
        :description="article.description"
        :id="article.id"
      />
    </div>
  </div>
</template>

<script>
import { useArticleStore } from "../stores/articles.js";
import ArticleCard from "../components/ArticleCard.vue";
import Banner from "../components/Banner.vue";

export default {
  name: "ArticleList",
  components: { ArticleCard, Banner },
  data() {
    return {
      articleStore: useArticleStore(),
    };
  },
  computed: {
    articles() {
      return this.articleStore.articles;
    },
  },
  created() {
    if (this.articleStore.articles.length === 0) {
      this.articleStore.fetchArticles();
    }
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
