import Vue from "vue";
import App from "./App.vue";
import Ninjas from "./Ninjas.vue"; // calling ninjas component from main app

Vue.component("ninjas", Ninjas); // register the component at the main app
new Vue({
  el: "#app",
  render: h => h(App)
});
