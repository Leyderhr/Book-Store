<script setup lang="ts">
import SaveBookComponent from './SaveBookComponent.vue';

defineProps({
    book: Object // 📌 Recibe el libro como prop
});
</script>

<template>
    <div class="book-item card">
        <img :src="book.cover" :alt="book.title" class="cover card-image-top" />
        <div class="book-info card-body">
            <h3 class="card-title">{{ book.title }}</h3>
            <p class="card-text">
                Autor: {{ book.author }} <br>
                Año: {{ book.year }} <br>
                Género: {{ book.genre }}
            </p>
        </div>

        <SaveBookComponent :book="book"/>
    </div>
</template>



<style scoped>
.book-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    color: white;
    background-color:#0d6efd;
    webkit-backdrop-filter: blur(10px);
}

.cover {
    width: 100px;
    height: 150px;
    margin-right: 15px;
}

.book-info h3 p{
    margin-left: 13px;
    text-align: left;
    font-size: 1.2em;
}   
</style>