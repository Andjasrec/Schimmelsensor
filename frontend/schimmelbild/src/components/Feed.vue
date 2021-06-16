<template>
  <div>
    <div class="Signup">Feed</div> 
    <div>Keine Maßnahmen nötig</div>
    <div class="Luftfeuchtigkeit">Luftfeuchtigkeit</div>
    <div>Raumtemperatur</div>
    <div>Taumessung</div>
    <div>weitere Sensoren</div>
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
.Luftfeuchtigkeit{
  position: absolute;
width: 119px;
height: 19px;

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;

color: #282828;

}
</style>