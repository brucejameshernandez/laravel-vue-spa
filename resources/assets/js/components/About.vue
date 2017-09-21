<template>
    <md-layout md-align="center">
        <span class="md-title">About Page</span>
        <md-bottom-bar md-shift>
            <router-link v-bind:to="'/home'" class="md-bottom-bar-item" md-icon="photo">Home</router-link>
            <router-link v-bind:to="'/about'" class="md-bottom-bar-item" md-icon="photo">About</router-link>
            <div class="md-bottom-bar-item" @click="logout">Logout</div>
        </md-bottom-bar>
        <md-stepper>
            <md-step :md-editable="true" md-label="Email" :md-error="!mailValid" :md-continue="mailValid" :md-message="invalidMessage">
                <p>Please enter your emailaddress</p>
                <md-input-container :class="{'md-input-invalid': !mailValid}">
                    <md-input type="email" v-model="mail" required/>
                    <label>Email</label>
                </md-input-container>
            </md-step>
            <md-step :md-disabled="!mailValid">
                <p>Yay  is a valid emailadress</p>
            </md-step>
            <md-step :md-disabled="!mailValid">
                <p>This seems something important I need to fix just right before the last step.</p>
            </md-step>
        </md-stepper>
    </md-layout> 
</template>

<script>
export default {
    data: () => ({
        mail: '',
        mailValid: false,
        invalidMessage: 'Invalid mail'
    }),
    watch: {
        mail() {
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        this.mailValid = emailRegex.test(this.mail);
            if (this.mailValid) {
                this.invalidMessage = 'Valid mail';
            } else {
                this.invalidMessage = 'Invalid mail';
            }
        }
    },
    methods: {
        logout () {
            this.$http.get('/logout').then((response) => {
                let data = response.data;
                if(data.success)
                this.$router.replace('/');
            });
        }
    }
};
</script>