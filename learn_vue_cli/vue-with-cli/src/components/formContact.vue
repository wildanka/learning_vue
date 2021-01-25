<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Welcome to Notebook, ask us here</h3>
        <p>Please fill form below to login</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <label>Your Message</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import FormHelper from "./formHelper.vue";
export default {
  components: {
    "form-helper": FormHelper,
  },
  data() {
    return {};
  },
  methods: {
    handleSubmit: function () {
      alert("thanks for submitting question & contacting us");
    },
  },
};
</script>

<style scoped>
FormHelper h1 {
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