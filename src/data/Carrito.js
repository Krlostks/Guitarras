import { reactive } from "vue";

export const carritoState = reactive({
    itemsCarrito: [],
    totalCarrito: 0,

    agregarCarrito(guitarra){
        const itemExistente = this.itemsCarrito.find(
            item => item.id === guitarra.id
        ) 
        if (itemExistente) {
            console.log('hola 1')
            itemExistente.cantidad++;
            this.totalCarrito = this.totalCarrito + itemExistente.precio;
        } else {
            this.itemsCarrito.push({ ...guitarra, cantidad: 1})
            console.log('hola 2')
            this.totalCarrito = this.totalCarrito + guitarra.precio;
            console.log(this.totalCarrito)
        }
    },    
    
    disminuirGuitarra(guitarra){
        console.log(guitarra.id);
        this.itemsCarrito.find(
            item => item.id === guitarra.id).cantidad --;
            this.totalCarrito = this.totalCarrito - guitarra.precio;
            console.log(this.totalCarrito)
            if (guitarra.cantidad < 1) {
                document.querySelector('#aggIconId'+guitarra.id).removeAttribute("class");
                this.itemsCarrito = this.itemsCarrito.filter(guitarras => guitarras !== guitarra)                
            }
        },
        
        eliminarGuitarra(guitarra){        
            this.totalCarrito = this.totalCarrito - (guitarra.precio * guitarra.cantidad)
            this.itemsCarrito = this.itemsCarrito.filter(guitarras => guitarras !== guitarra)
            document.querySelector('#aggIconId'+guitarra.id).removeAttribute("class");            
    },


    vaciarCarrito(){
        this.itemsCarrito.array.forEach(guitarra => {            
            document.querySelector('#aggIconId'+ guitarra.id).removeAttribute("class");
        });
        this.itemsCarrito = [];
        this.totalCarrito = 0;
    },

    scrollingComprar(){
        document.querySelector('#title-collection').scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
        
    }
    
});