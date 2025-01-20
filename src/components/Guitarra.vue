<script setup>
import { inject } from 'vue';

const carritoState = inject('carritoState');

defineProps({
    guitarra: {
        type : Object,
        required : true
    }
})
function agregarCarrito(guitarraActual){
    carritoState.agregarCarrito(guitarraActual);
}
</script>
<template>
    <div class="col-md-6 col-lg-4 my-4 row align-items-center">
                <div class="col-4">
                    <img class="img-fluid" :src="'/img/'+ guitarra.imagen+'.jpg'" :alt="'imagen '+guitarra.nombre">
                </div>
                <div class="col-8">
                    <h3 class="text-black fs-4 fw-bold text-uppercase">
                        {{ guitarra.nombre }}</h3>
                    <p>{{ guitarra.descripcion}}</p>
                    <p class="fw-black text-primary fs-3">${{ guitarra.precio }}</p>
                    <button 
                        v-if="(carritoState.existeEnCarrito(guitarra) === true)"
                        type="button"
                        class="btn btn-dark w-100"
                    >Agregado al Carrito <i :value="guitarra.id" id="aggIconId" class="bx bxs-check-circle"/></button>
                    <button 
                    v-else
                        @click="agregarCarrito(guitarra)"
                        type="button"
                        class="btn btn-dark w-100"
                    >Agregar al Carrito</button>
                </div>
            </div>
</template>