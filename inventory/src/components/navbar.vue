<template>
  <nav class="navbar">
    <h3>Medicine Inventory</h3>
    <div class="login">
        <ul type="none" class="login1">
        <li><input type="text" placeholder="Username" name="username"></li>
        <li><input type="password" placeholder="Password" name="password"></li>
    </ul>
    <ul type="none" class="login2">
  <li><input type="radio" id="Admin" name="Adm">
  <label for="Admin">Admin</label> <input type="radio" id="Employee" name="Adm">
  <label for="Employee">Employee</label></li>
  <li><button v-on:click="onsubmit()">Login</button></li>
    </ul>
    </div>
  </nav>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  validate () {
    if (this.password !== this.cpassword) {
      return false
    }
  },
  onsubmit () {
    this.age = this.findage()
    const obj = {
      username: this.username,
      password: this.password
    }
    if (this.validate()) {
      axios.post('http://10.177.68.60:8080/register', obj).then((res) => {
        console.log(res)
        this.$router.push('/login')
      })
    }
  }
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
