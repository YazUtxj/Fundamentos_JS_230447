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
const numeroGrande = 1233444444
const numeroGrande2 = 11332345454646466
const numeroGrande3 = 1821823288384848844438
console.log(`el primer experimento de un numero grnade es : ${numeroGrande} , que si es 
    soportando por Number y su tipo de dato es : ${typeof (numeroGrande)}`);
//para definir el tipo de dato de BigInt  debemos invocar la funcionBigInt o usar la letra 'n'  al final del numero en la asignacion de valor
console.log(`declaracion  de valores numericos gran tamaño... `)
//numeroGrande3 = BigInt(7875467672356345674655464122);
numeroGrande4 = 8353484534585778575775n;
console.log(`el primer experimento de un numerto grande ${numeroGrande2} que si es sopportado por NUMBER y su tipo de dato es:
     ${typeof (numeroGrande2)}`);
console.log(`el segundo expermiento  de un numero grande es : ${numeroGrande3} y su tipo de dato es :${typeof (numeroGrande3)} `)

//hay que considerar que los tipos de datos declarados como BigInt no son operables con los de tipo number

let numero = 238;
//si intentas  realizar una operacion matematica entre estos dos tipos de datos  ,obtendremos un error critico en la operacion

console.log(`el resultado de la operacion de :NumeroGrande4/numero es : ${numeroGrande4 / BigInt(numero)}`);

// 6.SYMBOL
console.warn(`--tIPO DE DATO -Symbol (Simbolo a forzar la )`)
const numero1 = 2;
const numero2 = 2.0;
const numero3 = "2";
const numero4 = "2.0";
const numero5 = Symbol(2);
const numero6 = Symbol(2.0);
const numero7 = Symbol("2");
const numero8 = Symbol("2.0");
const numero9 = Symbol(2);
//Prueba de operacion 1 ()
console.log(`Prueba de compracion 1 `)
if (numero1 == numero2) {
    console.log(`SE HA COMPARADO LOS VALORES numero1 Y numero2 ,CONFIRMANDO QUE TIENEN EL MISMO VALOR:`)
} else {
    console.log(`se han comparado los valores de numero1 y numero2 , detectando que NO tienen el mismo valor`)
}
//Prueba de operacion 2 ()
console.log(`Prueba de compracion 2 `)
if (numero1 == numero2) {
    console.log(`SE HA COMPARADO LOS VALORES numero1 Y numero2 ,CONFIRMANDO QUE TIENEN EL MISMO VALOR:`)
} else {
    console.log(`se han comparado los valores de numero1 y numero2 , detectando que NO tienen el mismo valor`)
}
//Prueba de operacion 3
console.log(`Prueba de compracion 3 ¿es 2  estrictamente  `)
if (numero1 === numero2) {
    console.log(`SE HA COMPARADO LOS VALORES numero1 Y numero2 ,CONFIRMANDO QUE TIENEN EL MISMO VALOR:`)
} else {
    console.log(`se han comparado los valores de numero1 y numero2 , detectando que NO tienen el mismo valor`)
}
//Prueba de operacion 4
console.log(`Prueba de compracion 4 ¿es 2  estrictamente = \"2.0"\"2"  `);
if (numero1 === numero4) {
    console.log(`SE HA COMPARADO LOS VALORES numero1 Y numero2 ,CONFIRMANDO QUE TIENEN EL MISMO VALOR:`)
} else {
    console.log(`se han comparado los valores de numero1 y numero2 , detectando que NO tienen el mismo valor`)
}

//Prueba de operacion 5
console.log(`Prueba de compracion 5 ¿es 2  estrictamente = \"2.0"\"2" `);
if (numero1 === numero4) {
    console.log(`SE HA COMPARADO LOS VALORES numero1 Y numero2 ,CONFIRMANDO QUE TIENEN EL MISMO VALOR:`)
} else {
    console.log(`se han comparado los valores de numero1 y numero4 , detectando que NO tienen el mismo valor`)
}
//Prueba de operacion 6
console.log(`Prueba de compracion 6 ¿es 2  estrictamente = \"2.0"\"2"  `);
if (numero2 == numero4) {
    console.log(`SE HA COMPARADO LOS VALORES numero1 Y numero2 ,CONFIRMANDO QUE TIENEN EL MISMO VALOR:`)
} else {
    console.log(`se han comparado los valores de numero1 y numero4 , detectando que NO tienen el mismo valor`)
}
//Prueba de operacion 7
console.log(`Prueba de compracion 7 ¿es 2  estrictamente = \"2.0"\"2"  `);
if (numero1 == numero5) {
    console.log(`SE HA COMPARADO LOS VALORES numero1 Y numero5 ,CONFIRMANDO QUE TIENEN EL MISMO VALOR:`)
} else {
    console.log(`se han comparado los valores de numero1 y numero4 , detectando que NO tienen el mismo valor`)
}
//Prueba de operacion 8
console.log(`Prueba de compracion 8 ¿es 2  Symbol(2) = Symbol("2")  `);
if (numero1 == numero9) {
    console.log(`SE HA COMPARADO LOS VALORES numero1 Y numero5 ,CONFIRMANDO QUE TIENEN EL MISMO VALOR:`)
} else {
    console.log(`se han comparado los valores de numero1 y numero4 , detectando que NO tienen el mismo valor`)
}
// un solo = es asignacion
// doble  == es igualdad de valo
// triple === es una igualdad estrica  

//NULL
console.warn(`---tipo de Dato -NULL (Nulop o vacio)`);
//el tipo de dato nulo se asigna cuando el sistema o el 
let nombreUsuario = null;
let passUsuario = null;
let generoUsuario = null;
let estatusRelacionSentimental = null;
let fecha_UltimoPost = undefined;
//supongamos que estamos programando una red social , en la parte de la 
//informacion se publicara el perfil del usuario

//si el usuario no ha iniciado sesion en el dispositivo movil o en la aplicacion web , puede explorar
// contenido de acceso publico y no   informacion para mosntrar 

//en la NU(Historia de Usuario) , que el usuario 

//Supongamos que el usuario YazminG , con correo electronico yazmingutierrez411@gmail.com
//con datos ingresa con su contraseña pass123

nombreUsuario = "Yazmin Gutierrez";
passUsuario = "pass123";

//en este momento de ejecucion de sistema no sabe su genero , ni el estado de relacion sentimental

console.log(`El usuari : ${nombreUsuario} esta intentando logearse con su contraseña : ${passUsuario}`);

//lo que prosigue es que el sistema cotejara
//dado que Yzmin es del genero femenino  , y denota que su estatus de relacion no ha sido captuadop o lo mantiene privado esto genera la actualizacion de los variables
generoUsuario = "F";
estatusRelacionSentimental = null;
console.log(`El usuari : ${nombreUsuario} se ha logueado exitosamente  , al tener  acceso a su informacion de perfil 
    podemos deducir que es del genero ${generoUsuario} y que su estatus de relacion es : ${estatusRelacionSentimental} y su  ultima 
    publicacion la realizo el: ${fecha_UltimoPost}`);


// Comando para seguir escribiendo en otra linea ALT + Z