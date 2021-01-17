var one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "Vue App One",
  },
  methods: {
    changeTitle: function () {
      two.title = "This is One hacked Two";
    },
  },
  computed: {
    greet: function () {
      return "Hello from app one";
    },
  },
});

var two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue App Two",
  },
  methods: {
    changeTitle: function () {
      one.title = "Title Changed";
    },
  },
  computed: {
    greet: function () {
      return "Yo masbroo, disini app two";
    },
  },
});

two.title = "Changed from outside";

/**
 * if one day you found yourself having so many Vue Instances and there is to much communication between them
 * if you constantly intracting with separate instances like this,
 * maybe you should consider to restructure the application, you might want to bundle everything together in one Vue instances
 * where it's much more natural to communicate between data.
 * than having separate instances communicating with each other all over the show
 */
