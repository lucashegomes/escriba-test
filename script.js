$(document).on("ready", function() {

    $("#resultado").hide();

    $('input').on('change', function () {
        var input = $(this);
        if (input.val().length) {
            input.addClass('populated');
        } else {
            input.removeClass('populated');
        }
    });

    setTimeout(function () {
        $('#numero').trigger('focus');
    }, 500);
    
    $("#calcular").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
    
        let numero = $("#form-calcula").find("#numero").val();
        let resultado = $("#form-calcula").find("#resultado");
    
        resultado.val("");
        resultado.val(somaNumerosMenorQue(numero));
        resultado.show();
    });
});


function somaNumerosMenorQue(numero) {
    if (numero < 0) {
        return "Informe numeros inteiros positivos."
    }

    let soma = 0;
    for (let i = 0; i < numero; i++) {
        if (i % 3 == 0) {
            soma += i;
        } else if (i % 5 == 0) {
            soma += i;
        }
    }

    return soma;
}