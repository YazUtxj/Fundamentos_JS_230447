// //OBJETOS
// const nombre ="tablet";
// const precio =300;
// const disponible =true;

const producto ={
    nombre:"tablet" ,
    disponible:true ,
    precio:300
}
console.log(producto)
console.table(producto)
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

//DESTRUCTUCTURING
const {nombre ,precio ,disponible} = producto
console.log(nombre)
console.log(precio)
console.log(disponible)
// OBJECT  LITERAL ENHACEMENT 
const autenticado =true;
const usuario ="juan"
const nuevoObjeto = {
    autenticado:autenticado,
    usuario:usuario
}
console.table(nuevoObjeto)
