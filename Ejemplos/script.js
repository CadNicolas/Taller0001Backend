console.log("Hola mundo");
//ambito variables

let kilometros = 100;
console.log(kilometros);

if(1==1){
    let kilometros = 300;
    console.log(kilometros);
}

console.log(kilometros);


//clases
class Animal{
constructor(patas, tamanio){
    this.patas = patas;
    this.tamanio = tamanio;
}
}

class Gato extends Animal{
    constructor(patas, tamanio, pelaje){
        super(patas, tamanio);
        this.pelaje = pelaje;
        
    }   
}

const perro=new Animal(4, "Mediano");
console.log(perro);

const felix =new Gato(4, "Pequeño", "Liso");
console.log(felix);

//Funciones

function mensaje(nombre) {
    console.log("Hola el nombre es "+nombre);
}

mensaje("Anita");

//Funciones de flecha / funcition arrow

const mensaje = () => {

    console.log("Hola el nombre es "+ nombre);
    const saludo = "Hola el nombre es "+ nombre;
    return saludo;
}

const resultado = mensaje("Juanita");
console.log(resultado);

console.log(suma(5,4));

//Template string

//´´´

//Desestructuracion de objetos
const web = {
    nombre: "Udenar",
    links: {
      sitio: "www.udenar.edu.co"
    },
    resesSociales: {
      youtube: {
        enlace: "www.youtube.com/udenar",
        nombre: "Youtube Udenar"
      },
      facebook:{
        enlace: "www.facebook.com/udenar",
        nombre: "Facebook Udenar"
      },
      instagram:{
        enlace: "www.instagram.com/udenar",
        nombre: "Instagram Udenar"
      }
    }
  }

  console.log(web);

  const redes = web.resesSociales;

  console.log(redes);

  
