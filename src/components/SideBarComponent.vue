<script setup lang="ts">
import { computed } from "vue";
import { useBookStore } from "../store/bookStore"; // Conectar al store
import { useSidebarStore } from "../store/sidebarStore";

const store = useBookStore(); // Store de libros
const sidebarStore = useSidebarStore();

// Lista de deseos (libros seleccionados)
const wishlist = computed(() => store.readingList); // Libros favoritos
</script>

<template>
  <!-- Sidebar -->
  <div class="sidebar"  :class="{ active: sidebarStore.isSidebarActive }" id="wishlist-sidebar">
    <h2>Lista de deseos ({{ wishlist.length }})</h2>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="book in wishlist" :key="book.id">
        <!-- Mostrar título del libro -->
        <span>{{ book.title }}</span>
        <!-- Botón para eliminar de la lista de deseos -->
        <button @click="store.removeFromReadingList(book)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Sidebar adaptado */
.sidebar {
  width: 300px; /* Ajustar el ancho */
  position: fixed;
  top: 70px;
  right: 0; /* Posicionar en el lado derecho */
  height: 100%;
  border-left: 2px solid #020e4a;
  background-color: #f9f9f9; /* Fondo claro */
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2); /* Sombra */
  padding: 20px;
  overflow-y: auto; /* Desplazamiento si hay muchos libros */
  transform: translateX(0);
  transition: transform 0.3s ease;
}

.sidebar.active {
  transform: translateX(0); /* Mostrar el sidebar cuando esté activo */
}

h2 {
  font-size: 20px;
  margin: 20px 0;
}

.list-group-item {
  display: flex;
  justify-content: space-between; /* Distribuir título y botón */
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #ffffff; /* Fondo de cada elemento */
  border: 1px solid #ddd; /* Borde */
}

button {
  background-color: #ff4d4d; /* Botón rojo */
  color: #ffffff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #d93636; /* Color más intenso al pasar el mouse */
}

@media (max-width: 1378px) {
  .sidebar {
    transform: translateX(100%);
  }
}
</style>
