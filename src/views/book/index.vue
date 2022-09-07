<template>
    <div class="all">
        <label for="inp">type your name and phone num</label>
        <input type="text" id="inp">
        <button id="bt" @click="chap">send reservation</button>
        <div class="res">{{username}}</div>

    </div>
</template>
<style scoped>
.all{
    width: 100%;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.res{
    padding: 8px 80px;
    background-color: white;
    margin-top: 20px;
}
#bt{
    margin: 20px 0;
}
</style>
<script>
export default {
    data(){
        
       return{
           username:"",
          
       }

    },
    methods:{
        chap(){
            let inp = document.getElementById("inp").value;
            if(inp==""){
                alert("type somethings")
            }else{
                 this.username = "tanks for your booking, dear" + "  " +":" + inp;
            console.log(this.username);

            }
           
        }

    }
}
</script>