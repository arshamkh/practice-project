<template>
    <div class="all">
        <div class="inter">
            <input type="text" id="inp" placeholder="your mail">
            <button @click="reserve" id="bt">reservation</button>
            <div id="res"></div>
        </div>
        <div class="jeny">
        <div class="jen" id="jen1"></div>
        <div class="jen" id="jen2"></div>
        <div class="jen" id="jen3"></div>
        <div class="jen" id="jen4"></div>
        </div>
    </div>
</template>
<style scoped>
.all{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.inter{
    width: 100%;
    height: 20%;
    background-color: rgb(10, 100, 248);
    display: flex;
    justify-content: center;
    align-items: center;
}
#inp{
    margin-right: 10px;
}
.jeny{
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.jen{
    width: 25%;
    height: 100%;
    filter: opacity(90%);
}
#jen1{
    background-image: url("./jen1.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -50px 0;

}
#jen2{
     background-image: url("./jen2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
     background-position: -30px 0;

}
#jen3{
     background-image: url("./jen3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
     background-position: -380px 0;
}
#jen4{
     background-image: url("./jen4.jpg");
    background-repeat: no-repeat;
    background-size: cover;
     background-position: -350px 0;
}
#res{
    padding: 20px;
    background-color: white;
    display: none;
    color: blue;
     margin-left: 20px;
    border-radius: 10px;
}
</style>
<script>
export default {
    methods:{
        reserve(){
            const inp = document.getElementById("inp").value;
            const bt = document.getElementById("bt");
               const res = document.getElementById("res");
            res.style.display = "block";
            res.innerHTML ="thanks:" +"" + inp;
            console.log(inp)

        }
    }
}
</script>