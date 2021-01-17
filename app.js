new Vue({
  el: "#vue-app",
  data: {
    name: "Wildan",
    age: 25,
    a: 0,
    b: 0,
    job: "help people get their job",
    website: "http://wildank.blogspot.com",
    websiteTag: '<a href="http://wildank.blogspot.com">Wildank Website',
  },
  methods: {
    /* addToA: function () {
      console.log("addToA");
      return this.age + this.a;
    },
    addToB: function () {
      console.log("addToB");
      return this.age + this.b;
    }, */
  },
  computed: {
    addToA: function () {
      console.log("addToA");
      return this.age + this.a;
    },
    addToB: function () {
      console.log("addToB");
      return this.age + this.b;
    },
  },
});
