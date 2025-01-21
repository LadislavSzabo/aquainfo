<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Global Styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
 /* background-image: url(assets/img/background.jpg);*/
 background-color: #1e98df;
 background-repeat: no-repeat;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1; /* Ensures the main content takes up all available space */
}
main {
  flex-grow: 1;
 /* padding: 20px;*/
}
</style>
