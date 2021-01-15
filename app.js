new Vue({
  el: "#vue-app",
  data: {
    name: "Wildan",
    job: "help people get their job",
    website: "http://wildank.blogspot.com",
  },
  methods: {
    greet: function (user) {
      return "Good Morning, " + user + ". I am " + this.name;
    },
  },
});
