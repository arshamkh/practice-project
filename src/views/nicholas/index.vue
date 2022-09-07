<template>
    <div class="all">
        <div class="inter">
            <input type="text" id="inp" placeholder="your mail">
            <button @click="reserve" id="bt">reservation</button>
            <div id="res"></div>
        </div>
        <div class="nicy">
        <div class="nic" id="nic1"></div>
        <div class="nic" id="nic2"></div>
        <div class="nic" id="nic3"></div>
        <div class="nic" id="nic4"></div>
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
.nicy{
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.nic{
    width: 25%;
    height: 100%;
    filter: opacity(90%);
}
#nic1{
    background-image: url("./nic1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;

}
#nic2{
     background-image: url("./nic2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
     background-position: 0 0;

}
#nic3{
     background-image: url("./nic3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
     background-position: 0px 0;
}
#nic4{
     background-image: url("./nic4.jpg");
    background-repeat: no-repeat;
    background-size: cover;
     background-position: 0px 0;
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