<template>
  <div>
    <app-header></app-header>
    <!-- to send data that is dynamic, we got to use v-bind: -->
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <hr />
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Headers.vue"; //import components
import Footer from "./components/Footer.vue"; //import components
import Ninjas from "./components/Ninjas.vue"; //import components

export default {
  components: {
    // add components
    "app-header": Header, //why not just use 'header' and not 'app-header'? because header is an html tag (remember <header>?)
    "app-footer": Footer, //why not just use 'header' and not 'app-header'? because header is an html tag (remember <header>?)
    ninjas: Ninjas, //why not just use 'header' and not 'app-header'? because header is an html tag (remember <header>?)
  },
  data() {
    return {
      ninjas: [
        { name: "Ryu", specialty: "Vue Components", show: false },
        { name: "Crystal", specialty: "HTML Wizard", show: false },
        { name: "Hiroshi", specialty: "Click Events", show: false },
        { name: "Takagi", specialty: "Conditionals", show: false },
        { name: "Wataru", specialty: "Webpack", show: false },
        { name: "Sato", specialty: "Data Diggin", show: false },
      ],
    };
  },
};
</script>

<style>
</style>
