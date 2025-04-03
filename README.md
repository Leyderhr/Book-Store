# Proyecto Vue.js: Sistema de Gestión de Libros

Este proyecto es una aplicación desarrollada con Vue.js que permite la gestión, filtrado y visualización de libros. Este documento explica cómo instalar, correr el proyecto, la estructura del código, las funcionalidades disponibles, y más.
[Proyeco desplegado]([Descárgalo aquí](https://nodejs.org/)
**NOTA:** Aunque el proyecto está desplegado, para una mejor experiencia te recomiendo clonarte el repositorio, ya que la página del desplegue puede generar problemas de funcionamiento en algunos navegadores en version mobile.

---

## **Requisitos previos**
Antes de comenzar, asegúrate de tener instalado lo siguiente:
- **Node.js** (versión 16 o superior): [Descárgalo aquí](https://nodejs.org/)
- **npm** (gestor de paquetes, se incluye con Node.js)
- **Vue CLI** (opcional para desarrollo): Puedes instalarlo con:
  ```bash
  npm install -g @vue/cli
  ```

---

## **Instalación**

1. **Descarga el proyecto del repositorio de GitHub:** 
   [Descárgalo aquí](https://github.com/Leyderhr/Book-Store.git)
   

2. **Instala las dependencias** necesarias con npm:
   ```bash
   npm install
   ```

3. **Corre el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Accede a la aplicación en tu navegador.**

---

## **Principales funcionalidades**

### **1. Filtrado interactivo de libros:**
- Filtra los libros disponibles según:
  - **Título o nombre**: Busca coincidencias parciales en los títulos.
  - **Género**: Selecciona libros de un género específico.
  - **Cantidad de páginas**: Filtra por un número máximo de páginas.

### **2. Gestión de la lista de lectura:**
- Agrega libros a una lista de lectura personalizada.
- Elimina libros de la lista.
- La lista se guarda automáticamente en el almacenamiento local del navegador para que persista entre sesiones.

### **3. Responsividad:**
- Adaptación a pantallas pequeñas:
  - Elementos como los filtros se agrupan en un menú desplegable.
  - Funcionalidades clave, como la lista de lectura, son accesibles fácilmente.

### **4. Visualización elegante:**
- Estilizada con Bootstrap:
  - Uso de componentes como popovers, dropdowns y botones.
  - Efecto "glass" para algunos paneles.

---

## **Cómo contribuir**
Si deseas contribuir a este proyecto no dudes en crear un pull request y estaré emcamtado de aceptar tu ayuda.

---

## **Posibilidades futuras**
Este proyecto puede evolucionar con características adicionales, como:
- Implementación de un backend para almacenar y gestionar libros de manera dinámica.
- Autenticación para usuarios registrados.
- Funcionalidades avanzadas de filtrado, como búsqueda por autor o rango de fechas de publicación.

---
