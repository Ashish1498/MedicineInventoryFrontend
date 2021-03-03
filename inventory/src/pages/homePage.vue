
<template>
  <div>
    <navbar />
     <div class="cont">
      <div class="cont1"></div>
      <div class="cont2">
          <h3>Register as an Employee or Admin</h3>
          <input type="text" v-model="name" placeholder="Name" name="name" class="input-css"><br>
          <input type="email" v-model="email" placeholder="Email-id" name="email" class="input-css"><br>
          <input type="password" v-model="password" placeholder="password" name="password" class="input-css"><br>
          <input type="password" v-model="confirmPassword" @keyup="mismatch" placeholder="Confirm Password" name="confirmpassword" class="input-css"><br>
          <ul type="none">
              <li>
                  <input type="radio" id="Admin" name="Adm"><label for="Admin">Admin</label>
              </li>
              <li>
                  <input type="radio" id="Employee" name="Adm"><label for="Employee">Employee</label>
              </li>
          </ul>
          <button v-on:click="onsubmit">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import navbar from '@/components/navbar.vue'
export default {
  name: 'homePage',
  components: {
    navbar: navbar
  },
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  validate () {
    if (this.password !== this.confirmpassword) {
      return false
    }
  },
  onsubmit () {
    this.age = this.findage()
    const obj = {
      name: this.name,
      email: this.email,
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
.cont{
    display:flex;
}
.cont1{
    width: 40%;
    height: 80vh;
}
.cont2{
    width: 60%;
    height: 80vh;
    border: 2px solid black;
    margin-right: 5%;
    margin-top: 2%;
}
</style>
