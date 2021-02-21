<template >
  <nav>
    <ul>
      <!-- when router-link is clicked (active) it will call 
      class="router-link-exact-active router-link-active"
    So, we can use it to display with css which one is active
    -->
      <li><router-link to="/">Blog</router-link></li>
      <li><router-link to="/add">Add a New Blog</router-link></li>
      <!-- now try to inspect the element, 
      if we are trying to click on blog (open url "localhost:8080/" ) "Blog" will be active
      if we are trying to click on blog (open url "localhost:8080/add" ) "Add a New Blog" will be active. but Blog wil active to.
      this is because "/add" contains "/"

      take example if you are accessing "localhost:8080/add/blabla".
      this will make "Blog" and "Add a New Blog" have router-link-active class on them. because we call
      "/", "add", and also "blablabla" (the first two counted in since we got the menu for it)
      
    

      -->
    </ul>
  </nav>
</template>
<script>
export default {};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav {
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}

.router-link-active {
  background: #eee;
  color: #444;
}
</style>