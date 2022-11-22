/*Ejercicio 01*/
const p_porcentaje = document.getElementById("p_porcentaje");
const btn_porcentaje = document.getElementById("btn_porcentaje");

btn_porcentaje.addEventListener('click',porcentaje);

function porcentaje(){
    const varon = parseFloat(document.getElementById('varon').value);
    const mujer = parseFloat(document.getElementById('mujer').value);
    let porcent1 = varon / (varon + mujer)* 100;
    let porcent2 = mujer / (varon + mujer)* 100;


 p_porcentaje.innerText = `Hay ${porcent1}% de Varones y ${porcent2}% de Mujeres`;
}
/*Ejercicio 02*/
const p_presu = document.getElementById("p_presu");
const p_presu1 = document.getElementById("p_presu1");
const p_presu2 = document.getElementById("p_presu2");
const p_presu3 = document.getElementById("p_presu3");
const p_presu4 = document.getElementById("p_presu4");

const btn_presu = document.getElementById("btn_presu");

btn_presu.addEventListener('click',presupuesto);

function presupuesto(){
    const presu = parseFloat(document.getElementById('presu').value)
    let LaMar = presu * 0.35
    let Abancay = presu * 0.25
    let de_Julio  = presu * 0.10
    let Aviación  = presu * 0.15
    let Tacna  = presu * 0.15

    p_presu.innerText = `El presupuesto para Avenida La Mar es del 35% con un monto de S/${LaMar}  Nuevos Soles`
    p_presu1.innerText = `El presupuesto para Avenida Abancay  es del 25% con un monto de S/${Abancay} Nuevos Soles`
    p_presu2.innerText = `El presupuesto para Avenida 28 de Julio es del 10% con un monto de S/${de_Julio} Nuevos Soles`
    p_presu3.innerText = `El presupuesto para Avenida Aviación  es del 15% con un monto de S/${Aviación} Nuevos Soles`
    p_presu4.innerText = `El presupuesto para Avenida Tacna es del 15% con un monto de S/${Tacna} Nuevos Soles`
}
/*Ejercicio 03*/
const p_egeneral = document.getElementById("p_egeneral");
const p_emayores = document.getElementById("p_emayores");
const p_emenores = document.getElementById("p_emenores");

const btn_calcular = document.getElementById("btn_calcular")

btn_calcular.addEventListener('click',calcular)

function calcular(){
    const egeneral = parseFloat(document.getElementById('egeneral').value);
    const emayores = parseFloat(document.getElementById('emayores').value);
    const emenores = parseFloat(document.getElementById('emenores').value);

    let ege = egeneral * 150
    let ema = emenores * 50
    let eme = egeneral * 80

    p_egeneral.innerText = `Recaudado en Entradas Generales S/.${ege} Nuevos Soles`
    p_emayores.innerText = `Recaudado en Entradas para mayores de 65 años S/.${ema} Nuevos Soles`
    p_emenores.innerText = `Recaudado en Entradas para menores de edad S/.${eme} Nuevos Soles`

}
