/*Ejercicio 01 */
const btn_resul =document.getElementById("btn_resul")
const veresul =document.getElementById("veresul")

btn_resul.addEventListener('click', sumamul);

function sumamul(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let suma = num1+num2;
    let producto = num1*num2;

    veresul.innerText =`Muy bien¡¡ la suma es ${suma} y la multiplicación es ${producto}`;
}
/*Ejercicio 02*/
const p_poncent =document.getElementById("p_poncent");
const btn_porcent =document.getElementById("btn_porcent");

btn_porcent.addEventListener('click',porcent);

function porcent (){
    const num3 = parseFloat(document.getElementById('num3').value);
    let porcent = num3 * 0.20;

    p_poncent.innerText =`El 20% de ${num3} es ${porcent}`;
}
/*Ejercicio 03 */
const p_medi =document.getElementById("p_medi");
const btn_medi =document.getElementById("btn_medi");

btn_medi.addEventListener('click',medi);

function medi (){
    const num4 = parseFloat(document.getElementById('num4').value);
    let cm = num4 * 100;
    let mm = num4 * 1000;

    p_medi.innerText = `${num4} metro es ${cm} centimetros, tambíen ${num4} metro es ${mm} milímetros ` 
}
/*Ejercicio 04*/
const p_trian =document.getElementById("p_trian");
const btn_trian =document.getElementById("btn_trian");

btn_trian.addEventListener('click',trian);

function trian (){
    const num5 = parseFloat(document.getElementById('num5').value);
    const num6 = parseFloat(document.getElementById('num6').value);
    let area = (num5*num6)/2

    p_trian.innerText = `El área del tríangulo es ${area}`
}



