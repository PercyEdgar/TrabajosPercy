
const p_resta = document.getElementById("p_resta")
const btn_resta = document.getElementById("btn_resta")

btn_resta.addEventListener('click',resta);

function resta (){
    
    const pnum1 = parseFloat(document.getElementById('pnum').value);
    const snum2 = parseFloat(document.getElementById('snum').value);

    let result = pnum1 - snum2
    let suma = pnum1 + snum2

    p_resta.innerText = ` La resta es:${result}`

}

const p_tempe = document.getElementById("p_tempe")
const btn_tempe = document.getElementById("btn_tempe")

btn_tempe.addEventListener('click',tempe);

function tempe (){
    
    const f = parseFloat(document.getElementById('Farenheit').value);


    let celsius = (f -32) * (5/9)

    p_tempe.innerText = ` La resta es:${celsius}`

}
const p_suma = document.getElementById("p_suma")
const btn_suma = document.getElementById("btn_suma")
btn_suma.addEventListener('click',suma);

function suma(){
    const pnum1 = parseFloat(document.getElementById('pnum').value);
    const snum2 = parseFloat(document.getElementById('snum').value);
    let suma = pnum1 + snum2;

    p_suma.innerText = `La suma es es:${suma}`;

}

