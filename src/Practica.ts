/*
    Código de TypesCript
 */

//Explicita
let nombre: string;
//si le quiero asignay un valor numérico me va a dar un error
//nombre = 150;

//Inferida
let apellido = 'Velásquez';
let apellido2 = 5;
//si le quiero poner valores numéricos me vaa dar un error
//apellido=5;

//VARIABLES CON VAR
//VAR SI TOMA EL VALOR NUEVO QUE SE LE ASIGNA
//COMO VEMOS DEVOLVIÓ 456
var foo = 123;
if (true) {
  var foo = 456;
}
console.log(foo); // 456

//VARIABLES CON LET
//LET NO TOMA EL VALOR NUEVO QUE SE LE ASIGNA PORQUE SUPONE QUE ESTAMOS HABLANDO DE OTRO AMBITO
//COMO VEMOS DEVOLVIÓ EL MISMO 123
let foo2 = 123;
if (true) {
  let foo2 = 456;
}
console.log(foo2); // 123

//DECLARAR VARIABLES CON CONST
const foo3 = 123;
//COMO VEMOS NO LE PUEDO MODIFICAR LOS VALORES ME DICE QUE ES UNA VARIABLE SOLO DE LECTURA
//foo3 = 456;

const foo4 = { bar:123 };
//COMO VEMOS NO LE PUEDO MODIFICAR LOS VALORES ME DICE QUE ES UNA VARIABLE SOLO DE LECTURA
//foo4 = { bar:456 };

const foo5 = { bar:123 };
//ESTOY DECLARANDO UN OBJETO DEL TIPO BAR
//COMO VEMOS SI ME PERMITE CAMBIAR EL CONTENIDO DEL OBJETO LITERAL
//POR EJEMPLO HAGO USO DE LA PROPIEDAD Y LE CAMBIO EL VALOR
foo5.bar = 456;
console.log(foo5);

//TIPOS DE DATOS PRIMITIVOS
////BOOLEANO
let isDone: boolean;
//EN LA MAYORIA DE LENGUAJES PUEDO ASIGNAR A LAS VARIABLES BOOLEANAS COMO, 1 ES TRUE, 0 ES FALSE
//PERO
//EN TYPESCRIPT NO SUCEDE ESO TENGO QUE ASIGNAR CON LA PALABRA RESERVADA COMPLETA true o false
isDone = true;
isDone = false;
//SI QUIERO ASIGNARLES COMO 1 O 0 NOS DIRÁ QUE NO PUEDE ASIGNAR UN VALOR NUMÉRICO A UNA VARIABLE DE TIPO BOOLEANO
//isDone = 1;
//isDone = 0;

//TIPOS DE DATOS STRING
//LOS VALORES STRING SE PUEDEN ASIGNAR CON COMILLAS O DOBLES NO HAY DIFERENCIA
let color: string = "blue";
color = 'red';

//TIPOS DE DATOS NUMERICOS
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// TIPO TEMPLATE STRING (SE ASIGNAN ENTRE BACKSTICK QUE NO ES NI TILDE NI COMILLA SIMPLE, ES COMO LA TILDE AL REVEZ)
//BACKTICK ES GENERICO PUEDE REEMPLAZAR UNA COMILLA SIMPLE O COMILLA DIBLE
//PERO SE LO USA MAS PARA CONCATENAR VARIABLES
let fullName: string = `Juan Velasquez`;
let age: number = 33;
let sentence: string = `Hola, ${fullName}. Tengo ${age} años.`;
console.log(sentence);
//SALIDA
//Hola, Juan Velasquez. Tengo 33 años

//TIPO ARRAY
//solo pueden contener el tipo de dato que le asigne al array
//Opcion 1
let list1: number[] = [1,2,3];
//Opcion 2
let list2: Array<number> = [5,6,7];

//TIPO ENUM
//sirven para enumerar
//con asignacion de valores
enum Color {red,green,blue};
let c: Color = Color.green; //1
//sin asignacion de valores
//enum Color {red,green,blue}

//TIPO TUPLA
//como en base de datos, hacen referencia a
//registros clave / valor
//diferencia entre tupla y array es que la tupla puede tener 2 tipos de datos diferentes
//diferencia con una tupla es que solo puede tener 2 valores clave y valor
let list: [string,number];
list=['Hola',10];

//TIPO ANY
//ME PERMITE QUITARLE CUALQUIER TIPO DE RESTRICCION PARA PODERLE CUALQUIER VALOR
let notSure: any = 4;
notSure = "valores string";
notSure = false;
notSure = 50;

//UNION DE TIPOS
//NOS SIRVE PARA DEFINIR UNA VARIABLES CON MULTIPLES TIPOS DE DATOS
//SE USA EL SIMBOLO PIPE | ENTRE LOS TIPOS
let minute: number|string;
minute = 30;
minute = '60';

//ALIAS DE TIPOS
//SIRVE PARA CREAR UN ALIAS COMO NUEVO NOMBRE PARA UN TIPO
//EL ALIAS SE PUEDE USAR TAMBIEN PARA UN CONJUNTO O COMBINACION DE TIPOS
//SE USA LA PALABRA RESERVADA TYPE
type IdUser = number|string;
let idUsuario: IdUser;

//TIPOS LITERALES
//PUEDEN CONTENER UNICAMENTE UNA CADENA DEL CONJUNTO
//SE USAN CADENAS COMO TIPOS COMBINADOS CON EL SIMBOLO PIPE | ENTRE LOS TIPOS
type CardinalDirection = "North" | "Easth" | "South" | "West";
let cardinal: CardinalDirection;
cardinal = "North";  //OK
//cardinal = "Este"; //ERROR PORQUE NO ES UN VALOR QUE HAYA DECLARADO EN LA DEFINICIÓN DEL TIPO

//INTERFACES
//son como la definición de propiedades y tipado
//Las propiedades están definidas dentro de las llaves
interface  Lakes {
  name: string,
  area: number,
  lenght: number,
  depth: number,
  isFreshwater: boolean,
  countries: string[]
}
//para Poder usar el typo interfaz declarado, debo poner las propiedades que tiene la misma y ponerle valores
let firstLake: Lakes = {
  name: "América",
  lenght: 1199,
  depth: 1025,
  area: 371000,
  isFreshwater: false,
  countries: ['Ecuador','Peru','Colombia','Chile']
}
//si quisiera modificar los valores de esta variable con tipado interfaz a cada propiedad
firstLake.name="Asia";

//PROPIEDADES OPCIONALES
//En ciertas ocasiones es necesario tener propiedades opcionales en mi interfase
//Por ejemplo frozen para esto asigno un sigo de pregunta
//Esto significa que puedo o no hacer uso de esa propiedad
interface  Lakes2 {
  name: string,
  area: number,
  lenght: number,
  depth: number,
  isFreshwater: boolean,
  countries: string[],
  frozen?: string[]
}
//COMO PODEMOS VER PUEDO USAR MI INTERFACE CON TODAS SUS PROPIEDADES SIN USAR LA OPCIONAL FROZEN
let firstLake2: Lakes2 = {
  name: "América",
  lenght: 1199,
  depth: 1025,
  area: 371000,
  isFreshwater: false,
  countries: ['Ecuador','Peru','Colombia','Chile']
}
//COMO PODEMOS VER PUEDO USAR MI INTERFACE CON TODAS SUS PROPIEDADES USANDO FROZEN
let firstLake3: Lakes2 = {
  name: "América",
  lenght: 1199,
  depth: 1025,
  area: 371000,
  isFreshwater: false,
  countries: ['Ecuador','Peru','Colombia','Chile'],
  frozen: ['Canada','Usa','Groenlandia']
}

//INTERFACES DE SOLO LECTURA
//se las puede marcar como readonly cuando se necesita que una clase sea modificada solo al momento de crearla
//es similar al uso de const con la diferencia que const se supone que es usado para variables
//mientras que readonly se lo usa para propiedades
interface Enemy {
  readonly size: number,
  health: number,
  range: number,
  readonly damage: number
}
//VAMOS A DECLARAR EL OBJETO TANK DEL TUPO ENEMY Y DEFINIR SUS PROPIEDADES
let tank: Enemy = {
  size: 50,
  health: 100,
  range: 60,
  damage: 12
}
//OK PUEDO MDIFICAR VALORES DE PROPIEDADES QUE NO SON READONLY
tank.health = 95;
//ERROR PORQUE NO PUEDO REASIGNAR VALORES A UNA PROPIEDAD READONLY
//tank.damage = 10;


//EXTENDER UNA INTERFAZ
//Similar a la herencia en programación orientada a objetos
//Declaramos la interfaz padre
interface Entity{
  id: number,
  title: string
}
//Declaramos las interfaces que van a extender las propiedades de la interfaz madre y van a aumentar sus propias propiedades
interface Album extends Entity {
  description: string
}
//Declaramos las interfaces que van a extender las propiedades de la interfaz madre y van a aumentar sus propias propiedades
interface Pictire extends Entity {
  orientation: 'landscape' | 'portrait' | 'panorama'
}
//vamos a crear objetos de este tipo y poblar sus propiedades
const album: Album = {
  id: 1,
  title: 'Primavera',
  description: 'Primavera Roja'
}
//vamos a crear objetos de este tipo y poblar sus propiedades
const picture: Pictire = {
  id: 1,
  title: 'Primavera',
  orientation: "landscape",
}

//FUNCIONES
//haremos una función de suma dos números
//se definen los parameters y el tipo de datos que tendrían esas variables
//retornamos una suma
function sumarNumeros(a: number, b: number){
  return a + b;
}
//FUNCIONES TIPADAS
//indico a la función cual es el tipo de datos que esta retornará
//si cambio el return a un tipo de datos diferente al declarado me dará error
function sumarNumeros1(a: number, b: number): number {
  return a + b;
}
//PARAMETROS OPCIONALES
//son parametros que puedo pasar o no en una función
//se debe considerar que los parametros opcionaes siempre deben ir declarados al final de la función
type SquareSize = '100x100' | '500x500' | '1000x1000'
function createPicture(title: string, date: string, size?: SquareSize){
  console.log('Create Picture Uising', title, date, size)
}
//para poder pobar y obtener una respuesta de una función lo hago de la siguiente manera
//pongo todos los parámetros de la variable
createPicture('My birthday','1989-05-20','500x500')
//pongo solo los parametros obligatorios
createPicture('My Son','2015-03-31')
//FLAT ARRAY FUNCTION
//es otra forma de declarar funciones, no usaremos la palabra reservada function si no que vamos a usar const o let
//para declarar una funcion con const o let despues del parentesis debo poner el igual y mayor que
type  SquareSize2 = '100x100' | '500x500' | '1000x1000'
const createPic = (title: string, date: string, size: SquareSize2) => {
  return `Title es: ${title}, Date es: ${date}, Size es: ${size}`
}
const picture1 = createPic('My son','2015-03-31','500x500')
console.log('picture',picture1)

//CLASES
//vamos a crear una crear person con 2 propiedades
//vamos a exponerla a travez de un constructor
//vamos a agregarle un metodo consumible llamado sayhello
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  sayHello(): void {
    console.log(`Hi, ${this.name}`)
  }
}
//vamos a usar la clase para ello instanciamos la clase como cons o como let y le pasamos los parametros necesarios
const person3 = new Person('Juan Velasquez',33)
//despues de esto ya podremos usar sus metodos
person3.sayHello();
//CONSTRUNCTOR SIMPLE
//esta es otra forma de crear una clase sin necesidad de definir previamente las propiedades
//podemos definir las propiedades de la clase del constructor usando la sintaxis public
//vamos a crear a nuestro constructor como publico
class Person1 {
  constructor(public name: string,
              public age: number) {
  }
  sayHello1(): void {
    console.log(`Hi, I'm ${this.name} and my age in ${this.age}.`)
  }
}
//vamos a usar la clase para ello instanciamos la clase como cons o como let y le pasamos los parametros necesarios
const person4 = new Person('Juan Velasquez',33)
//despues de esto ya podremos usar sus metodos
person4.sayHello();


//HERENCIA EN CLASES
//declaramos la clase padre con su constructor y 1 metodo
class Person4 {
  constructor(public name:string) {
  }
  sayHello1(): void {
    console.log(`Hi, I'm ${this.name}.`)
  }
}
//declaramos la clase hija que hereda de Person,
//tiene su propia propiedad su propio constructor
//pero en el constructor para poder usar la propiedad del padre usaremos super
class Friend2 extends Person4 {
  yearsKnow: number;
  constructor(name: string, yearsKnow: number){
    super(name);
    this.yearsKnow = yearsKnow;
  }
  timeKnow() {
    console.log("We have friends for " + this.yearsKnow + "years.")
  }
}
//instanciamos la clase hijo y podemos hacer uso de las propiedades tambien del padre
let friendA = new Friend2("Marcelo",32);
//IMPRIMIR USANDO EL METODO DEL PADRE
friendA.sayHello1();
//IMPRIMIR USANDO EL METODO DEL HIJO
friendA.timeKnow();

//DECORADORES
//nos permiten añadir anotaciones y metadatos o cambiar el comportamiento de clases, propiedades, metodos, parametrs y accesors
//el decorador es una función, se usa con una expresión con el mismo nombre del objeto que va a decorar
//esta función lleva un parametro del tipo string
//retorna una función con un tipado distinto
//la clase extiende del constructor
function  changeName(data: string){
  return function <T extends  {new(...args: any[]): {}}>(constructor: T){
    return class extends constructor {
      name = data;
    }
  }
}
//en este caso el decorador llevará el mismo de la función que va a modificar
//para este caso el decorador lo que va a hacer es cambiar el parametro que le mandamos aunque reciba uno distinto
@changeName('Juan Velasquez')
class Person5 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(){
    console.log(`Hola, ${this.name}.`)
  }
}
//al declarar la clase le paso un parametro de Carlos, sin embargo el decorador le pone Juan Velasquez
const persona = new Person5('Carlos');
persona.sayHi(); //Hola Juan Velásquez

//DESESTRUCTURACION
//Permite extraer valores almacenados en arreglos u objetos
//DESESTRUCTURACION DE OBJETOS
//cre mi interfaz con todas sus propiedades tipadas
interface Album {
  id: number;
  title: string;
  description: string;
}
//creo un objeto del tipo de la interfaz y como no tengo opciones ? debo poblar todas sus propiedades
let album3: Album = {
  id: 1,
  title: 'Navidad',
  description: 'Navidad del 2021'
};
//Desestructuro el objeto album3
//voy a crear un objeto usando únicamente las propiedades id y title de mi objeto album encapsulando sus propiedades
//dentro de las llaves pongo las propiedades que quiero extraer
//para destructurar se lee de derecha a izquierda
//es decir de la variable album extraeme id y title
const {id, title} = album3;
//ya puedo hacer uso de las propiedades desestrcuturadas
console.log(
  `Id => ${id},
  Title => ${title}`
)  // "Id => 1, Title => Navidad"

//DESESTRUCTURACION DE ARREGLOS
//creo un array numerico
let array : number[] = [1,2,3];
//imprimo una de las posiciones
console.log(array[0]); //1
//sin embargo para no leer de posicion en posicion, voy a encapsularlas desestructurando
//los valores del array los voy a poner en 3 variables x y z
//leo de derecha a izquierda diría del array almacename los valores en las variables x y z
let [x1, y1, z1] = array;
//imprimo el valor desestructurado
console.log(x1); //1

//DESESTRUCTURACIUON DE ARREGLOS CON ESTRUCTURACIÓN
//declare un array numerico
let array2: number[] = [1,2,3,4];
//almaceno los valores en las variables y uso la constante rest para encapsular estrcuturar todos los demas objetos que tenga ese array
//la sintaxis para almacenar todos los obejtos restantes es ...rest
let [x2,y2, ...rest] = array2;
//impirmo los valores destructurados
console.log(x2,y2,rest); //1,2,[3,4]

//SPREAD OPERATOR
//se usa para difundir los elementos de un arreglo u objeto
//APPLY
//Un caso común sería extender un arreglo en los argumentos de una función
//function.prototype.apply
//declaro una funcion que recibe 3 parmetros
function arreglo(x, y, z) { }
//por alguna razon los parametros que necesito mandarle a mi función están en un arreglo
let args6: [x:number,y:number,z:number] = [0, 1, 2];
//al hacer uso de la funcion apply lo que estoy haciendo es pasarlo el arreglo como paraemtros
arreglo.apply(null,args6);
//Sprear Operator se representa por los 3 puntos y funciona igual que la funcion apply
//declaro mi funcion con 3 parametrps
function arreglo1(x, y, z) { }
//por alguna razon tengo mis paraemtros en un array
let args7: [x:number,y:number,z:number] = [0, 1, 2];
//pero para pasarle el array como parametros de la función utilizo spread ...
arreglo1(...args7);
//Desestructuracion
//facilita la captura de los elementos restantes de una matriz al desestructurar
//lo que hago es un spread de los elementos que faltan y los pongo en un arreglo de objetos faltantes
let [x,y,...restantes] = [1,2,3,4];
console.log(x,y,restantes); //1,2,[3,4]

//SPREAD DE ARREGLOS
//Permite colocar fácilmente una versión expandida de una matriz en otra matriz
var list3 = [1,2];
list3 = [...list3,3,4];
console.log(list3); // [1,2,3,4]
//Se puede poner la matriz extendida en cualquier posición y se obtiene el valor esperado
var list4 = [1,2];
list4 = [0,...list3,4];
console.log(list3); // [0,1,2,4]

//PROPAGACIÓN DE OBJETOS CON SPREAD
//Permite extender un objeto en otro objeto
//Un caso es agreag propiedades a un objeto sin mutar el original
const point2D = {x:1,y:2};
//vamos a crear un nuevo objeto usando todas las propiedades de 2d pero aumentando un tercero
const point3D = {...point2D,z:3};
//{x:1, y:2, z:3}
//Otro caso de uso es una extensión superficial simple
const funcion1 = {a:1,b:2,c:0};
const bar = {c:1,d:2};
//Unicón de la funcion1 y bar
const funcion1bar = {...funcion1,...bar};
//funcion1bar is ahora {a:1,b:2,c:0,c:1,d:2}
