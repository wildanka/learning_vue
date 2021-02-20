<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from "./components/addBlog.vue";
import showBlog from "./components/showBlogs.vue";
import listBlog from "./components/listBlogs.vue";

export default {
  components: {
    // add components
    "add-blog": addBlog,
    "show-blog": showBlog,
    "list-blog": listBlog,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
