<template>
  <div class="home">
    <div v-if="loading">
      <page-loading />
    </div>
    <transition>
      <div v-if="data" class="conteudo">
        <div class="">
          <h1>Sobre a {{ data.titulo }}</h1>
          <p>{{ data.descricao }}</p>
          <router-link class="btnCursos" tag="button" to="/cursos"
            >Ir para Cursos</router-link
          >
          <div class="avaliacoes">
            <h2>Avaliações</h2>
            <ul class="avaliacoes-lista">
              <li  v-for="avaliacao in data.avaliacoes" :key="avaliacao.nome">
                <p class="avaliacoes-nome">{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender-agora.png" alt="aprenda web designer" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "HomeView",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  },
};
</script>

<style>
.avaliacoes-nome{
  border-bottom: 1px solid black;
  font-size: 1.5rem;
}

.avaliacoes-lista{
  background: rgb(233, 245, 240);
  border: 2px solid rgb(189, 158, 158);
  text-align: start;
  border-radius: 5px;
  box-shadow: 2px 4px 4px;
  padding: 5px;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.btnCursos {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 15px 40px;
  font-size: 1rem;
  margin: 10px 0 40px 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
}
</style>
