<!-- create a headers component-->
<template>
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
      this.title = "Vue Wizards";
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
