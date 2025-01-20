<script setup>
    import GuitarraCarrito from './GuitarraCarrito.vue';
    import { inject } from 'vue';

    const carritoState = inject('carritoState');

    function vaciarCarrito() {
        carritoState.vaciarCarrito();
    }
    function scrolling() {
        document.querySelector('#title-collection').scrollIntoView({
            behavior: "smooth",
            block: "start",
        }) 
    }
    
</script>
<template>
    <nav class="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
        <div class="carrito">
            <img class="img-fluid" src="/img/carrito.png" alt="imagen carrito" />
            <div id="carrito" class="bg-white p-3">
                <table class="w-100 table" v-if="(carritoState.itemsCarrito.length !== 0)">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th> 
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                        </tr>
                    </thead> 
                    <tbody>
                        <GuitarraCarrito v-for=" guitarra in carritoState.itemsCarrito" :guitarra="guitarra"/>                          
                    </tbody>                 
                </table>
                <p class="text-center" v-else >El carrito esta vacio :c</p>
                <p class="text-end">Total pagar: <span class="fw-bold">${{ carritoState.totalCarrito }}</span></p>

                <button class="btn btn-dark w-100 mt-3 p-2" @click="vaciarCarrito();" 
                v-if="(carritoState.itemsCarrito.length !==0)">Vaciar Carrito</button>

                <button class="btn btn-dark w-100 mt-3 p-2" @click="scrolling();" 
                v-else>Vamos a comprar</button>
            </div>
        </div>
    </nav>
</template>