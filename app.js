new Vue({
  el: "#vue-app",
  data: {
    available: false,
    nearby: false,
  },
  methods: {},
  computed: {
    compClasses: function () {
      return {
        available: this.available,
        nearby: this.nearby,
      };
    },
    /*    addToA: function () {
      console.log("addToA");
      return this.age + this.a;
    },
    addToB: function () {
      console.log("addToB");
      return this.age + this.b;
    }, */
  },
});
