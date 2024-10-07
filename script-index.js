$( document ).ready(function() {
    
    //iniciar tempo de navegação
    function abreModal(){
        var timeoverModal = true;
        var inputFocus = $('input')
        if(inputFocus.is(':focus')){
           var formFocus = true;
        }
        else{
            var formFocus = false;
        }
        //alert(timeoverModal)
        // Se o timeover for true - abre modal
        if(timeoverModal == true && formFocus == false){
            //alert('abriu modal')
        }else{
            //alert('nao abriu modal')
        }



    }


    const tempoNavegacao = setTimeout(abreModal,5000)

    //se timeover for igual true - abrir modal com acesso ao whatsapp

    




    //se tempo for igual e maior a 20 segundos e o formulario não esteja em focus - não abrir modal
    //se focus no formulario for maior que 30 segundos - dai sim abre o modal com o whatsapp
});