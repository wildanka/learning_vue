<template>
  <div>
    <h1>Welcome to Notebook, Login Here</h1>
    <form action="">
      <div class="form-header">Please fill form below to login</div>
      <div class="form-fields">
        <label for="username"></label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
      </div>
      <div class="form-controls">
        <button>Login</button>
      </div>
      <div class="useful-links">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  text-align: center;
}
form {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}
#useful-links ul {
  padding: 0;
}
#useful-links li {
  display: inline-block;
  margin-right: 10px;
}
form > div {
  padding: 20px;
  background: #eee;
  margin: 20px 0;
}
#form-header {
  background: #ddd;
  border: 1px solid #bbb;
}
</style>