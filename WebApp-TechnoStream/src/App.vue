<template>
  <div id="app">
    <the-header></the-header>
    <router-view class="container" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
body {
  margin: 0px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #234;
}

img{
  max-width: 100%;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

a.router-link-exact-active {
  color: #4b8;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.conteudo {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  grid-gap: 30px;
}

@media screen and (max-width: 400px) {
  .conteudo {
    display: block;
  }
}
</style>
