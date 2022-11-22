const p_monto = document.getElementById("p_monto");
const btn_monto = document.getElementById("btn_monto");

btn_monto.addEventListener('click',montop)

function montop(){
    const monto = parseFloat(document.getElementById('monto').value);
    if (monto >=150){
        let descuento = monto * 0.12
        let p_final = monto - descuento

        p_monto.innerText = `Compra con descuento¡¡ ,ahora solo pague  S/.${p_final} Muchas gracias por su compra`
    }else{

        p_monto.innerText = `Compra sin descuento,Sírvase a pagar S/.${monto}.Para acceder al 12% de descuento realice compras mayores a S/.150.00`
    }


}
/* Ejercicio 2 */
const btn_promedio = document.getElementById('btn_promedio');
const p_promedio = document.getElementById('p_promedio');

btn_promedio.addEventListener('click', promedio);

function promedio(){

    const n_practicas = parseFloat(document.getElementById('n_practicas').value);
    let promedio_final = (n_parcial*0.25)+(n_final*0.5)+(n_practicas*0.25);

    if(promedio_final>=11){

        p_promedio.innerText = `El alumno ${nombre} tiene un promedio final de ${promedio_final} ha aprobado`
    } else {
        p_promedio.innerText = `El alumno ${nombre} tiene un promedio final de ${promedio_final} ha Desaprobado`
    }
}
