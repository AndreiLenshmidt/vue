<template>
  <header class="header">
    <a :href="link">
      <img :class="img.class" :src="img.src" :alt="img.alt" />
    </a>
    <HeaderNav />
  </header>
</template>

<script>
import HeaderNav from "./HeaderNav.vue";
import src from "@/assets/img/logo.svg";

export default {
  data() {
    return {
      link: "#",
      img: {
        src: src,
        alt: "Inferno logo",
        class: "header__logo",
      },
    };
  },
  components: {
    HeaderNav,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 53px;
  padding-bottom: 53px;
}
</style>
