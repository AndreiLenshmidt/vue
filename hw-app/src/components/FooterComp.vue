<template>
  <footer v-if="$route.name !== 404"
  class="footer flex">
    <div class="footer__box">
      <router-link to="/">
        <img :class="img.class" :src="img.src" :alt="img.alt" />
      </router-link>
      <TextComp
        >It is a long established fact that a reader will be distracted
        lookings.</TextComp
      >
      <div>
        <router-link to="/biliberda">
          <svg
            class="footer__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            heigth="22"
            viewBox="0 0 512 512"
          >
            <path
              d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
            />
          </svg>
        </router-link>
        <router-link to="/biliberda">
          <svg
            class="footer__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            heigth="22"
            viewBox="0 0 448 512"
          >
            <path
              d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
            />
          </svg>
        </router-link>
      </div>
    </div>
    <div class="footer__box">
      <h4 class="footer__headding">Pages</h4>
      <HeaderNav class="footer__nav" />
    </div>
    <div class="footer__box">
      <h4 class="footer__headding">Contact</h4>
      <TextComp>55 East Birchwood Ave.</TextComp>
      <TextComp class="footer__contacts">Brooklyn, New York 11201</TextComp>
      <TextComp class="footer__contacts">contact@interno.com</TextComp>
      <TextComp>(123) 456 - 7890</TextComp>
    </div>
  </footer>
</template>

<script>
import HeaderNav from "./HeaderNav.vue";
import TextComp from "./TextComp.vue";
import src from "@/assets/img/logo.svg";

export default {
  components: { TextComp, HeaderNav },
  data() {
    return {
      link: "#",
      img: {
        src: src,
        alt: "Inferno logo",
        class: "footer__logo",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  &__box {
    width: 30%;
  }
  &__nav {
    flex-direction: column;
    gap: 26px;
  }
  &__box:nth-child(2) {
    padding-left: 100px;
    width: 20%;
  }
  &__box:last-child {
    padding-left: 150px;
    width: 22%;
  }
  &__logo {
    padding-bottom: 18px;
  }
  &__item,
  &__headding,
  &__contacts {
    padding-bottom: 26px;
  }
  &__headding {
    color: rgb(41, 47, 54);
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
  }
  &__icon {
    padding-top: 31px;
    padding-bottom: 20px;
  }
  &__icon:first-child {
    padding-right: 54px;
  }
}
</style>
