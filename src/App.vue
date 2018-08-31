<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Amplify, { Analytics } from 'aws-amplify';
import aws_exports from './aws-exports';

export default {
  name: 'App',
  mounted(){
    const oauth = {
    // Domain name
    domain : 'https://preflighttest.auth.us-east-1.amazoncognito.com', 
    
    // Authorized scopes
    scope : ['phone', 'email', 'profile', 'openid','aws.cognito.signin.user.admin'], 

    // Callback URL
    redirectSignIn : 'https://d23505dvd9ygmo.cloudfront.net/callback', 
    
    // Sign out URL
    redirectSignOut : 'https://d23505dvd9ygmo.cloudfront.net/callback',

    // 'code' for Authorization code grant, 
    // 'token' for Implicit grant
    responseType: 'token',

    clientId: '3f0v325kntr7uicqqmoumtr2a2'
}

    Amplify.configure(aws_exports);
    Amplify.configure({
    Auth: {
        oauth: oauth
    }
});
    Analytics.record({ name: 'Init app' });

    var tokens = window.localStorage.getItem("tokens");
    if(tokens != null) this.$store.commit("auth/setTokens", tokens);
  }
}
</script>

<style>
</style>
