<template>
    <div class="banner">
      <div class="banner-content">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Banner",
    props: {
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .banner {
    
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(../assets/img/background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    color: #ffffff;
    text-align: center;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .banner-content {
    max-width: 800px;
  }
  
  .banner h1 {
    font-size: 3rem;
    margin: 0 0 10px;
  }
  
  .banner p {
    font-size: 1.5rem;
    margin: 0;
    opacity: 0.9;
  }
  </style>
  