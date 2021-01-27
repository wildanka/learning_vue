<template>
  <div>
    <!-- now to make components dynamic, we got to do some binding to component using v-bind:is-->
    <!-- the keep-alive tag will notify Vue to make sure, 
    the components inside <keep-alive> tag (which is component) data, won't be cleared/destroyed -->
    <keep-alive
      ><component v-bind:is="(component = component)"></component
    ></keep-alive>
    <!-- if we fill the form data in each form component, it will going to lose the data that we just input
    and that's because everytime we change components, the components is kinda destroyed, 
    and when we go back by clicking the same button, again it will create new instance of components -->
    <button v-on:click="component = 'form-login'">Go to Login</button>
    <button v-on:click="component = 'form-contact'">Go to Contact</button>
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
