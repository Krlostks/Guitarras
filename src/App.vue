<script setup>
import { ref } from 'vue'
import  Header from './components/Header.vue'
import  Footer from './components/Footer.vue'
import { db } from './data/guitars'
import Guitarra from './components/Guitarra.vue'
import { carritoState } from './data/carrito'
import { provide } from 'vue';

provide ('carritoState', carritoState);

const guitarras = ref(db)

</script>
<template>
  <Header/>

  <main class="container-xl mt-5">
        <h2 class="text-center" id="title-collection">Nuestra Colección </h2>

        <div class="row mt-5">        
        <Guitarra v-for="guitarra in guitarras"  :guitarra="guitarra"/>
        </div>
  </main>

  <Footer/>
</template>
