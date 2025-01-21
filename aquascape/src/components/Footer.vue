<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Branding Section -->
      <div class="footer-branding">
        <h3>Aqua Info</h3>
        <p>Immerse yourself in the beauty of aquariums and aquascaping.</p>
      </div>

      <!-- Navigation Links -->
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/article-list">Articles</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>

      <!-- Social Media Links -->
      <div class="footer-social">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="#" target="_blank">Facebook</a></li>
          <li><a href="#" target="_blank">Twitter</a></li>
          <li><a href="#" target="_blank">Instagram</a></li>
          <li><a href="#" target="_blank">YouTube</a></li>
        </ul>
      </div>
    </div>
    <!-- Copyright -->
    <div class="footer-bottom">
      <p>© 2025 Aqua Info. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #0a3d62;
  color: white;
  padding: 20px 10px;
  font-size: 0.9rem;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  gap: 20px;
}

.footer-branding {
  flex: 1 1 250px;
  margin-bottom: 20px;
}

.footer-branding h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.footer-links,
.footer-social {
  flex: 1 1 150px;
}

.footer-links h4,
.footer-social h4 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.footer-links ul,
.footer-social ul {
  list-style: none;
  padding: 0;
}

.footer-links li,
.footer-social li {
  margin-bottom: 5px;
}

.footer-links a,
.footer-social a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover,
.footer-social a:hover {
  color: #1abc9c;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 10px;
  font-size: 0.8rem;
}
</style>
