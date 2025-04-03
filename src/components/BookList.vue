<script setup>
import { useBookStore } from "../store/bookStore"; // 📌 Asegurar que se importa el store
import BookItem from "./BookItem.vue";

const store = useBookStore();

</script>


<template>
  <div class="book-container">
    <!-- Lista de libros -->
    <div v-if="store.filteredBooks.length" class="book-list">
      <BookItem v-for="book in store.filteredBooks" :key="book.id" :book="book" class="book-item" />
    </div>

    <p v-else>No hay libros disponibles.</p>
  </div>
</template>


<style scoped>

.book-container{
  margin-right: 200px;
}

.book-list {
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}


.genre {
  margin: 8px;
  padding: 8px;
}

.book-item {
  box-sizing: border-box;
}


/* Media query para pantallas pequeñas */
@media (max-width: 990px) {
  .book-list, .book-container {
    grid-template-columns: repeat(2, 1.5fr);
    margin: auto;
    justify-content: center

  }
}

@media (max-width: 700px) {
  .book-list, .book-container {
    grid-template-columns: 2fr;
    margin: auto;
  }
}

</style>
