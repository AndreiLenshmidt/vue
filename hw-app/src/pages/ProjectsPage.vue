<template>
  <div class="projects-wrap">
    <img class="projects-wrap__bkg" src="@/assets/img/projects.png" alt="#" />
    <div class="wrap flex-center">
      <section class="projects">
        <SecondTitle>Our Project</SecondTitle>
        <BradCramp :items="navItems" />
      </section>
    </div>
  </div>
  <div class="wrap">
    <div class="flex-center">
      <div class="projects__filters">
        <FilterArticles
          v-for="(filter, index) in filters"
          :key="index"
          :btnname="filter"
          @click="filtration(filter)"
          class="projects__filter"
          :class="
            activeFilter === filter
              ? (active = 'blog-articles__btn-on')
              : (active = '')
          "
        />
        <!-- <p v-for="filter in filters" :key="filter" class="projects__filter">
          {{ filter }}
        </p> -->
      </div>
    </div>
    <div class="projects__container">
      <FirstCard v-for="card in filteredCards" :key="card" :card="card" />
    </div>
  </div>
</template>

<script>
import BradCramp from "@/components/BradCramp.vue";
import FilterArticles from "@/components/FilterArticles.vue";
import FirstCard from "@/components/FirstCard.vue";
import SecondTitle from "@/components/SecondTitle.vue";

export default {
  components: {
    SecondTitle,
    FirstCard,
    BradCramp,
    FilterArticles,
  },
  data() {
    return {
      navItems: [
        { link: "#", content: "Home" },
        { link: "#", content: "Projects" },
      ],
      filters: ["Bathroom", "Bed Room", "Kitchan", "Living Area"],
      projectCards: [
        {
          id: 31,
          imgsrc: require("@/assets/img/card1.png"),
          link: "#",
          imgalt: "Modern Kitchan",
          title: "Modern Kitchan",
          info: "Decor / Artchitecture",
          category: "Kitchan",
          class: "",
        },
        {
          id: 32,
          imgsrc: require("@/assets/img/card2.png"),
          link: "#",
          imgalt: "Modern Kitchan",
          title: "Modern Kitchan",
          info: "Decor / Artchitecture",
          category: "Kitchan",
          class: "",
        },
        {
          id: 33,
          imgsrc: require("@/assets/img/card3.png"),
          link: "#",
          imgalt: "Modern Kitchan",
          title: "Modern Kitchan",
          info: "Decor / Artchitecture",
          category: "Kitchan",
          class: "",
        },
        {
          id: 34,
          imgsrc: require("@/assets/img/card4.png"),
          link: "#",
          imgalt: "Modern Kitchan",
          title: "Modern Kitchan",
          info: "Decor / Artchitecture",
          category: "Kitchan",
          class: "",
        },
        {
          id: 0,
          imgsrc: require("@/assets/img/card-img1.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Kitchan",
          link: "#",
        },
        {
          id: 1,
          imgsrc: require("@/assets/img/card-img2.png"),
          title: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Living Area",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 2,
          imgsrc: require("@/assets/img/card-img3.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Area",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 3,
          imgsrc: require("@/assets/img/card-img4.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Living Area",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 4,
          imgsrc: require("@/assets/img/card-img5.png"),
          title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          category: "Living Area",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 5,
          imgsrc: require("@/assets/img/card-img6.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Area",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 6,
          imgsrc: require("@/assets/img/card-img6.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Area",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 7,
          imgsrc: require("@/assets/img/card-img6.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Area",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 8,
          imgsrc: require("@/assets/img/card-img6.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Area",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 9,
          imgsrc: require("@/assets/img/card-img6.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Area",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 10,
          imgsrc: require("@/assets/img/card-img6.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Area",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 11,
          imgsrc: require("@/assets/img/card-img5.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Area",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 12,
          imgsrc: require("@/assets/img/card5.png"),
          title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          category: "Bathroom",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 13,
          imgsrc: require("@/assets/img/card6.png"),
          title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          category: "Bathroom",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 14,
          imgsrc: require("@/assets/img/card7.png"),
          title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          category: "Bathroom",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 15,
          imgsrc: require("@/assets/img/card8.png"),
          title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          category: "Bathroom",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 16,
          imgsrc: require("@/assets/img/card9.png"),
          title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          category: "Bathroom",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 17,
          imgsrc: require("@/assets/img/card10.png"),
          title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          category: "Bathroom",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 18,
          imgsrc: require("@/assets/img/card11.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Bed Room",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 19,
          imgsrc: require("@/assets/img/card12.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Bed Room",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 20,
          imgsrc: require("@/assets/img/card1.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Bed Room",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 21,
          imgsrc: require("@/assets/img/card2.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Bed Room",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 22,
          imgsrc: require("@/assets/img/card3.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Bed Room",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 23,
          imgsrc: require("@/assets/img/card6.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Bed Room",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 24,
          imgsrc: require("@/assets/img/card-img2.png"),
          title: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Bed Room",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 25,
          imgsrc: require("@/assets/img/card8.png"),
          title: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Bed Room",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 26,
          imgsrc: require("@/assets/img/card9.png"),
          title: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Bed Room",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 27,
          imgsrc: require("@/assets/img/card10.png"),
          title: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Bed Room",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 28,
          imgsrc: require("@/assets/img/card-img2.png"),
          title: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Kitchan",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 29,
          imgsrc: require("@/assets/img/card-img2.png"),
          title: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Kitchan",
          info: "Decor / Artchitecture",
          link: "#",
        },
        {
          id: 30,
          imgsrc: require("@/assets/img/card-img2.png"),
          title: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Kitchan",
          info: "Decor / Artchitecture",
          link: "#",
        },
      ],
      activeFilter: "Kitchan",
    };
  },
  methods: {
    filtration(filter) {
      this.activeFilter = filter;
    },
  },
  computed: {
    filteredCards() {
      return this.projectCards.filter(
        (card) => card.category === this.activeFilter
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: center;
}
.projects-wrap {
  position: relative;
  padding-top: 178px;
  border: 1px solid rgb(244, 240, 236);
  overflow: hidden;

  &__bkg {
    position: absolute;
    min-width: 100vw;
    top: 0;
    left: 0;
    background: rgb(244, 240, 236);
    z-index: -1;
  }
}
.projects {
  text-align: center;
  border-radius: 37px 37px 0px 0px;
  background: rgb(255, 255, 255);
  padding: 41px 78px;
  max-width: 502px;

  &__filters {
    display: flex;
    justify-content: space-between;
    margin-top: 200px;
    margin-bottom: 61px;
    width: 880px;
    height: 75px;
    box-sizing: border-box;
    border: 1px solid rgb(205, 162, 116);
    border-radius: 18px;
  }
  &__filter {
    text-align: center;
    color: rgb(41, 47, 54);
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    padding: 26px 66px;
  }
  &__filter:hover {
    border-radius: 18px;
    background: rgb(255, 193, 127);
    cursor: pointer;
  }
  &__container {
    column-count: 2;
  }
  &__card {
    padding-top: 0;
    padding-bottom: 56px;
    width: 98.82%;
  }
  &__card-figure {
    background: rgb(234, 234, 234);
    overflow: hidden;
    // height: 525px;
    object-fit: cover;
    position: relative;
  }
  &__card-img {
    // position: absolute;
    // top: -50%;
    // left: -15%;
    width: 100%;
    height: 100%;
    // margin-bottom: -5px;
  }
}
.blog-articles {
  &__btn {
    margin-right: 0px;
    margin-bottom: 0px;
    border-radius: 18px;
    border: 1px solid rgb(255 255 255);
    background: rgb(255 255 255);
  }
  &__btn:hover {
    border: 1px solid rgb(255, 193, 127);
  }
  &__btn-on {
    border-radius: 18px;
    background: rgb(205, 162, 116);
    border: 1px solid rgb(205, 162, 116);
  }
}
</style>
