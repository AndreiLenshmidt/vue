const app = {
  data() {
    return {
      articles: [
        {
          id: 0,
          image: "img/card-img1.png",
          headding: "Let’s Get Solution For Building Construction Work",
          category: "Kitchan Design",
        },
        {
          id: 1,
          image: "img/card-img2.png",
          headding: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Interior Design",
        },
        {
          id: 2,
          image: "img/card-img3.png",
          headding: "Best For Any Office & Business Interior Solution",
          category: "Living Design",
        },
        {
          id: 3,
          image: "img/card-img4.png",
          headding: "Let’s Get Solution For Building Construction Work",
          category: "Kitchan Design",
        },
        {
          id: 4,
          image: "img/card-img5.png",
          headding: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          category: "Interior Design",
        },
        {
          id: 5,
          image: "img/card-img6.png",
          headding: "Best For Any Office & Business Interior Solution",
          category: "Living Design",
        },
      ],
    };
  },
  methods: {},
};

Vue.createApp(app).mount("#app");
