<template>
  <div class="fish-card">
    <img :src="image" :alt="name" class="fish-image" />
    <div class="fish-info">
      <h3>{{ name }}</h3>
      <p class="scientific-name"><em>{{ scientificName }}</em></p>
    </div>
    <div class="overlay">
      <div class="overlay-content">
        <p><strong>Water Type:</strong> {{ water }}</p>
        <p><strong>Water Parameters:</strong> {{ waterParams }}</p>
        <p><strong>Diet:</strong> {{ diet }}</p>
        <p><strong>Tank Size:</strong> {{ tankSize }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FishCard",
  props: {
    image: String,
    name: String,
    scientificName: String,
    water: String,
    waterParams: String,
    diet: String,
    tankSize: String,
  },
};
</script>
  
  <style scoped>
  /* Card Container */
  .fish-card {
    position: relative;
    width: 250px;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    background-color: white;
  }
  
  .fish-card:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  }
  
  /* Image Styling */
  .fish-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-bottom: 1px solid #ccc;
  }
  
  /* Basic Info Section */
  .fish-info {
    padding: 10px;
    background-color: #0079bf;
    color: white;
  }
  
  .fish-info h3 {
    font-size: 1.4rem;
    margin: 5px 0;
  }
  
  .fish-info .scientific-name {
    font-size: 1rem;
    margin: 0;
    color: #dceefb;
  }
  
  /* Overlay Container */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 121, 191, 0.95);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    text-align: center;
  }
  
  .fish-card:hover .overlay {
    opacity: 1;
  }
  
  /* Overlay Content Alignment */
  .overlay-content {
    padding: 15px;
    max-width: 90%; /* Prevent content from overflowing the card */
    word-wrap: break-word; /* Ensure text wraps properly */
  }
  
  .overlay-content p {
    margin: 10px 0;
    font-size: 0.95rem;
    line-height: 1.4; /* Add some space between lines for readability */
  }
  </style>
  