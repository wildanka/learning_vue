<template>
  <div>
    <form-helper>
      <h2 slot="title">{{ title }}</h2>
      <p slot="text">I am the paragraph for the slot</p>
    </form-helper>
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
      title: "I am the dynamic slot title",
    };
  },
  methods: {},
};
</script>

<style>
</style>
