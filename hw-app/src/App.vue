<template>
  <MainPage />
  <BlogPage />
  <DetailsPage />
</template>

<script>
import BlogPage from "./pages/BlogPage.vue";
import DetailsPage from "./pages/DetailsPage.vue";
import MainPage from "./pages/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
    BlogPage,
    DetailsPage,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jost:ital@0;1&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,600;1,600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:ital@0;1&display=swap");

* {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

a {
  text-decoration: none;
}
body {
  font-family: "Jost";
}
h1,
h2,
h3,
h4 {
  font-family: "DM Serif Display";
}
</style>
