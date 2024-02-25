const task2 = {
  data() {
    return {
      btntext: "Перевернуть",
    };
  },
  methods: {
    addNewItem() {
      document
        .querySelector(".item:last-child")
        .insertAdjacentHTML(
          "beforeend",
          `<li class="item animation" @:click="delItem">Новый элемент списка</li>`
        );
    },
    delItem(event) {
      event.target.remove();
    },
  },
};

Vue.createApp(task2).mount("#task2");
