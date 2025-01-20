<script setup>
    import { inject } from 'vue';

    const carritoState = inject('carritoState');

    function disminuirGuitarra(guitarra) {
        carritoState.disminuirGuitarra(guitarra);
    }

    function eliminarGuitarra(guitarra) {
        carritoState.eliminarGuitarra(guitarra);
    }

    function vaciarCarrito() {
        carritoState.vaciarCarrito();
    }
    function agregarCarrito(guitarra){
        carritoState.agregarCarrito(guitarra);
    }
    function scrolling() {
        carritoState.scrollingComprar()
    }
    window.onload = function(){console.log('items: ' + carritoState.itemsCarrito.length)}
    
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
                        <tr v-for=" guitarra in carritoState.itemsCarrito" :guitarra="guitarra">
                            <td>    
                                <img class="img-fluid" :src="'/img/' + guitarra.imagen+ '.jpg'" :alt="'imagen'+ guitarra.nombre">
                            </td>
                            <td>{{ guitarra.nombre }}</td>
                            <td class="fw-bold">
                                $ {{ guitarra.precio }}
                            </td>
                            <td class="flex align-items-start gap-4">
                                <button type="button" class="btn btn-dark" @click="disminuirGuitarra(guitarra)">
                                    -
                                </button>
                                {{ guitarra.cantidad }}
                                <button type="button" class="btn btn-dark" @click="agregarCarrito(guitarra)">
                                    +
                                </button>
                            </td>
                            <td>
                                <button class="btn btn-danger" type="button" @click="eliminarGuitarra(guitarra)">
                                    X
                                </button>
                            </td>
                        </tr>
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