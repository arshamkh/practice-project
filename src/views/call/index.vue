<template>
<div class="all">
    <div class="container">
<h1>welcome to profile pannel</h1>
<div class="inpute5" id="inpute6">
    <input type="text" required v-model="modal.user">
    <label for="">username</label>
</div>
<div class="inpute5">
    <input type="password" required v-model="modal.pass">
    <label for="">password</label>
</div>

<button class="login" id="loged" @click="login">
    login
    <span></span><span></span>
    <span></span><span></span>
</button>



</div>
</div>

</template>
<style scoped>
.all{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
}
.container{
    margin-top: 50px;
    width: 350px;
    height: 400px;
    padding: 40px;
    background: #141414;
    border-radius: 10px;
}
.inpute5{
    position: relative;
}
h1{
    margin-bottom: 30px;
    padding: 0;
    color: #fff;
    text-align: center;
}
.inpute5 input{
    width: 100%;
    color: #fff;
    padding: 10px;
    font-size: 20px;
    letter-spacing: 2px;
    margin-bottom: 30px;
    border: none;
    outline: none;
    border-bottom: 1px solid #fff;
    background: transparent;
}
.inpute5 label{
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 18px;
    color: #fff;
    transition: all 0.5s;
    pointer-events: none;
}
.inpute5 input:hover ~ label ,
.inpute5 input:valid ~ label{
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 14px;
}
.login{
    position: relative;
    display: inline-block;
    padding: 10px 105px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 30px;
    letter-spacing: 4px;
}
.login:hover{
    background: #03e9f4;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 100px #03e9f4;
    
}
.login span{
    position: absolute;
    display: inline-block;
}
</style>
<script>
import axios from "axios"
export default {
    data(){
        return{
            some:null,
            modal:{
            user:null,
            pass:null
        }
        }
    },
    methods:{
        async get(){
            const res = await axios.get("https://reqres.in/api/users/2")
            if(res.status==200){
                this.some = res.data
            }
        },
       
       async login(){
           const res = await axios.post("https://reqres.in/api/users/2/create" ,this.modal)
           if(this.modal.user == null){
               alert("type some username")
           }else{
               console.log(res);
               this.get();
               this.$router.push({name:"home"});
           }
           


       }
    }
    
}
</script>