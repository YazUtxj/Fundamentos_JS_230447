// Comentarios de una sola linea
/* Comwentarios
multilinea 
*/
//EJERCICIO 1  DECLARACION DE VARIABLES
// a) VAR
var miNombre = "Yazmin";
var miApellido ;
var miEdad =19 ;
// el objeto de consola nos permite enviar datos a la terminal y poder visitar
// el valor de una variable   o  resultado de una funcion o metodo
miApellido = "Gutierrez Hernandez"
console.log("Ambas variablers fueron inicializadas" ,miNombre,miApellido);


// b ) const
const miUniversidad  ="UTXJ";
const miMatricula =230447 ;
 console.log("Hola " , miNombre , "",  miApellido, "se que estudias en " ,miUniversidad , "asignaron la matricula" ,miMatricula
    , "y tienes edad de " , miEdad , "años"
 );
 

 // para SABER  el tipo de dato que tiene una variable o comnstante podemos utilizaR
 // LA FUNCION typeOff()
console.log ("Analizando los datos puedo deducir que");
console.log("mi nombre es " ,typeof(miNombre));
console.log("Mi apellido es",typeof(miApellido))
console.log("Mi universidad es",typeof(miUniversidad))
console.log("mi edad es del tioo" ,typeof(miEdad))
console.log("mi matricula es del tipo" ,typeof(miMatricula))

// c)LET
let miFechaNacimiento ="2005-05-24";
let miColorFavorito ;

console.warn("... Declaracion de variable usando :LEFT");
console.log("Genial , te voy conociendo mejor , ahora se que tu naciste el",miFechaNacimiento , " y tu  color favorito es :mmmm dejame pensar")
 miColorFavorito,"Naranja ";
console.log( `creo que es ${miColorFavorito} , le atine`)// la manera de mezclar textos fijos con 
// el valor actual de las variables se les conoce como interpretacion y deben iniciar  y finalizar con un backing `` o tilde inversa
console.log("mi  color favorito es ", typeof(miColorFavorito))
console.log("mi fecha de nacimiento es ", typeof(miFechaNacimiento))git add .add