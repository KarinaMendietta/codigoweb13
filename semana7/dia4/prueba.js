//const dateFormat = require("date-format");//
import format from "date-format";

const fechaActual = new Date();
const fechaFormateada = format.asString();
console.log(fechaFormateada);
