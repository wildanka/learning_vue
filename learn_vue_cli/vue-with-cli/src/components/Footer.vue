<!-- create a footers component-->
<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>
<script>
// #4 import the eventBus 'bus'
import { bus } from "../main";

export default {
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      copyright: "Copyright 2020 Wildan",
    };
  },
  // 'created' will be called from the point when components is first created
  created() {
    // #5 put listener on "created()" "Vue lifecycle-hooks" to update the title using delivered data via eventBus
    bus.$on("titleChanged", (data) => {
      this.title = data;
    });
  },
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
