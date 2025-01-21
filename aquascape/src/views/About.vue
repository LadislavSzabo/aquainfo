<template>
  <div class="about-page">
    <div class="about-banner">
      <h1>About Us</h1>
      <p>Your trusted source for everything aquaristic!</p>
    </div>

    <div class="about-content">
      <div class="about-section">
        <h2>Our Mission</h2>
        <p>
          At Aquarium Info, we are dedicated to inspiring aquarium enthusiasts of all levels. 
          Whether you're setting up your first tank, exploring the beauty of aquascaping, or caring for exotic fish, 
          we’re here to provide knowledge, tips, and inspiration to help you succeed.
        </p>
      </div>

      <div class="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Comprehensive guides on fishkeeping and aquarium setup</li>
          <li>Step-by-step tutorials for stunning aquascapes</li>
          <li>Insights on maintaining healthy aquatic environments</li>
          <li>Articles written by aquarium experts and hobbyists</li>
        </ul>
      </div>

      <div class="about-section">
        <h2>Why Choose Us?</h2>
        <p>
          We understand the art and science of aquaristics. Our passion for aquariums drives us to deliver high-quality content, 
          whether you're a beginner or a seasoned hobbyist. Explore our resources and become a part of a community that celebrates 
          the wonder of aquatic life.
        </p>
      </div>

      <div class="about-section">
        <h2>Join Our Community</h2>
        <p>
          Have questions or want to share your aquarium journey? Connect with us! 
          Follow us on social media or browse our articles to dive deeper into the world of aquaristics.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.about-page {
  
  color: #2c3e50;
  font-family: "Arial", sans-serif;
  min-height: 100vh;
  padding: 20px;
}

.about-banner {
  text-align: center;
  padding: 50px 20px;
  background-color: #0e1977;
  color: white;
  border-radius: 10px;
  margin-bottom: 30px;
}

.about-banner h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.about-banner p {
  font-size: 1.2rem;
  margin: 0;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.about-section {
  margin-bottom: 30px;
}

.about-section h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #0e1977;
}

.about-section p {
  font-size: 1rem;
  line-height: 1.6;
  color: #34495e;
}

.about-section ul {
  list-style: disc;
  padding-left: 20px;
  font-size: 1rem;
  color: #34495e;
  line-height: 1.6;
}

.about-section ul li {
  margin-bottom: 10px;
}
</style>
