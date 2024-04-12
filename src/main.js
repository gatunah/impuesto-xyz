import { Cliente } from './cliente.js';
import { Impuesto } from './impuesto.js';

$(document).ready(function () {
    $("#btn").on("click", function () {
        
        let nombreInput = $('#nombre').val();
        let montoBrutoAnualInput = parseFloat($('#montoBrutoAnual').val());
        let deduccionesInput = parseFloat($('#deducciones').val());

        
        if(nombreInput == "" || isNaN(montoBrutoAnualInput) || isNaN(deduccionesInput) ){
            alert("Debe ingresar todos los valores");
        }else{
        const nuevoImpuesto = new Impuesto(montoBrutoAnualInput, deduccionesInput);
        const nuevoCliente = new Cliente(nombreInput, nuevoImpuesto);
        
        const impuestoCalculado = nuevoCliente.calcularImpuesto();

        //PARA QUE BORRE EL VALOR MOSTRADO Y NO SE REPITA LA LINEA
        $('#resultado').empty();
        //SE MUESTRA RESULTADO EN PANTALLA
        $('#resultado').append(`<p>El impuesto calculado para <b>${nombreInput}</b> es: <b>${impuestoCalculado}</b></p>`);
        
        }
    });
});
