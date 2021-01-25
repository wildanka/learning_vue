<template>
  <div>
    <h2>I am the slot title</h2>
    <p>I am the paragraph for the slot</p>
  </div>
</template>

<script>
import FormHelper from "./components/formHelper.vue"; //import components

export default {
  components: {
    // add components
    "form-helper": FormHelper,
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
  methods: {},
};
</script>

<style>
</style>
