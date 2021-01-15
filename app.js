new Vue({
  el: "#vue-app",
  data: {
    name: "Wildan",
    job: "help people get their job",
  },
  methods: {
    greet: function (user) {
      return "Good Morning, " + user;
    },
  },
});
