<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" class="single-blog" v-bind:key="blog.id">
      <!-- remember v-if v-on, v-for? 
      there will be a case when you want to do something inside your element, 
      but VueJS doesn't provide you with that. you can just create a custom directives then.
      in this case we want to make the blog list have title that colored just like rainbow.  -->
      <h2 v-rainbow>{{ blog.title }}</h2>
      <article>{{ blog.body }}</article>
    </div>
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
    return {
      blogs: null,
    };
  },
  methods: {},
  created() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        //result.data
        console.log(result.data.slice(10));
        // this.blogs = result.data.slice(10);
        this.blogs = result.data.slice(0, 10);
      })
      .catch((err) => {});
  },
};
</script>
<style lang="">
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: lightblue;
}
</style>