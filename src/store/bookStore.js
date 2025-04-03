import { defineStore } from "pinia";
import { ref, onMounted, computed, watch } from "vue";

export const useBookStore = defineStore("bookStore", () => {
  const books = ref([]);
  const readingList = ref([])
  const searchQuery = ref("");
  const selectedGenre = ref("Todos");
  const maxPages = ref(1345);
  const selectedPages = ref(maxPages.value);

  const fetchBooks = async () => {
    try {
      const response = await fetch("/books.json"); // 📥 Cargar datos desde public/books.json
      books.value = await response.json();
      // readingList.value.push(books.value[0]); 
    } catch (error) {
      console.error("Error al cargar los libros:", error);
    }
  };

  onMounted(fetchBooks); // 🔄 Cargar libros cuando la app inicia

  // Computed para obtener géneros únicos
  const genres = computed(() => {
    const uniqueGenres = new Set(books.value.map((book) => book.genre));
    return ["Todos", ...uniqueGenres];
  });

  // Computed para filtrar los libros según los filtros seleccionados
  const filteredBooks = computed(() => {
    return books.value.filter((book) => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.value.toLowerCase());
      const matchesGenre = selectedGenre.value === "Todos" || book.genre === selectedGenre.value;
      const matchesPages = book.pages <= selectedPages.value;
      return matchesSearch && matchesGenre && matchesPages;
    });
  });

  // Computed para contar los libros disponibles
  const totalBooks = computed(() => books.value.length); // Total de libros disponibles
  const booksInSelectedGenre = computed(() => {
    if (selectedGenre.value === "Todos") return totalBooks.value;
    return books.value.filter((book) => book.genre === selectedGenre.value)
      .length;
  });

  // Métodos para actualizar los filtros dinámicamente
  function updateSearchQuery(value) {
    searchQuery.value = value;
  }

  function updateSelectedGenre(value) {
    selectedGenre.value = value;
  }

  function updateSelectedPages(value) {
    selectedPages.value = value;
  }

  function addToReadingList(book) {
    if (!readingList.value.some(item => item.id === book.id)) {
      readingList.value.push(book); // Añadir el libro solo si no está ya en la lista
    }
  }

  function removeFromReadingList(book) {
    readingList.value = readingList.value.filter(item => item.id !== book.id); // Eliminar por ID
  }

  function findBookInReadingList(book) {
    return readingList.value.some(item => item.id === book.id); // Verifica si el libro está en la lista
  }

  // Cargar la lista de lectura desde localStorage al iniciar
  const loadReadingListFromLocalStorage = () => {
    const savedList = localStorage.getItem("readingList"); // Obtener los datos de localStorage
    if (savedList) {
      readingList.value = JSON.parse(savedList); // Convertir el JSON a un array
    }
  };

  // Guardar la lista de lectura en localStorage cada vez que cambia
  watch(readingList, (newValue) => {
    localStorage.setItem("readingList", JSON.stringify(newValue)); // Convertir la lista a JSON y guardarla
  },
  {deep: true}
);

  onMounted(() => {
    fetchBooks(); // Cargar los libros
    loadReadingListFromLocalStorage(); // Cargar la lista de lectura desde localStorage
  });
  

  return { 
    books,
    searchQuery,
    selectedGenre,
    maxPages,
    selectedPages,
    genres,
    filteredBooks,
    totalBooks,
    readingList,
    booksInSelectedGenre,
    updateSearchQuery,
    updateSelectedGenre,
    updateSelectedPages,
    addToReadingList,
    removeFromReadingList,
    findBookInReadingList 
  };
});
