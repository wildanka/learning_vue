import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import Routes from './routes';

// import Ninjas from "./Ninjas.vue"; // calling ninjas component from main app

// #1 create a new Vue instance as eventBus
//TADAA we successfully created a new EventBus, let's export it so it can be used everywhere under App.Vue
export const bus = new Vue();

//global custom directive (we can also make a local custom directive though)
// the custom directive name is 'rainbow', that why we call 'v-rainbow' the 'v-' is just a vueJs rule to register it as a Vue things (object)
// Vue.directive("rainbow", {
//   bind(el, binding, node) {
//     // el : element itself
//     // binding : refers to the information about the connection if we passed in a value. example : v-rainbow="-this is the information-"
//     el.style.color =
//       "#" +
//       Math.random()
//         .toString()
//         .slice(2, 8);
//   }
// });

Vue.directive("theme", {
  bind(el, binding, node) {
    if (binding.value == "wide") {
      el.style.maxWidth = "1200px";
    } else if (binding.value == "narrow") {
      el.style.maxWidth = "450px";
    }

    if ((binding.arg = "column")) {
      el.style.background = "#dddd";
      el.style.padding = "20px";
    }
  }
});


Vue.filter("readMore", function(value) {
  return value.slice(0, 100) + "... Read More>>";
});

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
})

// Vue.component("ninjas", Ninjas); // register the component at the main app
new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
