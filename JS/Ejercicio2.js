// TIPOS DE DATOS
// 1-UNDEFINED
// undefined es el tipo de dato por defecto se asigna cuando la variable no se definio o declaro
let cliente;
console.warn("..El tipo de dasto es undefined")
console.log(`el cliente es : ${cliente}`);
console.log(`El tipo de dato  de la variable cliente es : ${typeof (cliente)}`);
cliente = "juan";
console.log(`el cliente es : ${cliente}`)
console.log(`el tipo de dato es : ${typeof (cliente)}`)
cliente = 232;
console.log(`el cliente es : ${cliente}`)
console.log(`el tipo de dato es : ${typeof (cliente)}`)

// 2.BOOLEAN
console.warn("..tipo de dato :BOOLEAN (true / false)")
let esPremium = "no lo se ";
console.log(`el cliente es premium? : ${esPremium}`);
esPremium = "true"
console.log(`el tipo de dato de la variable esPremiun es : ${typeof (esPremium)}`)
esPremium = true

console.log(`el cliente es premium? : ${esPremium}`);
console.log(`el tipo de dato de la variable esPremiun es : ${typeof (esPremium)}`)



if (esPremium)
    console.log("el cliente pago por usar el servicio")
else
    console.log(" el cliente quwe recibe los servicios gratis")

//3. Number
var cantidad = 8;
const costo_producto = 10.50
let saldo_cuenta = -2500
let monto_transaccion = 50.00
console.warn("-- Tipo de DatoNUMBER (numeros ,positivo , negativo , decimales , flotantes)")
console.log(`tu saldo el dia de hoy es de : ${saldo_cuenta} ,  (Tipo de dato ${typeof (saldo_cuenta)})`);
console.log(`el producto que has seleccionado cuesta: : ${costo_producto} ,  (Tipo de dato ${typeof (costo_producto)})`);
console.log(` has elegido comprar  : ${cantidad} ,  (Tipo de dato ${typeof (cantidad)})`);
console.log(`el importe total de la compra es  : ${cantidad * costo_producto}`);
saldo_cuenta = saldo_cuenta - (cantidad * costo_producto);
console.log(`tu nuevo saldo es  de ${saldo_cuenta}`)
// el cliente realiza un abono de 1500
monto_transaccion = 1500;
console.log(` tu abono de : ${monto_transaccion} ha sido recibido , tu nuevo saldo es de
    : ${(saldo_cuenta + monto_transaccion)}`)


// STRINGS O CADENAS DE TEXTO
console.warn("--tIPO DE DATO -String (cadena de caracteres)");
const alumno = "  Yazmin Gutierrez Hernandez  ";
console.log(`el nombre del alumno es :  ${alumno}   que es un tipo de dato ${typeof (alumno)}`);
let producto = "monitor 20 pulgadas\"";
console.log(`el nombre del producto es : ${producto}  que es un tipo de dato ${typeof (producto)}`);

//MANIPULACION DE STRING

console.log(`mas adelante podremos transformar el tipo de dato string  usando funciones especificas como 
    convertir a mayusculas: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`o  en su decto a minuscula : ${producto} => ${producto.to}`)

//BigInt 8ENTEROS DE DIMESIONES Amplias -Generalmente utilizados en sistemas matematicso
//fisicos oi especiales donde se requiere 
const numeroGrande =1233444444
const numeroGrande2=11332345454646466
const numeroGrande3=1821823288384848844438
console.log(`el primer experimento de un numero grnade es : ${numeroGrande} , que si es 
    soportando por Number y su tipo de dato es : ${typeof(numeroGrande)}`);







//SYMBOL
const primerSymbol = Symbol(39);
const segundoSymbol = Symbol(39);

// console.log(primerSymbol == segundoSymbol);
// console.log(primerSymbol.valueOf());
// console.log(segundoSymbol.valueOf());


//NULL
// const  descuento =null;
// console.log(typeof descuento);