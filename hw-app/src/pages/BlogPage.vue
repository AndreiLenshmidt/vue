<template>
  <div class="header-wrap">
    <div class="wrap">
      <HeaderComp />
    </div>
  </div>
  <div class="blog-wrap">
    <img class="blog-wrap__bkg" :src="blokBkg" alt="#" />
    <div class="wrap flex-center">
      <section class="blog">
        <SecondTitle>Articles & News</SecondTitle>
        <BradCramp :items="navItems" />
      </section>
    </div>
  </div>
  <div class="latesr-wrap">
    <div class="wrap">
      <section class="latest">
        <SecondTitle class="latest__headding">Latest Post</SecondTitle>
        <div class="latest__box">
          <figure class="latest__img-box">
            <img
              :src="latestArticle.imgsrc"
              :alt="latestArticle.imgalt"
              class="latest__img"
            />
          </figure>
          <div class="latest__text-box">
            <h3 class="latest__headding-name">
              {{ latestArticle.title }}
            </h3>
            <div class="latest__text-pos">
              <TextComp class="latest__text">
                {{ latestArticle.desc1 }}
              </TextComp>
              <TextComp class="latest__text">
                {{ latestArticle.desc2 }}
              </TextComp>
            </div>
            <div class="latest__data-box">
              <p class="latest__data">{{ latestArticle.data }}</p>
              <ArrowBtn
                :btnlink="latestArticle.link"
                btnclass="latest__btn"
                :btnwidth="button.width"
                :btnheight="button.height"
              ></ArrowBtn>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <div class="articles-wrap">
    <div class="wrap">
      <section class="articles">
        <SecondTitle>Articles & News</SecondTitle>
        <div class="articles__box">
          <SecondCard
            :button="button"
            :articles="articles.slice(visionCard.start, visionCard.end)"
          />
        </div>
        <div class="articles__pagination flex-center">
          <ArrowBtn
            @click="prevBtn"
            btnclass="pagination__btn pagination__arrow pagination__arrow-prev"
            btnwidth="7.8"
            btnheight="16"
          ></ArrowBtn>
          <button
            v-for="(paginationbtn, index) in paginationbtns.slice(
              visionCard.paginStart,
              visionCard.paginEnd
            )"
            :key="index"
            class="pagination__btn"
            :class="visionCard.active === paginationbtn ? visionCard.classActive: ''"
            @click="activeBtn(paginationbtn)"
          >
            {{ paginationbtn }}
          </button>
          <ArrowBtn
            @click="nextBtn"
            btnclass="pagination__btn pagination__arrow"
            btnwidth="7.8"
            btnheight="16"
          ></ArrowBtn>
        </div>
      </section>
    </div>
  </div>
  <div class="footer-wrap">
    <div class="wrap">
      <FooterComp />
    </div>
  </div>
</template>

<script>
import ArrowBtn from "@/components/ArrowBtn.vue";
import BradCramp from "@/components/BradCramp.vue";
import FooterComp from "@/components/FooterComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import SecondCard from "@/components/SecondCard.vue";
import SecondTitle from "@/components/SecondTitle.vue";
import TextComp from "@/components/TextComp.vue";

export default {
  components: {
    HeaderComp,
    FooterComp,
    SecondTitle,
    BradCramp,
    TextComp,
    ArrowBtn,
    SecondCard,
  },
  data() {
    return {
      navItems: [
        { link: "", content: "Home" },
        { link: "", content: "Blog" },
      ],
      blokBkg: require("@/assets/img/blog.png"),
      latestArticle: {
        imgsrc: require("@/assets/img/latest.png"),
        imgalt: "#",
        title: "Low Cost Latest Invented Interior Designing Ideas",
        desc1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.",
        desc2:
          "Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        data: "26 December,2022",
        link: "#",
      },
      button: {
        height: 16,
        width: 8.03,
        class: "latest__btn",
      },
      articles: [
        {
          id: 0,
          imgsrc: require("@/assets/img/card-img1.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Kitchan Design",
          link: "#",
        },
        {
          id: 1,
          imgsrc: require("@/assets/img/card-img2.png"),
          title: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Interior Design",
          link: "#",
        },
        {
          id: 2,
          imgsrc: require("@/assets/img/card-img3.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Design",
          link: "#",
        },
        {
          id: 3,
          imgsrc: require("@/assets/img/card-img4.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Kitchan Design",
          link: "#",
        },
        {
          id: 4,
          imgsrc: require("@/assets/img/card-img5.png"),
          title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          category: "Interior Design",
          link: "#",
        },
        {
          id: 5,
          imgsrc: require("@/assets/img/card-img6.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Design",
          link: "#",
        },
        {
          id: 6,
          imgsrc: require("@/assets/img/card-img6.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Design",
          link: "#",
        },
        {
          id: 7,
          imgsrc: require("@/assets/img/card-img6.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Design",
          link: "#",
        },
        {
          id: 8,
          imgsrc: require("@/assets/img/card-img6.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Design",
          link: "#",
        },
        {
          id: 9,
          imgsrc: require("@/assets/img/card-img6.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Design",
          link: "#",
        },
        {
          id: 10,
          imgsrc: require("@/assets/img/card-img6.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Design",
          link: "#",
        },
        {
          id: 11,
          imgsrc: require("@/assets/img/card-img6.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Design",
          link: "#",
        },
        {
          id: 12,
          imgsrc: require("@/assets/img/card-img5.png"),
          title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          category: "Interior Design",
          link: "#",
        },
        {
          id: 13,
          imgsrc: require("@/assets/img/card-img5.png"),
          title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          category: "Interior Design",
          link: "#",
        },
        {
          id: 14,
          imgsrc: require("@/assets/img/card-img5.png"),
          title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          category: "Interior Design",
          link: "#",
        },
        {
          id: 15,
          imgsrc: require("@/assets/img/card-img5.png"),
          title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          category: "Interior Design",
          link: "#",
        },
        {
          id: 16,
          imgsrc: require("@/assets/img/card-img5.png"),
          title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          category: "Interior Design",
          link: "#",
        },
        {
          id: 17,
          imgsrc: require("@/assets/img/card-img5.png"),
          title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          category: "Interior Design",
          link: "#",
        },
        {
          id: 18,
          imgsrc: require("@/assets/img/card-img1.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Kitchan Design",
          link: "#",
        },
        {
          id: 19,
          imgsrc: require("@/assets/img/card-img1.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Kitchan Design",
          link: "#",
        },
        {
          id: 20,
          imgsrc: require("@/assets/img/card-img1.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Kitchan Design",
          link: "#",
        },
        {
          id: 21,
          imgsrc: require("@/assets/img/card-img1.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Kitchan Design",
          link: "#",
        },
        {
          id: 22,
          imgsrc: require("@/assets/img/card-img1.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Kitchan Design",
          link: "#",
        },
        {
          id: 23,
          imgsrc: require("@/assets/img/card-img1.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Kitchan Design",
          link: "#",
        },
        {
          id: 24,
          imgsrc: require("@/assets/img/card-img2.png"),
          title: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Interior Design",
          link: "#",
        },
        {
          id: 25,
          imgsrc: require("@/assets/img/card-img2.png"),
          title: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Interior Design",
          link: "#",
        },
        {
          id: 26,
          imgsrc: require("@/assets/img/card-img2.png"),
          title: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Interior Design",
          link: "#",
        },
        {
          id: 27,
          imgsrc: require("@/assets/img/card-img2.png"),
          title: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Interior Design",
          link: "#",
        },
        {
          id: 28,
          imgsrc: require("@/assets/img/card-img2.png"),
          title: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Interior Design",
          link: "#",
        },
        {
          id: 29,
          imgsrc: require("@/assets/img/card-img2.png"),
          title: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Interior Design",
          link: "#",
          },
          {
          id: 30,
          imgsrc: require("@/assets/img/card-img2.png"),
          title: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Interior Design",
          link: "#",
        },
      ],
      visionCard: {
        start: 0,
        end: 6,
        paginStart: 0,
        paginEnd: 3,
        active: "01",
        classActive : "pagination__btn-active",
      },
    };
  },
  computed: {
    paginationbtns() {
      const max = Math.ceil(this.articles.length / 6);
      const buttons = [];
      for (let i = 1; i < max; i++) {
        buttons.push("0" + i);
      }
      return buttons;
    },
    maxValue() {
      return this.paginationbtns.length;
    },
  },
  methods: {
      activeBtn(paginationbtn) {
          const paginationNumber = +paginationbtn.slice(1);
          this.visionCard.active = paginationbtn;
          if (paginationNumber == 1) {
              this.visionCard.start = 0;
              this.visionCard.end = 6;
          } else {
              this.visionCard.start = paginationNumber * 6;
              this.visionCard.end = paginationNumber * 6 + 6;
          }
    },
    nextBtn() {
      if (this.visionCard.paginEnd < this.maxValue) {
        this.visionCard.paginStart += 1;
        this.visionCard.paginEnd += 1;
      }
    },
    prevBtn() {
      if (this.visionCard.paginStart > 0) {
        this.visionCard.paginStart -= 1;
        this.visionCard.paginEnd -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 1200px;
  margin: 0 auto;
}
.flex-center {
  display: flex;
  justify-content: center;
}
.blog-wrap {
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
.blog {
  text-align: center;
  border-radius: 37px 37px 0px 0px;
  background: rgb(255, 255, 255);
  padding: 41px 78px;
  max-width: 502px;
}
.latest {
  padding-top: 200px;
  &__headding {
    padding-bottom: 33px;
  }
  &__box:hover {
    background-color: rgb(244, 240, 236);
  }
  &__box {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 22px;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 62px;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  }
  &__img-box {
    position: relative;
    overflow: hidden;
    width: 569px;
    height: 478px;
    border-radius: 50px;
    background: rgb(196, 196, 196);
  }
  &__img {
    position: absolute;
    top: -16px;
    left: -42px;
  }
  &__text-box {
    width: 469px;
    padding-right: 34px;
  }
  &__headding-name {
    color: rgb(41, 47, 54);
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    padding-top: 52px;
    padding-bottom: 22px;
  }
  &__text-pos {
    display: flex;
    height: 198px;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 41px;
  }
  &__data-box {
    display: flex;
    justify-content: space-between;
  }
  &__data {
    color: rgb(77, 80, 83);
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    text-transform: capitalize;
    align-self: center;
  }
  &__btn {
    background: rgb(244, 240, 236);
    display: flex;
    text-align: center;
    border-radius: 100%;
    padding: 18px 22px;
    transition: all 0.5s;
  }
  &__btn:hover {
    cursor: pointer;
    background-color: #fff;
  }
}
.articles {
  padding-top: 96px;
  &__box {
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    flex-wrap: wrap;
    row-gap: 30px;
  }
  &__pagination {
    padding-top: 72px;
  }
}
.pagination {
  &__btn {
    background-color: #fff;
    display: flex;
    align-self: center;
    text-align: center;
    border-radius: 100%;
    box-sizing: border-box;
    border: 1px solid rgb(205, 162, 116);
    padding: 14px 17px;
    margin-right: 20px;
    transition: all 0.5s;
    color: rgb(41, 47, 54);
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    text-transform: capitalize;
  }
  &__btn:hover {
    cursor: pointer;
    background-color: rgb(205, 162, 116);
  }
  &__btn:last-child {
    margin-right: 0;
  }
  &__btn-active {
    background-color: rgb(244, 240, 236);
    border-color: rgb(244, 240, 236);
  }

  &__arrow {
    padding: 18px 22px;
  }
  &__arrow-prev {
    transform: rotate(180deg);
  }
}
.footer {
  display: flex;
  justify-content: space-between;
  padding-top: 96px;
  padding-bottom: 134px;
}
</style>
