
$(function(){
    $("[data-toggle='tooltip']").tooltip(); //$("[data-toggle='tooltip']") -> elementos
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 2000
    });
    //https://getbootstrap.com/docs/4.0/components/modal/
    $("#contacto").on('show.bs.modal', function(e){    //El ON siempre se usa dentro de jQuery para suscribir eventos
        console.log('el modal se está mostrando');  
        $("#contactoBtn").removeClass('btn-primary');
        $("#contactoBtn").addClass('btn-outline-success');
        $("#contactoBtn").prop('disabled', true);  
    });
    $("#contacto").on('shown.bs.modal', function(e){
        console.log('el modal se está mostrando despues');    
    });
    $("#contacto").on('hide.bs.modal', function(e){
        console.log('el modal se está ocultando');    
    });
    $("#contacto").on('hidden.bs.modal', function(e){
        console.log('el modal se está ocultando despues'); 
        $("#contactoBtn").prop('disabled', false);     
    });
}); 
     
