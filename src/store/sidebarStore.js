import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebarStore = defineStore("sidebarStore", () => {
  // Estado para controlar la visibilidad del sidebar
  const isSidebarActive = ref(false);

  // Función para alternar el estado del sidebar
  const toggleSidebar = () => {
    isSidebarActive.value = !isSidebarActive.value;
  };

  // Función para activar el sidebar
  const activateSidebar = () => {
    isSidebarActive.value = true;
  };

  // Función para desactivar el sidebar
  const deactivateSidebar = () => {
    isSidebarActive.value = false;
  };

  return {
    isSidebarActive,
    toggleSidebar,
    activateSidebar,
    deactivateSidebar,
  };
});
