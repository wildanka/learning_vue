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

      <!-- to solve the problem, there is 2 work around we can choose: 
        1. first we can add exact directives to the router link (example below),
            <li><router-link to="/" exact>Blog</router-link></li>
            <li><router-link to="/add" exact>Add a New Blog</router-link></li>
      
        2. use the "router-link-exact-active" instead of "router-link-active" to style the choosen router-link menu
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

.router-link-exact-active {
  background: #eee;
  color: #444;
}
</style>