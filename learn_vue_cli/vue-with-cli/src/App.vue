<template>
  <div>
    <form-login></form-login>
    <form-contact></form-contact>
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
