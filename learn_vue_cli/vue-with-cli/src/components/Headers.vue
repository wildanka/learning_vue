<!-- create a headers component-->
<template>
  <!-- #2 make the trigger to call the events from child to parents -->
  <header v-on:click="changeTitle">
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      // title: "Vue Ninjas",
    };
  },
  methods: {
    changeTitle: function () {
      /**
       * as we know the primitives object won't update reference.
       * So in case we want to adopt that behavior in primitive types, we can do it via event
       * #1 create a function that call emit events
       */
      this.$emit("changeTitle", "Vue Wizards");
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
