<template>
    <div class="all">
        <div class="inter">
            <input type="text" id="inp" placeholder="your mail">
            <button @click="reserve" id="bt">reservation</button>
            <div id="res"></div>
        </div>
        <div class="mony">
        <div class="mona" id="mona1"></div>
        <div class="mona" id="mona2"></div>
        <div class="mona" id="mona3"></div>
        <div class="mona" id="mona4"></div>
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
.mony{
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.mona{
    width: 25%;
    height: 100%;
    filter: opacity(90%);
}
#mona1{
    background-image: url("./mona1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -130px 0;

}
#mona2{
     background-image: url("./mona2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
     background-position: -130px 0;

}
#mona3{
     background-image: url("./mona3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
     background-position: -15px 0;
}
#mona4{
     background-image: url("./mona4.jpg");
    background-repeat: no-repeat;
    background-size: cover;
     background-position: -180px 0;
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