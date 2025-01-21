<template>
  <div>
    <Banner title="Welcome to Aquarium World" subtitle="Explore tips, tricks, and everything about aquariums!" />
    <div class="home-sections">
      <div class="section1">
        <h2>Explore Our Articles</h2>
        <p>Dive into guides, tips, and tricks to create the perfect aquarium.</p>
        <router-link to="/article-list" class="btn">Read Articles</router-link>
      </div>
      <div class="section2">
        <h2>Discover Aquarium Fishes</h2>
        <p>Learn about different fish species and how to care for them.</p>
        <router-link to="/aquarium-fishes" class="btn">View Fishes</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";

export default {
  name: "Home",
  components: {
    Banner,
  },
};
</script>

<style scoped>
.home-sections {
  display: flex;
  justify-content: space-around;
  padding: 40px 20px;
  gap: 20px;
}

.section1 {
  
  background-image: url(../assets/img/articles.jpg);
  background-size: cover;
  color: rgb(255, 255, 255);
  text-decoration: solid;
  padding: 120px;
  border-radius: 10px;
  max-height: max-content;
  text-align: center;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.section2 {
  background-image: url(../assets/img/fish.jpg);
  background-size: cover;
  color:rgb(255, 255, 255);
  padding: 120px;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.section h2 {
  margin-bottom: 10px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  color: white;
  background: #3498db;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 10px;
  transition: background 0.3s;
}

.btn:hover {
  background: #2980b9;
}
</style>
