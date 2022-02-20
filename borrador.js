//Escribe un programa de tres líneas que pida un número, pida otro número 
//y escriba el resultado de sumar estos dos números.

/*console.log("hello")






const multiplicar =(ab,ac); {
  let calcular= (+ab * +ac);
}  

console.log(multiplicar(1,2))
*/

function sumar (a,b) {
    const calculoSumar = a+b ; 
    return isNaN(calculoSumar)?("Error: no se puede sumar"):calculoSumar
}
console.log(sumar(7,5))