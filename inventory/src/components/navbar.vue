<template>
  <nav class="navbar">
    <h3>Medicine Inventory</h3>
    <div class="login">
        <ul type="none" class="login1">
        <li><input type="text" placeholder="Username"></li>
        <li><input type="password" placeholder="Password"></li>
    </ul>
    <ul type="none" class="login2">
  <li><input type="radio" id="Admin" name="Adm">
  <label for="Admin">Admin</label> <input type="radio" id="Employee" name="Adm">
  <label for="Employee">Employee</label></li>
  <li><button>Login</button></li>
    </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
body{
    margin:0;
    padding:0;
    background-color: #b0aac0;
}
.navbar{
    height: 50px;
    background-color: #c2d4dd;
    display: flex;
    padding: 10px 10px;
    justify-content:space-between;
}
h3{
    color: #f0efef;
}
.login{
    display: flex;
    justify-content: flex-end;
}
.login1{
    display: flex;
}
.login2{
    display: flex;
    justify-content: space-around;
}
</style>
