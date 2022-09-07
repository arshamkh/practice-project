<template>
<div class="contact">
    <div class="cards"><p>email:</p><a href="mailto:dentalvare@cares.com">dentalvare@cares.com</a></div>
    <div class="cards"><p>phone:</p><a href="tel:+555 123179254">+555 123179254</a></div>
    <div class="cards"><p>adress:</p><a href="">new york city - calm st - b2 ave -no1</a></div>
    <div class="cards"><p>suggestion:</p><input type="text" id="inp"><button @click="send" id="bt">send</button></div>
    <div class="cards" id="c1">
        <h1>which doctors do you prefer ?</h1>
    <div class="any">
    <input type="checkbox" class="chek" v-model="type">dr.mike
    <input type="checkbox" class="chek">dr.nicholas
    <input type="checkbox" class="chek">dr.mona
    <input type="checkbox" class="chek">dr.jennifer
    </div>
    </div>
    
</div>
</template>
<style scoped>
.contact{
    width: 100%;
    height: 100vh;
    background-color: rgb(105, 163, 211);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.cards{
    width: 100%;
    height:300px ;
    margin: 20px 0;
    background-color: blue;
    border-radius: 20px;
    box-shadow: 0 0 0 white;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
}
.cards p{
    font-size: 30px;
    color: white;
    margin-bottom: 5px;
}
.cards a{
    font-size: 20px;
    color: white;
}
#inp{
    margin-bottom: 5px;
}
#bt{
    border-radius: 5px;
    font-size: 15px;
}
#bt:hover{
    box-shadow: 0 0 4px white;
    margin-top: 4px;
}
#c1{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
}
.any{
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.chek{
    border-radius: 50%;
    margin: 0 10px;
}
</style>
<script>
export default {
    methods:{
       send(){
           const inp = document.getElementById("inp").value;
            const bt = document.getElementById("bt");
            console.log(inp)
       },
       type(){
           
       }

    }
}
</script>