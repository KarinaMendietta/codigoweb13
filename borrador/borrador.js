//Escribe un programa de tres líneas que pida un número, pida otro número
//y escriba el resultado de sumar estos dos números.

/*console.log("hello")
const nombre = 10 ;
console.log(typeof nombre );

let valor = 20;
console.log("valor",typeof valor); 

let dinero = 20;
console.log(dinero.toString);
-
let alumnos = [ "luis","ana"];
let notas = [20,16];
let juegos= ["soga","yases"];

console.log (
  `${alumnos[0]} tiene ${notas[1]} y le gusta jugar ${juegos[0]}`
)
-
const hallarCuadrado = (num1,num2) => {
  return (`${num1**2} y ${num2**2} `)
}
console.log( hallarCuadrado(2,4));
-
const datos = (nombre, apellido, edad ) => {
return `Hola ${nombre} ${apellido} tienes ${edad} años`;
};
-
console.log(datos("pepe","perez",10));

const hallarAreaRectangulo = (base,altura) => {
  return (base*altura);
}
console.log (hallarAreaRectangulo(2,2));
-
const esMayorDeEdad = edad => {
  if (edad>=18) {
  return (`Es mayor de edad`)
}
return `Es menor de edad`
}
console.log(esMayorDeEdad(20))


const multiplicar =(ab,ac); {
  let calcular= (+ab * +ac);
}  

console.log(multiplicar(1,2))
*/

//Escribir un programa que pregunte al usuario su edad y muestre
// por pantalla todos los años que ha cumplido (desde 1 hasta su edad).

//Chart - barras

const contenedorChartBarra = document
  .querySelector("#chart-barra")
  .getContext("2d");

const dataChart = {
  labels: [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ],
  datasets: [
    {
      label: "Numero de usuarios por dia",
      data: [20, 40, 10, 100, 50, 75, 200],
      borderWidth: 3,
      borderColor: "#f01",
      backgroundColor: [
        "rgba(0, 255, 265, 0.7)",
        "#f01",
        "#ba1",
        "#dac",
        "#eda",
        "#a34",
        "#234",
      ],
    },
  ],
};
const configuracion = {
  type: "bar",
  data: dataChart,
};

const chartBarra = new Chart(contenedorChartBarra, configuracion);

const contenedorChartDonut = document
  .querySelector("#chart-donuts")
  .getContext("2d");

const configDonut = {
  type: "doughnut",
  data: dataChart,
};

const chartDonut = new Chart(contenedorChartDonut, configDonut);

const contenedorChartLinea = document
  .querySelector("#chart-lineas")
  .getContext("2d");

dataChart.datasets[0].data = [1, 2, 3, 4, 5, 6, 7];
dataChart.labels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const configLinea = {
  type: "line",
  data: dataChart,
};

const ChartLinea = new Chart(contenedorChartLinea, configLinea);
