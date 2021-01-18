<template>
  <div>
    <h1>{{title}}</h1>
    <ninjas></ninjas> 
    <!-- call the ninjas component -->
  </div>
  <!-- in Vue template you can only have one <div> root element, so remember! no other root div allowed! -->
</template>

<script>
import Ninjas from './Ninjas.vue'
export default {
  components: { Ninjas }, // register the 'Ninjas' component that we got from the main.js (since App.vue is registered on main.js too)
  data () {
    return {
      title: 'Ninja App!'
    }
  }
}
</script>

<style>
</style>
