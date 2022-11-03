
const precio_ticket = 200

let desc_estudiante = 0.80
let desc_trainee = 0.50
let desc_junior= 0.15

let botonResumen = document.getElementById('#btn-resumen')

let botonBorrar = document.getElementById('#btn-borrar')


function totalPago(totalConDescuento,totalSinDescuento,descuento) {
    totalConDescuento = totalSinDescuento - (descuento * totalSinDescuento)
    return totalConDescuento

}

function total(){

    let cantTickets = document.querySelector("#inputCantidad").value
    let descuento = document.querySelector('#input-categoria').value
    let totalAPagar = document.querySelector('#total-a-pagar')
    let cantSinDescuento = cantTickets * precio_ticket;
    let totalConDescuento = 0;


    switch (descuento){

        case "estudiante" : 

            totalConDescuento= totalPago(totalConDescuento, cantSinDescuento, desc_estudiante)
            break;
        
        case "trainee": 

            totalConDescuento= totalPago(totalConDescuento, cantSinDescuento, desc_trainee)
            break;

        case "junior":
            
            totalConDescuento= totalPago(totalConDescuento, cantSinDescuento, desc_junior)
            break;
            
    }

    totalAPagar.innerHTML= "Total a pagar: $" + totalConDescuento
}

    botonResumen.addEventListener("click", total())

    function borrar() {
        let total = document.querySelector("#total-a-pagar")
        total.innerHTML = "Total a pagar: $"
        document.getElementById("inputCantidad").value = ""
        
        
    }

    

    botonBorrar.addEventListener("click", borrar())



































































































































































//Creo funcion para calcular el total a pagar

/*function total_pago(total_con_descuento,total_sin_descuento,descuento) {
    total_con_descuento = total_sin_descuento - (descuento * total_sin_descuento)
    return total_con_descuento
}

function total() {
    //Creo variables con los campos del html
    let cant_tickets = document.querySelector("#cantidad").value;

    let descuento = document.querySelector("#categoria_descuento").value

    let total_a_pagar = document.querySelector("#total_a_pagar")

    let total_sin_descuento = (cant_tickets) * precio_ticket;

    let total_con_descuento = 0;
    //Aplico descuento segun categoria

    switch (descuento) {
        case "1":
            total_con_descuento = total_pago(total_con_descuento,total_sin_descuento,descuento_estudiante)               
            break;
        case "2":
            total_con_descuento = total_pago(total_con_descuento,total_sin_descuento,descuento_trainee)               
            break;
        case "3":
            total_con_descuento = total_pago(total_con_descuento,total_sin_descuento,descuento_junior)
            break;
    }
    total_a_pagar.innerHTML = "Total a pagar: $" + total_con_descuento

}

//Hago un reset del campo total a pagar
function borrar() {
    let total = document.querySelector("#total_a_pagar")
    total.innerHTML = "Total a pagar: $"
}
boton_resumen.addEventListener("click", total())
boton_borrar.addEventListener("click" , borrar())


}
*/
