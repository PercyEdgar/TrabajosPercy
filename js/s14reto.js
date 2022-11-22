/*Crea cuatro variables que contengan números. Asignar un nombre a cada una*/


const p_suma2 =document.getElementById("p_suma2");
const btn_versuma =document.getElementById("btn_versuma");

const p_resta =document.getElementById("p_resta");
const btn_resta =document.getElementById("btn_resta");

const p_final =document.getElementById("p_final");
const btn_final =document.getElementById("btn_final");


btn_versuma.addEventListener('click',suma);
function suma(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let suma2 = num1 + num2
    p_suma2.innerText = `La suma de las dos primeras variables es: ${suma2}`
}

btn_resta.addEventListener('click',restando)
function restando(){
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
    let resta = num3 - num4
    p_resta.innerText = `Resta la cuarta variable de la tercera es ${resta}`

}

btn_final.addEventListener('click',final)
function final(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);

    let resultadoFinal = (num1 + num2)*(num3 - num4)

    p_final.innerText = `El resultado final es: ${resultadoFinal}`
}

