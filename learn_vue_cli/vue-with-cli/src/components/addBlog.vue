<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy.trim="blog.content"></textarea>
      <div id="checkboxes">
        <input type="checkbox" value="ninjas" v-model="blog.categories" />
        <label>Ninjas</label>
        <input type="checkbox" value="wizards" v-model="blog.categories" />
        <label>Wizards</label>
        <input type="checkbox" value="mario" v-model="blog.categories" />
        <label>Mario</label>
        <input type="checkbox" value="cheese" v-model="blog.categories" />
        <label>Cheese</label>
      </div>
      <label>Author : </label>
      <select v-model="blog.author">
        <option v-for="author in authors">
          {{ author }}
        </option>
      </select>
      <button @click.prevent="post">Add new Posts</button>
    </form>
    <div v-if="submitted">
      <h3>thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview blog</h3>
      <p>Author: {{ blog.author }}</p>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
    </div>

    <p>{{ info }}</p>
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
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ["wildan", "tampan", "sekali"],
      submitted: false,
      info: "",
    };
  },
  methods: {
    post: function () {
      axios
        .post("http://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1,
        })
        .then((response) => {
          console.log(response);
          this.submitted = true;
        })
        .catch((err) => {});
    },
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        this.info = response;
        console.log(response);
      });
  },
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}
</style>
