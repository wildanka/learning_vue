<template>
  <div>
    <!-- #3 add eventListener for specific methods on components, 
    and call the root methods to update root props data -->
    <app-header
      v-bind:title="title"
      v-on:changeTitle="propsUpdateTitle"
    ></app-header>
    <!-- to send data that is dynamic, we got to use v-bind: -->
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <hr />
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <app-header v-bind:title="title"></app-header>
    <!-- <app-footer v-bind:title="title"></app-footer> -->
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
      //Reference Type in props are Objects and Arrays
      ninjas: [
        { name: "Ryu", specialty: "Vue Components", show: false },
        { name: "Crystal", specialty: "HTML Wizard", show: false },
        { name: "Hiroshi", specialty: "Click Events", show: false },
        { name: "Takagi", specialty: "Conditionals", show: false },
        { name: "Wataru", specialty: "Webpack", show: false },
        { name: "Sato", specialty: "Data Diggin", show: false },
      ],
      title: "Vue Ninjas", //Primitive Type in props are String, Number, and Boolean
    };
  },
  methods: {
    // #4 method to update the root
    propsUpdateTitle: function (updatedTitleEventsValue) {
      this.title = updatedTitleEventsValue;
    },
  },
};
</script>

<style>
</style>
