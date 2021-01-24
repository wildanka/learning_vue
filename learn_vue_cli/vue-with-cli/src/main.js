import Vue from "vue";
import App from "./App.vue";
// import Ninjas from "./Ninjas.vue"; // calling ninjas component from main app

// #1 create a new Vue instance as eventBus
//TADAA we successfully created a new EventBus, let's export it so it can be used everywhere under App.Vue
export const bus = new Vue();

// Vue.component("ninjas", Ninjas); // register the component at the main app
new Vue({
  el: "#app",
  render: h => h(App)
});
