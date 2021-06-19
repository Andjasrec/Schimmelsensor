<template>
  <div>
    <div class="Signup">Feed</div> 
    <div class="massnahmen">Keine Maßnahmen nötig</div>
    <div>Luftfeuchtigkeit {{Luftfeuchtigkeit}}</div>
    <div>Raumtemperatur {{Temperatur}}</div>
    <div>Taumessung</div>
    <div class="WeitereSensoren">Weitere Sensoren</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
    props: {
    },
    data() {
      return {
        Luftfeuchtigkeit:"verbindung wird aufgebaut",
        Temperatur:"vebindung wird aufgebaut" 
      }
    },
    mounted() {
      axios.get('http://localhost:3000/api/latest')
      .then(response => {
        //this.data = response.data.Luftfeuchtigkeit))
        console.log(response);
        this.Luftfeuchtigkeit = response.data.Luftfeuchtigkeit
        this.Temperatur = response.data.Temperatur
      
      })
      .catch(error => console.log(error))
      //console.log(data)
        }
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
.massnahmen{
  position: absolute;
width: 343px;
height: 36px;
left: calc(50% - 343px/2 - 7px);
top: calc(50% - 36px/2 + 47px);
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 21px;
line-height: 25px;
text-align: center;
}
.WeitereSensoren{
  position: absolute;
width: 343px;
height: 36px;
left: calc(50% - 343px/2 + 3px);
top: calc(50% - 36px/2 + 248px);
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 21px;
line-height: 25px;
text-align: center;
/* Black */
color: #000000;
}
</style>