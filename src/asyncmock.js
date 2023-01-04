const productos = [
    {
        id: '1',
        image: "../img/1.png",
        name: "Buzo Bitcoin",
        value: 2000,
        details: "Buzo Bitcoin ",
        talle: "XXL, XL, L, M, S",
        features: "Negro",
        stock: 20,
        category: "ropa"
    },
    {
        id: '2',
        image: "../img/2.png",
        name: "Gorra Bitcoin",
        value: 1300,
        details: "Gorra Bitcoin con Visera",
        features: "Negro/Blanco",
        stock: 10,
        category: "ropa"

    },
    {
        id: '3',
        image: "../img/3.png",
        name: "Libro Bitcoin",
        value: 2300,
        details: "El Patron de Libro",
        features: "Tapa Dura",
        stock: 10,
        category: "libros"

    },
    {
        id: '4',
        image: "../img/4.png",
        name: "Llavero Bitcoin",
        value: 1000,
        details: "Llavero Bitcoin con cadena",
        features: "Dorado",
        stock: 10,
        category: "hogar"

    },
    {
        id: '5',
        image: "../img/5.png",
        name: "Llavero Bitcoin",
        value: 800,
        details: "Llavero Bitcoin con cadena",
        features: "Plateado",
        stock: 10,
        category: "hogar"

    },
    {
        id: '6',
        image: "../img/6.png",
        name: "Mate Bitcoin",
        value: 1800,
        details: "Mate Bitcoin con Bombilla",
        features: "Negro/Dorado",
        stock: 15,
        category: "hogar"

    },
    {
        id: '7',
        image: "../img/7.png",
        name: "Olograma Bitcoin",
        value: 3800,
        details: "Olograma Bitcoin con Cargador",
        features: "Azul",
        stock: 20,
        category: "hogar"

    },
    {
        id: '8',
        image: "../img/8.png",
        name: "Reloj Bitcoin",
        value: 2300,
        details: "Reloj Bitcoin con funcionalidades varias y alarma",
        features: "Azul/Negro",
        stock: 10,
        category: "hogar"

    },
    {
        id: '9',
        image: "../img/9.png",
        name: "Remera Rosario",
        value: 3300,
        details: "Remera con Estampado de Rosario",
        talle: "XXL, XL, L, M, S",
        features: "Blanco",
        stock: 20,
        category: "ropa"

    },
    {
        id: '10',
        image: "../img/10.png",
        name: "Remera Cripto",
        value: 3500,
        details: "Remera con Estampado de Criptomonedas",
        talle: "XXL, XL, L, M, S",
        features: "Blanco",
        stock: 30,
        category: "ropa"

    },
    {
        id: '11',
        image: "../img/11.png",
        name: "Remera Bitcoin",
        value: 3600,
        details: "Remera con Estampado de Bitcoin",
        talle: "XXL, XL, L, M, S",
        features: "Negro",
        stock: 30,
        category: "ropa"

    },
    {
        id: '12',
        image: "../img/12.png",
        name: "Taza StarsBucks",
        value: 1800,
        details: "Taza Bitcoin StarsBucks tamaño grande",
        features: "Blanco/Verde",
        stock: 10,
        category: "hogar"

    },
    {
        id: '13',
        image: "../img/13.png",
        name: "Taza Yoda",
        value: 1600,
        details: "Taza Yoda Bitcoins tamaño grande",
        features: "Negro",
        stock: 10,
        category: "hogar"

    },
    {
        id: '14',
        image: "../img/14.png",
        name: "Taza Bitcoins",
        value: 1600,
        details: "Taza Bitcoins tamaño grande",
        features: "Negro",
        stock: 10,
        category: "hogar"

    },
    {
        id: '15',
        image: "../img/15.png",
        name: "Taza Binance",
        value: 1400,
        details: "Taza Binance tamaño grande",
        features: "Blanco/Negro",
        stock: 10,
        category: "hogar"

    }
]

function getItems(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 3000);
    })
}

export default getItems;
