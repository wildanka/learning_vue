new Vue({
  el: "#vue-app",
  data: {
    output: "",
  },
  methods: {
    readRefs: function () {
      //so refs do catch the dom of the 'refs'-es element
      console.log(this.$refs);
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.input.value;
    },
  },
});
