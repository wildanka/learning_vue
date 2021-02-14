<template>
  <!-- this v-theme="wide" will resulting an error like this :
 Property or method "wide" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.

this is because we need to add '' (single quotation mark) to mark it as a string, 
this is because now with Vue we can pass anything to vue directives, we can pass object, array, or event string, for instance : v-theme="{yourObject}}" 

so now what we got to do is v-theme="'wide'" -->
  <!-- remember "v-on:click.prevent"? the "v-on" is calling a vue directive, while ":click" is the argument, 
so now we'll try to add some arguments  -->
  <div v-theme:column="'narrow'" id="show-blogs">
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