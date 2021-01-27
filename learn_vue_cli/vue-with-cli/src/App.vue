<template>
  <div>
    <!-- first, this will work because we set component to display form-contact, 
    next we'll try to make components dynamic-->
    <component is="form-contact"></component>
  </div>
</template>

<script>
import FormContact from "./components/formContact.vue";
import FormLogin from "./components/formLogin.vue";

export default {
  components: {
    // add components
    "form-login": FormLogin,
    "form-contact": FormContact,
  },
  data() {
    return {
      title: "I am the dynamic slot title",
    };
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
