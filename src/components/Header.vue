<script setup lang="ts">
import { useBookStore } from "../store/bookStore";
import { computed, onMounted } from "vue";
import { useSidebarStore } from "../store/sidebarStore";

const store = useBookStore();
const sidebarStore = useSidebarStore();

const availableBooks = computed(() => {
  return store.totalBooks - store.readingList.length; // Calcula los libros disponibles
});

// Función para inicializar el popover en el elemento h2
onMounted(() => {
  const h2Element = document.querySelector('[data-bs-toggle="popover"]');
  if (h2Element) {
    new bootstrap.Popover(h2Element, {
        html: true
    }); 
  }
});

const popoverContent = computed(() => {
  return `<h5>Disponibles</h5><br> En Total: ${availableBooks.value} <br>Por género: ${store.booksInSelectedGenre}`;
});
</script>

<template>
  <nav class="navbar bg-body-tertiary text-bg-primary sticky-top">
    
    <h1 class="popover-target" data-bs-toggle="popover" 
    :data-bs-content="popoverContent">
      📖
    </h1>

    <!-- Contadores -->
    <p class="d-none d-lg-block"> Total disponibles: {{ availableBooks }}</p>
    <p class="d-none d-lg-block">
      En este género: {{ store.booksInSelectedGenre }}
    </p>

    <!-- Filtro por páginas (slider) -->
    <div class="slider-container">
      <label for="page-slider"
        >Filtrar por páginas: {{ store.selectedPages }} o menos <br
      /></label>
      <input
        id="page-slider"
        type="range"
        v-model="store.selectedPages"
        :max="store.maxPages"
        min="1"
        step="10"
        class="slider"
      />
    </div>

    <!-- Campo de búsqueda -->
    <input
      v-model="store.searchQuery"
      placeholder="Buscar libros..."
      class="form-control bg-white text-dark w-25"
    />

    <!-- Filtro por género -->
    <select v-model="store.selectedGenre" class="form-control genre">
      <option v-for="genre in store.genres" :key="genre.genre" :value="genre">
        {{ genre }}
      </option>
    </select>

    <!-- Dropdown para pantallas pequeñas -->
    <div class="dropdown">
      <a
        class="btn btn-primary dropdown-toggle bg-white text-dark"
        type="button"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filtrar por
      </a>

      <div class="dropdown-menu p-3 w-100" aria-labelledby="dropdownMenuButton">
        <!-- Filtro por páginas (slider) -->
        <li>
          <label for="page-slider"
            >Páginas: {{ store.selectedPages }} o menos</label
          >
          <input
            id="page-slider"
            type="range"
            v-model="store.selectedPages"
            :max="store.maxPages"
            min="1"
            step="10"
            class="form-range mb-3 w-75"
          />
        </li>
        <!-- Filtro por género -->
        <li>
          Género
          <select v-model="store.selectedGenre" class="form-select w-75">
            <option
              v-for="genre in store.genres"
              key="genre.genre"
              :value="genre"
            >
              {{ genre }}
            </option>
          </select>
        </li>
      </div>
    </div>

    <!-- Botón para mostrar/ocultar sidebar -->
    <button class="toggle-sidebar-btn" @click="sidebarStore.toggleSidebar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z"></path>
      </svg>
    </button>
  </nav>
</template>

<style scoped>

.slider-container {
  width: 100px;
}
.dropdown {
  display: none;
}

.toggle-sidebar-btn {
  display: none;
  margin: 0 10px;
}

.reading-list-sidebar {
  transition: transform 0.3s ease;
  /* Ocultar el sidebar por defecto */
  transform: translateX(100%);
}

.reading-list-sidebar.active {
    /* Mostrar el sidebar cuando esté activo */
  transform: translateX(0);
}

@media (max-width: 1378px) {


  .toggle-sidebar-btn {
    display: block;
    margin-right: 10px;
  }

  .header-content {
    flex-direction: column;
    align-items: flex-start;
  }

  input,
  select,
  .slider-container {
    width: 90%;
  }

  .slider-container,
  .genre,
  p {
    display: none;
  }

  .dropdown {
    display: block; /* Mostrar el dropdown */
  }
}

h1 {
  margin-left: 10px;
}

.navbar {
  z-index: 1000;
  flex-wrap: nowrap;
  background-color: #0b5ed7;
}

.slider-container {
  font-size: 15px;
  width: 20%;
}

.slider {
  width: 100%;
  margin: 0;
}

input,
select {
  width: 10%;
  margin: 0 10px;
}
</style>
