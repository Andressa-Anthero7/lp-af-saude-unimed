    $( document ).ready(function() {
    // Evento quando o mouse entra no botão com ID 'btn-card-1'
        $(document).on('mouseenter', '#btn-card-1', function() {
            setTimeout(function() {
                $('#card-1').addClass('col-12').css({'transform': 'initial'});
                $('small').addClass('btn-voltar').html('Voltar'); // Adiciona a classe 'btn-voltar' e altera o texto
                $('#card-2').hide(); // Esconde o card-2
                $('#card-3').hide(); // Esconde o card-3
            }, 1000); // Aplica a mudança após 1 segundo
        });

        // Usa um evento de clique separado para o botão que foi adicionado dinamicamente
        $(document).on('click', '.btn-voltar', function() { // Seleciona o botão com a classe 'btn-voltar'
            $('#card-1').removeClass('col-12'); // Remove a classe col-12 do card-1
            $('#card-1').show(); // Mostra o card 1
            $('#card-2').show(); // Mostra o card 2
            $('#card-3').show(); // Mostra o card 3
            $('small').removeClass('btn-voltar').html(''); // Remove a classe 'btn-voltar' e limpa o texto
        });
        

        /*$(document).on('mouseleave', '#card-1', function() { // Quando o mouse sai do card-1
            $('#card-1').removeClass('col-12'); // Remove a classe col-12 do card-1 se necessário
            $('.card').show(); // Mostra todos os cards novamente
        });*/



    $('#card-2').hover(
        function() { // Quando o mouse entra no card-1
            $('#card-2').show().addClass('col-12');;
            $('#card-1').hide();
            $('#card-3').hide();
        },
        function() { // Quando o mouse sai do card-1
            $('.card').show(); // Mostra todos os cards novamente
        }
    );

    $('#card-3').hover(
        function() { // Quando o mouse entra no card-1
            $('#card-3').show().addClass('col-12');;
            $('#card-1').hide();
            $('#card-2').hide();
        },
        function() { // Quando o mouse sai do card-1
            $('.card').show(); // Mostra todos os cards novamente
        }
    );
});