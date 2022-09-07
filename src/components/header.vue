<template>
     <div class="all">
        <div class="main">
            <div class="menu">
                <div class="dental"></div>
                <div class="no-container">
                <div class="no"><h1>+555 123 179 254</h1></div>
                <div class="no"><h1>new york -calm st-b2 ave- no1</h1></div>
                <div class="no"><h1>dentalcare @dental mail .com</h1></div>
                </div>
                
            </div>
            <div class="click">
                <div class="h"><router-link to="/home">HOME</router-link></div>
                <div class="h"><router-link to="/contact">CONTACT</router-link></div>
                <div class="h"><router-link to="/call">LOGIN</router-link></div>
                <div class="h"><router-link to="/news">NEWS</router-link></div>
            </div>
        </div>
        
     </div>
</template>
<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.all{
    width: 100%;
    height: 170px;
    background-color: white;
    

}


.menu{
    width: 100%;
    height: 120px;
    background-color: rgba(116, 139, 212, 0.363);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 100px;
    padding-bottom: 5px;
}
.dental{
    width: 50%;
    height: 100px;
    background-image: url("./pic/dental.png");
    background-repeat: no-repeat;
    background-size: contain;
}
.no-container{
    width: 50%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.no{
    width: 33.3%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: blue;
    margin-right: 10px;
    padding: 0 5px;
   border-radius: 35px;
}
.no h1{
    font-size: 20px;
}
.click{
    width: 100%;
    height: 50px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(116, 139, 212, 0.363);
    border-top: 2px solid blue;
}
.h{
    width: 25%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
}
.h:hover{
    cursor: pointer;
    border-bottom: 2px solid blue;
}
@media only screen and (max-width:1670px){
    .no h1{
    font-size: 15px;
}
.all{
    width: 100%;
    height: 220px;
    background-color: white;
    

}

.menu{
    width: 100%;
    height: 170px;
    background-color: rgba(116, 139, 212, 0.363);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 100px;
    padding-bottom: 5px;
}
.click{
    width: 100%;
    height: 50px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(116, 139, 212, 0.363);
    border-top: 2px solid blue;
}
.no{
    width: 33.3%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    margin-right: 10px;
    padding: 0 5px;
   border-radius: 35px;
}
}
</style>

<script>
export default {
  
}
</script>