<template>
  <div id="app">
  <HeaderMenu />
 <router-view/>
 

  </div>
</template>

<script>
import HeaderMenu from "./components/header.vue";
import Home from "./views/home/index.vue";
import Contact from "./views/contact/index.vue";
import Call from "./views/call/index.vue";
import Book from "./views/book/index.vue";
import Mike from "./views/mike/index.vue";
import Jennifer from "./views/jennifer/index.vue";
import Nicholas from "./views/nicholas/index.vue";
import Mona from "./views/mona/index.vue";
import News from "./views/news/index.vue"
export default {
  name: 'App',
  components: {
    HeaderMenu,
    Home,
    Contact,
    Call,
    Book,
    Mike,
    Jennifer,
    Mona,
    Nicholas,
    News,
  },
  methods:{
    
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
