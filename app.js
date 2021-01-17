/**
 * everytime we called this component data,
 * if we only return the data, it will only create a single Vue.component instances (like static variable in java)
 * else if we return the function, then we will have an instances from it's function not the components (like using new in java)
 */
Vue.component("greeting", {
  template:
    '<p>Hey there, I am {{name}} <button v-on:click="changeName">Change Name</button> </p>',
  data: function () {
    return {
      name: "Yoshi",
    };
  },
  methods: {
    changeName: function () {
      this.name = "Mario";
    },
  },
});

var one = new Vue({
  el: "#vue-app-one",
});

var two = new Vue({
  el: "#vue-app-two",
});

// two.title = "Changed from outside";

/**
 * if one day you found yourself having so many Vue Instances and there is to much communication between them
 * if you constantly intracting with separate instances like this,
 * maybe you should consider to restructure the application, you might want to bundle everything together in one Vue instances
 * where it's much more natural to communicate between data.
 * than having separate instances communicating with each other all over the show
 */
