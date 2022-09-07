<template>
    <div class="all">
        <div class="inter">
            <input type="text" id="inp" placeholder="your mail">
            <button @click="reserve" id="bt">reservation</button>
            <div id="res"></div>
        </div>
        <div class="miky">
        <div class="mike" id="mike1"></div>
        <div class="mike" id="mike2"></div>
        <div class="mike" id="mike3"></div>
        <div class="mike" id="mike4"></div>
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
.miky{
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.mike{
    width: 25%;
    height: 100%;
    filter: opacity(90%);
}
#mike1{
    background-image: url("./mike1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -130px 0;

}
#mike2{
     background-image: url("./mike2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
     background-position: -150px 0;

}
#mike3{
     background-image: url("./mike3.png");
    background-repeat: no-repeat;
    background-size: cover;
     background-position: -80px 0;
}
#mike4{
     background-image: url("./mike4.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
     background-position: -250px 0;
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