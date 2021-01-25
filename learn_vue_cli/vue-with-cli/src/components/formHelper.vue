<template>
  <!-- this slots will be helpfull for case : you have junior front-end developer who will develop some specific features
  he/she don't need to create a new components on their own, without need to create their own styles
   they just need to be concerned about where will they use the slot and how to use it,  -->
  <div>
    <h1>Please fill out our form...</h1>
    <form action="">
      <div class="form-header">
        <slot name="form-header"></slot>
      </div>
      <div class="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div class="form-controls">
        <slot name="form-controls"></slot>
      </div>
      <div class="useful-links">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  data: {
    // title: "I am the dynamic slot title",
  },
  methods: {},
};
</script>


<style scoped>
h1 {
  color: red;
}
h1 {
  text-align: center;
}
form {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}
#useful-links ul {
  padding: 0;
}
#useful-links li {
  display: inline-block;
  margin-right: 10px;
}
form > div {
  padding: 20px;
  background: #eee;
  margin: 20px 0;
}
#form-header {
  background: #ddd;
  border: 1px solid #bbb;
}
</style>