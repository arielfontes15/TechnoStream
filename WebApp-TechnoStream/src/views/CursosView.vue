<template>
  <div>
    <div v-if="loading">
      <page-loading />
    </div>
    <transition>
      <div v-if="data" class="conteudo">
        <div>        
          <h1>{{ data.titulo }}</h1>
          <p>{{ data.descricao }}</p>
        </div>

        <ul class="cursos-lista">
          <li v-for="curso in data.cursos" :key="curso.id">
            <h2>
              <router-link :to="{name: 'curso', params: {curso: curso.id}}">
                Curso: {{ curso.nome }} - Total de Aulas:
                {{ curso.totalAulas }} | {{ curso.horas }} Horas
              </router-link>
            </h2>
            <p>Descrição do curso: {{ curso.descricao }}</p>
          </li>
        </ul>
        <!-- <p>{{ data.cursos }}</p> -->
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "CursosView",
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  },
};
</script>

<style>
.cursos-lista li{
  margin-bottom: 40px;
  border-bottom: 2px solid black;
}
</style>
