new Vue({
  el: "#vue-app",
  data: {},
  methods: {
    readRefs: function () {
      //so refs do catch the dom of the 'refs'-es element
      console.log(this.$refs);
    },
  },
});
