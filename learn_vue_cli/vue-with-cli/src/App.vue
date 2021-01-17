<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
  <!-- in Vue template you can only have one <div> root element, so remember! no other root div allowed! -->
</template>

<script>
export default {
  data () {
    return {
      title: 'this is my first vue file!'
    }
  },
  methods:{
    greeting: function(){
      return "uuyeeee"
    }
  }
}
</script>

<style>
</style>
