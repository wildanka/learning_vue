new Vue({
  el: "#vue-app",
  data: {
    name: "Wildan",
    age: 25,
    job: "help people get their job",
    website: "http://wildank.blogspot.com",
    websiteTag: '<a href="http://wildank.blogspot.com">Wildank Website',
  },
  methods: {
    greet: function (user) {
      return "Good Morning, " + user + ". I am " + this.name;
    },
  },
});
