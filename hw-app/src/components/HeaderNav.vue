<template>
    <nav class="header__nav">
      <a v-for="(navItem, index) in navItems" :key="index" :href="navItem.link">
        <p class="header__item">{{ navItem.content }}</p>
      </a>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { content: "Home", link: "#" },
        { content: "Project", link: "#" },
        { content: "Blog", link: "#" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header__nav {
    display: flex;
    justify-content: space-between;
    width: 243px;
    color: rgb(41, 47, 54);
    font-size: 20px;
    font-weight: 400;
    line-height: 125%;
  }
.header__item {
    color: rgb(41, 47, 54);
    font-size: 20px;
    font-weight: 400;
    line-height: 125%;
  }
</style>
