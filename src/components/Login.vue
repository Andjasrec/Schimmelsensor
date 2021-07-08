<template>
    <div>
      <div class="Signup" >Sign In</div> 
      <div class="Login" v-on:click="Wechseln">Sign Up</div>
      <div class="Name"><input type="text" placeholder="Name" id="username" name="username" v-model="username"></div>
      <div class="Email"><input type="password" placeholder="Password" name="password"  id="password" v-model="password"></div>
      <div class="SignButton" v-on:click="loginUser"><button>Sign In</button></div>
  </div>
</template>

<script>
import axios from "axios";
import router from "./../router"
  export default {
    props: {

    },
    data() {
      return {
        username: "",
        password: ""
      }
    },
    methods: {
      Wechseln: function(){
        router.push({name:"Signup"})
      },
      loginUser: function() {
        
        let userData = {
          username: this.username,
          password: this.password
        };
        const uri = "https://schimmelsensor_backend.ds.ava.hfg.design/api/login";
        axios.post(uri, userData)
        .then (function(response){
            router.push({name:"Feed"})
            //console.log(response)
            response
        })
        .catch (function (err) {
          console.log("Redirecte zu Home und gib Proklem bekannt");
          console.log(err)
        })
      }
    },
  };
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap');

.Signup {
position: absolute;
width: 113px;
height: 36px;
left: calc(50% - 113px/2 + 2px);
top: calc(50% - 36px/2 - 328px);

/* UI - 30 Semi */

font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 36px;
text-align: center;

/* Black */

color: #000000;

}
.Login{
position: absolute;
width: px;
height: 19px;
left: calc(50% - 43px/2 + 150px);
top: calc(50% - 19px/2 - 328.5px);

/* UI - 16 Medium */

font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: right;

/* Green/Primary */

color: #5DB075;
}
.Name{
position: absolute;
width: 343px;
height: 50px;
left: calc(50% - 343px/2);
top: calc(50% - 50px/2 - 253px);
}

.Email{
    position: absolute;
width: 343px;
height: 50px;
left: calc(50% - 343px/2);
top: calc(50% - 50px/2 - 187px);
}

.Password{
    position: absolute;
width: 343px;
height: 50px;
left: calc(50% - 343px/2);
top: calc(50% - 50px/2 - 121px);
}
.SignButton {
    position: absolute;
width: 343px;
height: 51px;
left: calc(50% - 343px/2);
top: calc(50% - 51px/2 - 38.5px);
}
</style>