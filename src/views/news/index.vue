<template>
    <div class="all">
        <button @click="get">click get data</button>
    </div>
</template>
<style scoped>
.all{
    width: 100%;
    height: 100vh;
    background-color: red;
}
</style>
<script>
import axios from "axios"
import cheerion from "cheerio"
export default {
    methods:{
        get(){
            let url ="https://news.yahoo.com/covid-predictions-experts-done-them-093023296.html"
        }
    }
}
</script>