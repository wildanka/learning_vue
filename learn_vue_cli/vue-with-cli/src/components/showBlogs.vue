<template>
  <div>
    <h1>All Blog Articles</h1>
    <div v-for="" class="single-blog"></div>
    <!-- <add-blog></add-blog> -->
  </div>
</template>

<script>
// Imports
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        console.log(result);
        // result.body.slice(10);
      })
      .catch((err) => {});
  },
};
</script>
<style lang="">
</style>