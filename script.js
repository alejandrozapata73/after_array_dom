console.log('array')

let numeros = [10,22,33,44,15,7,15,33,33]

//foreach
numeros.forEach((num)=>{
    console.log(num + 2)
})

//find 

let numeroEncontrado = numeros.find((num)=>{
    return num == 45
})

let numeroEncontrado2 = numeros.find ((num)=>num == 44)

console.log(numeroEncontrado)
console.log(numeroEncontrado2)

//filter

let arrayEcontrados = numeros.filter((num)=>{ return num == 33})

console.log(arrayEcontrados)

//some

console.log(numeros.some((num)=>num==78))

//MAP

//map con array..

const arrayNumeros = numeros.map((num)=>num + 15)

console.log("Usando map con array"+arrayNumeros)


//map con objetos
const personaje = [{
    nombre: "sandia",
    precio: 300
},{
nombre: "papa",
    precio: 300
},
{
    nombre: "tomate",
        precio: 300
    }
]

const nuevaSandia = personaje.map((el)=>el.nombre + "actual")

const productosActualizados = personaje.map((el)=>{
    return {
        nombre: el.nombre,
        precio: el.precio + 15
    }
})

console.log(personaje)
console.log(nuevaSandia)
console.log(productosActualizados)

//reduce


const sumaTotal = personaje.reduce((acumulador,el)=>acumulador+el.precio,0)

console.log("total: " + sumaTotal)

//uso de sort
//imprimo array original
console.log(numeros)

//metodo sort de menor a mayor
numeros.sort((a,b)=>(a-b))

console.log(numeros)

