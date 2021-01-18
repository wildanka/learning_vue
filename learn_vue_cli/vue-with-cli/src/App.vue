<template>
  <div>
    <app-header></app-header>
    <ninjas></ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Headers.vue' //import components
import Footer from './components/Footer.vue' //import components
import Ninjas from './components/Ninjas.vue' //import components

export default {
  components: { // add components
    'app-header': Header, //why not just use 'header' and not 'app-header'? because header is an html tag (remember <header>?) 
    'app-footer': Footer, //why not just use 'header' and not 'app-header'? because header is an html tag (remember <header>?) 
    'ninjas': Ninjas //why not just use 'header' and not 'app-header'? because header is an html tag (remember <header>?) 
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
