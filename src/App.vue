<script setup>
import BookList from "./components/BookList.vue";
import Header from "./components/Header.vue";
import SideBarComponent from "./components/SideBarComponent.vue";


</script>


<template>
  <Header />
  <div class="container mt-4">
    <!-- Header  -->
    <!-- Sección de Libros Disponibles -->
    <BookList />
    <!-- Línea divisoria -->
    <hr />
    <!-- Sección de Lista de Lectura -->
     <SideBarComponent/>
  </div>
</template>

<style>
/* Estilos opcionales para mejorar la apariencia */
.container {
  max-width: 1200px;
  margin: auto;
}

h1 {
  /* font-size: 2rem; */
  color: #ffffff;
}
</style>
