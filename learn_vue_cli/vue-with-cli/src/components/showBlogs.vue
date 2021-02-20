<template>
  <div v-theme:column="" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog" v-bind:key="blog.id">
      <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
      <article>{{ blog.body | readMore }}</article>
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
      blogs: [],
      search: "",
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
  computed: {
    filteredBlogs: function () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
  filters: {
    //move toUppercase filters to local components
    toUppercase: function (value) {
      return value.toUpperCase();
    },
    //can also be written as
    // toUppercase(value) {
    //   return value.toUpperCase();
    // },
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