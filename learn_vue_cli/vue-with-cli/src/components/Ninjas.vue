<!-- create a Ninjas component-->
<template>
  <div id="ninjas">
    <!-- thhe props that we sent, can be used inside a method, just like data -->
    <ul>
      <li
        v-for="ninja in ninjas"
        v-on:click="ninja.show = !ninja.show"
        v-bind:key="ninja.name"
      >
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.specialty }}</h3>
      </li>
    </ul>
  </div>
</template>
<script>
/**
 * we can add validation to the sent props data,
 * 1. try to change type from 'String' to 'Array' then check the browser console and see what error is displayed
 * 2. try to remove v-bind:ninjas="ninjas" from App.vue (so we don't send the ninjas props) open the browser console and see what error is displayed
 * ;)
 */

export default {
  props: {
    ninjas: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    test: function () {
      console.log(this.ninjas);
    },
  },
};
</script>

<style scoped>
ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
