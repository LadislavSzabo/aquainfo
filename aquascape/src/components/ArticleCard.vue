<template>
  <div class="article-card">
    <router-link :to="`/article/${id}`" class="article-link">
      <div class="article-content">
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
        <button class="read-more">Read More</button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
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
  background: #0e1977;
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
</style>
