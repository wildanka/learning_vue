<template>
  <app-header></app-header>
</template>

<script>
import Header from './components/Headers.vue' //import components

export default {
  components: { // add components
    'app-header': Header //why not just use 'header' and not 'app-header'? because header is an html tag (remember <header>?) 
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
