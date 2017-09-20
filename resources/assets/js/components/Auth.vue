<template>
  <div id="auth">
    <md-layout md-align="center">
        <h1>Login Page</h1>
    </md-layout> 
    <form novalidate @submit.stop.prevent="login">
        <md-layout md-align="center" md-gutter>
          <div style="width: 500px">
            <md-input-container>
              <label>Username</label>
              <md-input v-model="user.username"  @keyup.enter="login"></md-input>
            </md-input-container>
          
            <md-input-container md-has-password>
                <label>Password</label>
                <md-input type="password" v-model="user.password"  @keyup.enter="login"></md-input>
            </md-input-container>
            <md-button class="md-raised md-primary" @click="login">Login</md-button>
          </div>
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
  },
  methods : {
    login () {
      let info = this.user;
      this.$http.get('/login', { params: info }).then(response => {
        let data = response.data;
        swal(data.success === true ? 'Success!':'Error!', data.message, data.success === true ? 'success':'error').then( response => {
          if(data.success)
          this.$router.replace('/home');
        });

      }, (error) => {
        swal('Missing Field', '', 'error');
      });
    }
  }
}
</script>