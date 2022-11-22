/*Ejercicio 01 */
const p_prome =document.getElementById("p_prome");
const btn_prome =document.getElementById("btn_prome");

btn_prome.addEventListener('click',prome);

function prome(){
    const nota1 = parseFloat(document.getElementById('1_nota').value);
    const nota2 = parseFloat(document.getElementById('2_nota').value);
    const nota3 = parseFloat(document.getElementById('3_nota').value);
    
    let promedio = (nota1 + nota2 + nota3)/3;

    p_prome.innerText = `El promedio de las notas es ${promedio}`;
}
/*Ejercicio 02*/
const p_aumento =document.getElementById("p_aumento");
const btn_aumento =document.getElementById("btn_aumento");

btn_aumento.addEventListener('click',aumento);

function aumento(){
    const s1 = parseFloat(document.getElementById('s1').value);
    const s2 = parseFloat(document.getElementById('s2').value);
    const s3 = parseFloat(document.getElementById('s3').value);

    let aumento1 = s1 +(s1 * 0.1)
    let aumento2 = s2 +(s2 * 0.12)
    let aumento3 = s3 +(s3 * 0.15)
    
    p_aumento.innerText = `El aumento  respectivamente es:S/.${aumento1},S/.${aumento2},S/.${aumento3} para los trabajadores`

}
/*Ejercicio 03*/
const p_examen =document.getElementById("p_examen");
const btn_examen =document.getElementById("btn_examen");

btn_examen.addEventListener('click',examen);

function examen(){
    const e1 = parseFloat(document.getElementById('e1').value);
    const e2 = parseFloat(document.getElementById('e2').value);
    const e3 = parseFloat(document.getElementById('e3').value);

    let n1 = (e1*0.3)+(e2*0.3)+(e3*0.4);

    p_examen.innerText= `La  calificación final es:`;
}