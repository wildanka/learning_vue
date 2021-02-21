<template>
  <div v-theme:column="" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog" v-bind:key="blog.id">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
      </router-link>
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
import searchMixin from "../mixins/searchMixins";

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
  computed: {},
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
  directives: {
    rainbow: {
      bind(el, binding, node) {
        // el : element itself
        // binding : refers to the information about the connection if we passed in a value. example : v-rainbow="-this is the information-"
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      },
    },
  },
  mixins: [searchMixin],
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