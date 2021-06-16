<template>
  <div>
      <div class="Signup">Sign Up</div> 
      <div class="Login">Login</div>
      <div class="Name"><input type="text" placeholder="Name"></div>
      <div class="Email"><input type="text" placeholder="Email"></div>
      <div class="Password"><input type="password" placeholder="Password"></div>
      <div class="SignButton"><button>Sign Up</button></div>
  </div>
</template>

<script>
export default {

}
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
width: 43px;
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