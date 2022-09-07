<template>
<div class="all">
    <div class="builder">
        <div class="leftclick">
            <button @click="slideshow" id="button"><p id="pp">back</p></button>
        </div>
        <div class="aX">
            <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide id="bgh1"></swiper-slide>
    <swiper-slide id="bgh2"></swiper-slide>
    <swiper-slide id="bgh3"></swiper-slide>
    <swiper-slide id="bgh4"></swiper-slide>
            </swiper>
        </div>
        <div class="rightclick">
            <button @click="slideshow" id="button2"><p id="pp2">next</p></button>
        </div>
    </div>
          <div class="badges">
            <div class="badge1">
                <div class="circle1">
                    <img src="./teeth.jpg" alt="" class="teeth">
                </div>
                <h1>BEST DOCTORS</h1>
                <P>WE HAVE BEST DOCTORS IN OUR COMPANY ADN WE ARE RTHE BEST FROM WHOLE WORLD WITH BEST EVIDENCE FROM HARWARD COLLAGE AND ...</P>
            </div>
            <div class="badge2">
                <h1>STRONG COMPANY</h1>
                <p>WE ARE THE STORNGEST COMPANY THAT HAVE THE STRONGEST MEDICAL STUFF</p>
                <div class="circle2">
                    <img src="./teeth.jpg" alt="" class="teeth">
                </div>
            </div>
            <div class="badge3">
                <div class="circle3">
                    <img src="./teeth.jpg" alt="" class="teeth">
                </div>
            </div>
            <div class="badge4">
                <h1>BOOK NOW</h1>
                <p>FOR RESERVATION AND BOOKING CLICK HERE</p>
                <button @click="changeroute" id="bt">click here</button>
                <div class="circle4">
                    <img src="./teeth.jpg" alt="" class="teeth">
                </div>
            </div>
        </div>
        <div class="intro">
           <h1>dr.jennifer</h1>
           <p>hello. <br> im dr.jennifer <br> i have 33 years old ,<br> i love my job.people said that im a great doctor <br>
        but i always try to providing myself.</p>
        </div>
      
        <div class="any">
            <div class="top">
                <h1>ANOTHER GREATEST DR.</h1>
            </div>
            <div class="bottom">
                <div class="d" id="d1">
                    <h1>DR.MIKE</h1>
                <img src="./mike.jpeg" alt="" id="mike">
                <p>HEY,IM DR.MIKE.IM 35 YERS OLD.IM A DOCTOR FOR 10 YEARS.I GRAGUATED IN HARWARD COLLAGE,I LIKE TO HELP YOU</p>
                <button @click="time1">timing</button>
                </div>
                <div class="d" id="d2">
                    <h1>DR.JENNIFER</h1>
                    <img src="./jennifer.jpg" alt="" id="jennifer">
                    <p>HI,IM DR.JENNIFER.IM 56 YEARS OLD,AND IM DOCTOR FOR 25 YEARS OLD.IM GOING TO BE GLAD TO SEE YOU.</p>
                    <button @click="time2">timing</button>
                </div>
                <div class="d" id="d3">
                    <h1>DR.NICHOLAS</h1>
                    <img src="./nici.jpg" alt="" id="nicholas">
                    <p>HEY GUYS.IM DR.NICHOLAS.IM 38 YEARS OLD.IM A DOCTOR FOR 10 YEARS.I'LL ALWAYS BE YOURS.</p>
                    <button @click="time3">timing</button>
                </div>
                <div class="d" id="d4">
                    <h1>DR.MONA</h1>
                    <img src="./mona.jpg" alt="" id="mona">
                    <p>HI.IM DR.MONA.IM 36 YEARS OLD AND I HVE BEEN DOCTOR FOR ABOUT 8 YEARS.I'VE LIKED TO BE DOCOTR SINCE I WAS A CHILD.SO I HOPE TO MAKE YOU PLEASURE</p>
                    <button @click="time4">timing</button>
                </div>
            </div>
        </div>
        <div class="standard">
            <div class="license"><h1>license</h1></div>
           <div class="s">
                <div class="stan">
                <img src="./st1.jpg" alt="" class="st1">
            </div>
            <div class="stan">
                <img src="./st2.jpg" alt="" class="st2">
            </div>
            <div class="stan">
                <img src="./st3.jpg" alt="" class="st3">
            </div>
            <div class="stan">
                <img src="./st4.jpg" alt="" class="st4">
            </div>
            <div class="stan">
                <img src="./st5.png" alt="" class="st5">
            </div>
            <div class="stan">
                <img src="./st6.jpg" alt="" class="st6">
            </div>
           </div>
        </div>
</div>
    
</template>
<style scoped>
.all{
    width: 100%;
    height: 100vh;
}
.clicker{
    color: white;
    text-decoration: none;
}
.builder{
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.leftclick{
    width: 5%;
    height: 600px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.leftclick button{
    width: 100%;
    height: 30px;
}
.rightclick{
    width: 5%;
    height: 600px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
#button:hover{
    box-shadow: 0 0 6px black;
    font-size: 12px;
}
#button2:hover{
    box-shadow: 0 0 6px black;
    font-size: 12px;
}
.rightclick button{
    width: 100%;
    height: 30px;
}

.aX{
    width: 90%;
    height: 600px;
    background-image: url("main3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
.baghie{
    width: 100%;
    height: 600px;
    display: none;
    position: absolute;
}
#bgh1{
    background-color: red;
    width: 100%;
    height: 600px;
    background-image: url("./dr3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 20% 50%;
    
}
#bgh2{
    background-color: blue;
    width: 100%;
    height: 600px;
    background-image: url("./dr4.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 20% 20%;
    
}
#bgh3{
    background-color: orange;
    width: 100%;
    height: 600px;
    background-image: url("./main3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 20% 20%;
  
}
#bgh4{
    background-color: black;
    width: 100%;
    height: 600px;
    background-image: url("./dr6.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 20%;
    
}
.badges{
    width: 100%;
    height: 200px;
    background-color: rgb(99, 194, 223);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 130px 500px;
}
.badge1{
    width: 25%;
    height: 200px;
    background-color: rgb(0, 50, 255);
    position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
    
   
}
.badge1 h1{
    font-size: 30px;
    color: white;
}
.badge1 p{
color: white;
font-size: 15px;

}
.badge2{
    width: 25%;
    height: 200px;
    background-color: rgb(0, 76, 255);
    position: relative;
    display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   padding-top: 20px;
   
}
.badge2 h1{
    font-size: 30px;
    color: white;
}
.badge2 p{
color: white;
font-size: 15px;

}
.badge3{
    width: 25%;
    height: 200px;
    background-color: rgb(0, 81, 255);
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
}
.badge3 h1{
    font-size: 30px;
}
.badge3 p{

font-size: 15px;

}
.badge4{
    width: 25%;
    height: 200px;
    background-color: rgb(0, 100, 255);
    position: relative;
    display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   padding-top: 30px;
   
}
.badge4 h1{
    font-size: 30px;
    color: white;
}
.badge4 p{

font-size: 15px;
color: white;

}
#bt{
    background-color: blue;
    color: white;
    padding: 5px;
    border-radius: 4px;
    border-color: blue;
    margin-top: 15px;
}
#bt:hover{
    box-shadow: 0 2px 6px white;
    margin-top: 13px;
}
.circle1{
    width: 25%;
    height: 25%;
    position: absolute;
    top: -20px;
    left: -10px;
    background-color: blue;
    border-radius: 50%;
   
}
.circle2{
    width: 25%;
    height: 25%;
    position: absolute;
    top: -20px;
    left: -10px;
    background-color: blue;
    border-radius: 50%;
}
.circle3{
    width: 25%;
    height: 25%;
    position: absolute;
    top: -20px;
    left: -10px;
    background-color: blue;
    border-radius: 50%;
}
.circle4{
    width: 25%;
    height: 25%;
    position: absolute;
    top: -20px;
    left: -10px;
    background-color: blue;
    border-radius: 50%;
}
.teeth{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
.intro{
    width: 100%;
    height: 600px;
    background-image: url("./dr2.jpg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
   filter: opacity(80%);
   padding: 80px 100px;
}
.intro h1{
    width: 20%;
    color: rgb(112, 114, 143);
    font-size: 50px;
    padding: 10px 0px;
    border-bottom: 2px solid rgb(112, 112, 133);
}
.intro p{
    padding-top: 10px;
    color: rgb(20, 105, 161);
    font-size: 30px;
    text-align: justify;
    font-weight: bold;
}
.any{
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     background-color: rgb(99, 194, 223);
     padding-bottom: 20px;
}
.top{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    color: white;
    padding-top: 25px;
    background-color: rgb(99, 194, 223);
}
.bottom{
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 300px;

}
.d{
    width: 25%;
    height: 400px;
    background-color: blue;
    margin-right: 20px;
    border-radius: 10px;
}
#d1{
    background-color: rgb(0, 50, 255);
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
}
#d1 p,h1{
    margin: 0 5px;
    color: white;
}
#mike{
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin: 15px 0;
}
#d2{
    background-color: rgb(0, 76, 255);
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
#d2 p,h1{
    margin: 0 5px;
    color: white;
}
#jennifer{
     width: 100%;
    height: 200px;
    object-fit: cover;
    margin: 15px 0;

}
#d3{
    background-color: rgb(0, 81, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
#d3 p,h1{
    margin: 10px 5px;
    color: white;
}
#nicholas{
    width: 100%;
    height: 200px;
    object-fit: cover;
   object-position: 25% 20%;
    margin: 15px 0;

}
#d4{
    background-color: rgb(0, 100, 255);
    margin-right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
#mona{
       width: 100%;
    height: 200px;
    object-fit: cover;
   object-position: 25% 20%;
    margin: 15px 0;
    margin-bottom: 3px;
}
#d4 p,h1{
    margin: 0px 5px;
    color: white;
}
.standard{
    width: 100%;
    height: 300px;
    background-color: rgb(99, 194, 223);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.license{
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding-top: 0px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
}
.stan{
    width: 10%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    
}
.s{
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
}
.st1{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.st2{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.st3{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.st4{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.st5{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.st6{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

@media only screen and (max-width: 1017px){
    .badges{
        flex-direction: column;
        width: 100%;
        height: 100vh;
        padding: 0 0;
    }
    .badge1{
    width: 100%;
    height: 25%;
    background-color: rgb(0, 50, 255);
    position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
    
   
}
#pp{
    transform: rotate(90deg);
}
#pp2{
    transform: rotate(-90deg);
}
.badge1 h1{
    font-size: 30px;
    color: white;
}
.badge1 p{
color: white;
font-size: 15px;

}
.badge2{
    width: 100%;
    height: 25%;
    background-color: rgb(0, 76, 255);
    position: relative;
    display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   padding-top: 20px;
   
}
.badge2 h1{
    font-size: 30px;
    color: white;
}
.badge2 p{
color: white;
font-size: 15px;

}
.badge3{
    width: 100%;
    height: 25%;
    background-color: rgb(0, 81, 255);
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
}
.badge3 h1{
    font-size: 30px;
}
.badge3 p{

font-size: 15px;

}
.badge4{
    width: 100%;
    height: 25%;
    background-color: rgb(0, 100, 255);
    position: relative;
    display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   padding-top: 30px;
   
}
.badge4 h1{
    font-size: 30px;
    color: white;
}
.badge4 p{

font-size: 15px;
color: white;

}
#bt{
    background-color: blue;
    color: white;
    padding: 5px;
    border-radius: 4px;
    border-color: blue;
    margin-top: 15px;
}
#bt:hover{
    box-shadow: 0 2px 6px white;
    margin-top: 13px;
}
.circle1{
    width: 10%;
    height: 20%;
    position: absolute;
    top: -20px;
    left: -10px;
    background-color: blue;
    border-radius: 50%;
   
}
.circle2{
    width: 10%;
    height: 20%;
    position: absolute;
    top: -20px;
    left: -10px;
    background-color: blue;
    border-radius: 50%;
}
.circle3{
    width: 10%;
    height: 20%;
    position: absolute;
    top: -20px;
    left: -10px;
    background-color: blue;
    border-radius: 50%;
}
.circle4{
    width: 10%;
    height: 20%;
    position: absolute;
    top: -20px;
    left: -10px;
    background-color: blue;
    border-radius: 50%;
}
.teeth{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
.any{
    width: 100%;
    height: 2000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     background-color: rgb(99, 194, 223);
     padding-bottom: 20px;
}
.top{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    color: white;
    padding-top: 25px;
    background-color: rgb(99, 194, 223);
}
.top h1{
    font-size: 20px;
}
.bottom{
    width: 100%;
    height: 1900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0;

}
.d{
    width: 50%;
    height: 100vh;
    background-color: blue;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px 0;
}
#d1{
    background-color: rgb(0, 50, 255);
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
}
#d1 p,h1{
    margin: 0 0px;
    color: white;
}
#mike{
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin: 15px 0;
}
#d2{
    background-color: rgb(0, 76, 255);
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
#d2 p,h1{
    margin: 0 5px;
    color: white;
}
#jennifer{
     width: 100%;
    height: 200px;
    object-fit: cover;
    margin: 15px 0;

}
#d3{
    background-color: rgb(0, 81, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
#d3 p,h1{
    margin: 10px 5px;
    color: white;
}
#nicholas{
    width: 100%;
    height: 200px;
    object-fit: cover;
   object-position: 25% 20%;
    margin: 15px 0;

}
#d4{
    background-color: rgb(0, 100, 255);
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
#mona{
       width: 100%;
    height: 200px;
    object-fit: cover;
   object-position: 25% 20%;
    margin: 15px 0;
    margin-bottom: 3px;
}
#d4 p,h1{
    margin: 0px 5px;
    color: white;
}
}
@media only screen and (min-width: 1017px) and (max-width: 1670px){
  .badges{
    width: 100%;
    height: 300px;
    background-color: rgb(99, 194, 223);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 100px;
}
.badge1{
    width: 25%;
    height: 300px;
    background-color: rgb(0, 50, 255);
    position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
    
   
}
.badge1 h1{
    font-size: 30px;
    color: white;
}
.badge1 p{
color: white;
font-size: 15px;

}
.badge2{
    width: 25%;
    height: 300px;
    background-color: rgb(0, 76, 255);
    position: relative;
    display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   padding-top: 100px;
   
}
.badge2 h1{
    font-size: 30px;
    color: white;
}
.badge2 p{
color: white;
font-size: 15px;

}
.badge3{
    width: 25%;
    height: 300px;
    background-color: rgb(0, 81, 255);
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
}
.badge3 h1{
    font-size: 30px;
}
.badge3 p{

font-size: 15px;

}
.badge4{
    width: 25%;
    height: 300px;
    background-color: rgb(0, 100, 255);
    position: relative;
    display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   padding-top: 90px;
   
}
.badge4 h1{
    font-size: 30px;
    color: white;
}
.badge4 p{

font-size: 15px;
color: white;

}
}

</style>

<script>
export default {
data(){
    return{
         swiperOptions: {}


    };
},
methods:{
    changeroute(){
        this.$router.push({name:"book"});
        
    },
    /*slideshow(n) {
    const aX = document.getElementsByClassName("aX");
    const baghie = document.getElementsByClassName("baghie");
    const rightclick = document.getElementsByClassName("rightclick");
    let slidepage = 1;
    if(n > baghie.length){
        slidepage = 1;
    }
    if(n < 1){
        slidepage = baghie.length
    }
    for(i = 0 ; i<=baghie.length - 1 ; i++){
        baghie[i].style.display = "none";

    }
    baghie[slidepage - 1].style.display = "block";
    baghie[slidepage - 1].style.left = "0";
    slidepage = slidepage + 1
},*/
time1(){
    this.$router.push({name:"mike"});


},
time2(){
    this.$router.push({name:"jennifer"});


},
time3(){
    this.$router.push({name:"nicholas"});


},
time4(){
    this.$router.push({name:"mona"});


},
 
}
}
</script>