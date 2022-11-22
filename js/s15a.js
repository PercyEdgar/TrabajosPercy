/*Ejercico 02 */
const p_bono = document.getElementById("p_bono");
const btn_bono = document.getElementById("btn_bono");

btn_bono.addEventListener('click',bono)

function bono(){
    const nombre = document.getElementById('nombre').value;
    const s_basico = parseFloat(document.getElementById('s_basico').value);
    const hijos = parseFloat(document.getElementById('hijos').value);
    let bono = 0

    if(hijos >=1){
        bono = s_basico* 7/100
        let pago_final = s_basico + bono

        p_bono.innerText = `Trabajador ${nombre} cuenta con un bono de S/.${bono} su pago final es de ${pago_final}`
    }else{
        p_bono.innerText = `Trabajador ${nombre} pago a realizarce es de S/.${s_basico}`
    }

}
/*Ejercicio 02 */
const p_18 = document.getElementById("p_18");
const btn_18 = document.getElementById("btn_18");
btn_18.addEventListener('click',porcent)

function porcent(){
    const numero = parseFloat(document.getElementById('numero').value);
    let porcentaje = numero * 18/100

    if(numero >500){
        p_18.innerText =`${porcentaje}`
    }else{
        p_18.innerText =`Ingrese un número mayor a 500 para obtener el 18%`
    }

}
/*Ejercicio 03 */
const btn_factorial = document.getElementById('btn_factorial');
const p_factorial = document.getElementById('p_factorial');

btn_factorial.addEventListener('click', factorial);


function factorial() {
    const n2 = parseInt(document.getElementById('n2').value);
    let factorial = 1;

    for(i=1; i<=n2; i++){
        factorial = factorial*i;
    }

    p_factorial.innerText =`${factorial}`;
    return false
}