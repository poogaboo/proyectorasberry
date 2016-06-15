function efectoReset(){
    $("#pantalla").css('background-color', 'black');
    $('footer').hide();
    $("#menu").hide().delay(1500).queue(function(){
        $("#pantalla").css('background-color', 'lightGrey');
        $(this).show();
        $('footer').show();
        $('li').first().focus();
    });
    $().focus(function(){
        $(this).css('background-color', 'cyan');
    });
}