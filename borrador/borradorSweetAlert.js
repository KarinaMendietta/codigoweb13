/*const arraysdeobjetos = [
    {
      celular: {
        marca: "Apple",
        color: "Gris",
      },
    },
    {
      laptop: {
        marca: "Lenovo",
        color: "azul",
      },
    },
    {
      televisor: {
        marca: "LG",
        color: "Gris",
      },
    },
  ];
for (let i=0; i<arraysdeobjetos.length;i++);
console.log(arraysdeobjetos[0].celular);

  console.log(arraysdeobjetos[0].celular);
*/

const arrayOptions = [
  {
    apples: "Apples",
    bananas: "Bananas",
    grapes: "Grapes",
    oranges: "Oranges",
  },
  {
    apples: "Potato",
    broccoli: "Broccoli",
    carrot: "Carrot",
  },
 
];

console.log(arrayOptions[0].apples);

const arraysdeobjetos = [
  {
    nombre:"celular",
      marca: "Apple",
      color: "Gris",
    
  },
  {
    nombre:"laptop",
      marca: "Lenovo",
      color: "azul",
    
  },
  {
    nombre:"televisor",
      marca: "LG",
      color: "Gris",
    
  },
];

/*for (let i=0; i<arraysdeobjetos.length;i++);
console.log(arraysdeobjetos[0].nombre);*/


arraysdeobjetos.map((arraysdeobjeto) => {
    console.log(arraysdeobjeto.marca);
});

//meter marcas en el array vacio
arrayMarcas =[]

arraysdeobjetos.map((arraysdeobjeto) => {
    return(arraysdeobjeto.marca);
});