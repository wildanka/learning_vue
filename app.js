new Vue({
  el: "#vue-app",
  data: {
    name: "Wildan",
    age: 25,
    x: 0,
    y: 0,
    job: "help people get their job",
    website: "http://wildank.blogspot.com",
    websiteTag: '<a href="http://wildank.blogspot.com">Wildank Website',
  },
  methods: {
    greet: function (user) {
      return "Good Morning, " + user + ". I am " + this.name;
    },

    add: function (inc) {
      this.age += inc;
    },
    subtract: function (dec) {
      this.age -= dec;
    },

    updateXY: function (event) {
      console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },

    showAlert: function () {
      alert("aww, you just clicked me");
    },
  },
});
