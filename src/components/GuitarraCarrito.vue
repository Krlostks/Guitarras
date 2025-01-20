<script setup>
import { inject } from 'vue';

const carritoState = inject('carritoState');

defineProps({
    guitarra: {
        type : Object,
        required : true
    }
})

    function disminuirGuitarra(guitarra) {
        carritoState.disminuirGuitarra(guitarra);
    }

    function eliminarGuitarra(guitarra) {
        carritoState.eliminarGuitarra(guitarra);
    }
    function agregarCarrito(guitarra){
        carritoState.agregarCarrito(guitarra);
    }
</script>
<template>
        <tr>
            <td>
                <img class="img-fluid" :src="'/img/' + guitarra.imagen + '.jpg'" :alt="'imagen' + guitarra.nombre">
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
</template>