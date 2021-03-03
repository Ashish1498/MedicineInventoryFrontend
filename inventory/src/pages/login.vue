<template>
  <div>
      <div class="cont3">
          <h1>Medicine Inventory</h1>
      </div>
      <div class="cont4">
          <h2>Admin Login</h2>
        <ul type="none" class="form4">
          <li><input type="text" placeholder="Username" name="username1"></li>
          <li><input type="password" placeholder="Password" name="password1"></li>
          <li><input type="password" placeholder="Confirm Password" name="cpassword1"></li>
          <button class="btn4">Login</button>
        </ul>
       </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      username1: '',
      password1: ''
    }
  },
  validate () {
    if (this.password1 !== this.cpassword1) {
      return false
    }
  },
  onsubmit () {
    this.age = this.findage()
    const obj = {
      username1: this.username1,
      password1: this.password1
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
.cont3{
    height: 50px;
    background-color: #c2d4dd;
    display: flex;
    padding: 10px 10px;
    justify-content:center;
}
.cont4{
    height: 400px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    border: 1px solid yellow;
}
h2{
    text-align: center;
}
li{
    padding: 5px 5px;
}
</style>
