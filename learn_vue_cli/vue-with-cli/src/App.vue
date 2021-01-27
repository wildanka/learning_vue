<template>
  <div>
    <!-- now to make components dynamic, we got to do some binding to component using v-bind:is-->
    <component v-bind:is="component"></component>
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
      //this component data will be binded to our component tag, this component data will contain the Vue Components we want to use
      component: "form-contact",
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
