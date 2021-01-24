<!-- create a headers component-->
<template>
  <header v-on:click="changeTitle">
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
// #2 import the eventBus 'bus'
import { bus } from "../main";

export default {
  props: {
    // title: {
    //   type: String,
    // },
  },
  data() {
    return {
      title: "Vue Ninjas",
    };
  },
  methods: {
    changeTitle: function () {
      // this.$emit("changeTitle", "Vue Wizards");
      /**
       * rather than update everything via props (App.vue),
       * we can also trigger update from child to another child directly
       * this can be done via EventBus
       *
       * Event Bus is Actually just a Vue Instance
       */
      const newTitle = "Vue Wizards";
      this.title = newTitle;
      // #3 trigger event bus emit to 'titleChanged' event
      bus.$emit("titleChanged", newTitle);
    },
  },
};
</script>

<style>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
