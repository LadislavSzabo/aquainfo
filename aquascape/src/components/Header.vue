<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/aquarium-fishes">Fishes</router-link></li>
        <li><router-link to="/article-list">Articles</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  background-color: #0a3d62;
  color: white;
  padding: 10px;
}
nav ul {
  display: flex;
  list-style: none;
  gap: 15px;
}
nav a {
  text-decoration: none;
  color: white;
}
nav a:hover {
  text-decoration: underline;
}
</style>
