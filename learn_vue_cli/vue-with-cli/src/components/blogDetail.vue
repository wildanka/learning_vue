<template>
  <div id="blog-detail">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.body }}</article>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

export default {
  data() {
    return {
      id: this.$route.params.blogId,
      blog: {},
    };
  },
  created() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts/" + this.id)
      .then((result) => {
        //result.data
        console.log(result.data);
        // this.blogs = result.data.slice(10);
        // this.blogs = result.data.slice(0, 10);
        this.blog = result.data;
      })
      .catch((err) => {});
  },
};
</script>
<style >
</style>