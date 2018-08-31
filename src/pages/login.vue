<template>
  <q-page class="flex flex-center">
    <q-btn color="primary" @click="login">Login</q-btn>
  </q-page>
</template>

<style>
</style>

<script>
import Amplify, { Auth } from 'aws-amplify';
export default {
  name: 'PageIndex',
  methods:{
      login(){
        const config = Auth.configure();
        const { 
            domain,  
            redirectSignIn, 
            redirectSignOut,
            responseType } = config.oauth;
            //Figure out why amplify isnt creating my userpool and only gets an id and sets it
            var clientId = "3f0v325kntr7uicqqmoumtr2a2";

            console.log(responseType);

        const url = domain + '/login?redirect_uri=' + redirectSignIn + '&response_type=' + responseType + '&client_id=' + clientId;
        // Launch hosted UI
        window.location.assign(url);
      }
  },
  mounted(){

  }

}
</script>
