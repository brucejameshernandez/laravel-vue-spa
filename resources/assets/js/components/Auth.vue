<template>
  <div id="auth">
    <md-layout md-align="center">
        <h1>Login Page</h1>
    </md-layout> 
    <form novalidate @submit.stop.prevent="submit">
        <md-layout md-align="center">
            <md-input-container>
                <label>Username</label>
                <md-input v-model="user.username"></md-input>
            </md-input-container>

            <md-input-container md-has-password>
                <label>Password</label>
                <md-input type="password" v-model="user.password"></md-input>
            </md-input-container>
        </md-layout>
    </form>    
    
  </div>
</template>

<script>
export default {
  name: 'auth',
  data () {
    return {
      user: {
        'username': '',
        'password': ''
      }
    }
  }
}
</script>