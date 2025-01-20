import { reactive } from "vue";

export const carritoState = reactive({
    itemsCarrito: [],
    totalCarrito: 0,

    agregarCarrito(guitarra){
        const itemExistente = this.itemsCarrito.find(
            item => item.id === guitarra.id
        ) 
        if (itemExistente) {
            itemExistente.cantidad++;
            this.totalCarrito = this.totalCarrito + itemExistente.precio;
        } else {
            this.itemsCarrito.push({ ...guitarra, cantidad: 1})
            this.totalCarrito = this.totalCarrito + guitarra.precio;
        }
    },    
    
    disminuirGuitarra(guitarra){
        this.itemsCarrito.find(
            item => item.id === guitarra.id).cantidad --;
            this.totalCarrito = this.totalCarrito - guitarra.precio;
            if (guitarra.cantidad < 1) {
                this.itemsCarrito = this.itemsCarrito.filter(guitarras => guitarras !== guitarra)                
            }
        },
        
        eliminarGuitarra(guitarra){        
            this.totalCarrito = this.totalCarrito - (guitarra.precio * guitarra.cantidad);
            this.itemsCarrito = this.itemsCarrito.filter(guitarras => guitarras !== guitarra);
    },


    vaciarCarrito(){
        this.itemsCarrito = [];
        this.totalCarrito = 0;
    },

    existeEnCarrito(guitarra){
        const itemExistente = this.itemsCarrito.find(
            item => item.id === guitarra.id
        ) 
        if (itemExistente) {
            return true
        } 
    }
    
});