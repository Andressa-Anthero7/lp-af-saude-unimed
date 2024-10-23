$( document ).ready(function() {
    // Quando o modal for fechado
    $(document).on('click','.close', function () {
        // Scroll até o formulário
        $('html, body').animate({
            scrollTop: $("#text-copy-lp").offset().top
        }, 500); // Tempo em milissegundos para o scroll (0.5 segundo)
    });

    $(document).on('keyup','#nome, #whatsapp', function(){
        nome_digitado = $("#nome").val();
        whatsapp_digitado = $("#whatsapp").val();
        if(nome_digitado.length >= 3 && whatsapp_digitado.length >= 10){
            $("#aceito-termos").removeAttr('disabled');
        }
    })

    $(document).on('click','#aceito-termos',function(){
       $("#btn-enviar").removeAttr('disabled');
    })

    
});