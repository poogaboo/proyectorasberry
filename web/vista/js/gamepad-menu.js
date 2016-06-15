// Mapeado de los botones del gamepad (según página):
var entradaPad = {
	arriba: 38,
	abajo: 40,
	derecha: 39,
	izquierda: 37,
	
	boton2: 13 // botón A , Enter
/*	boton3: , // botón B
	boton1: , // botón X
	boton4: , // botón Y
	boton6: , // gatilloR
	boton5: , // gatilloL
	boton10: , // start
	boton9:  // select
	*/
};


// Captura del teclado para realizar acciones
$(document).on('keydown', function(e){
    switch(e.keyCode || e.which){
        case 38:
            cambiaTab("-1");
            break;
        case 9:
            e.preventDefault();                         // detención de la funcionlidad de la tecla 'tab'
            cambiaTab((e.shiftKey)? "-1" : "1");        // detección de la tecla 'shift' para invertir el avance
            break;
        case 40:
            cambiaTab("1");        // detección de la tecla 'shift' para invertir el avance
            break;
        case 13:
            var href = $(":focus > a").attr("href");
            if (href != undefined) {
                cambioBorde();                          // efecto color en el borde
                window.location = href;                 // redirigimos la página
            }
            break;
    }
});


// Cambia el foco del menú
function cambiaTab(valorSalto){
    var numTabActual = $(":focus").attr("tabindex");
    if (numTabActual == undefined) {
        $('li').first().focus();
        numTabActual = $(":focus").attr("tabindex");
    }
    var numTabs = $("[tabindex]").length;
    var nuevoValor = parseInt(numTabActual) + parseInt(valorSalto);
    
    if ( nuevoValor > 0 && nuevoValor <= numTabs)
        $("[tabindex=" + nuevoValor + "]").focus();
}

			
/*




function checkGamepad() {
    var gamepad = navigator.getGamepads()[0];
    var ejeX = gamepad.axes[0];
    if(ejeX < -0.5) {
        input.left = true;
        input.right = false;
    } else if(ejeX > 0.5) {
        input.left = false;
        input.right = true;
    } else {
        input.left = false;
        input.right = false;
    }
}


var e = jQuery.Event( "keydown", { keyCode: 64 } );
 
// trigger an artificial keydown event with keyCode 64
jQuery( "body" ).trigger( e );


// transformar 
var e2key = function(e) {
    if (!e) return '';
    var event2key = {
        '96':'0', '97':'1', '98':'2', '99':'3', '100':'4', '101':'5', '102':'6', '103':'7', '104':'8', '105':'9', // Chiffres clavier num
        '48':'m0', '49':'m1', '50':'m2', '51':'m3', '52':'m4', '53':'m5', '54':'m6', '55':'m7', '56':'m8', '57':'m9', // Chiffres caracteres speciaux
        '65':'a', '66':'b', '67':'c', '68':'d', '69':'e', '70':'f', '71':'g', '72':'h', '73':'i', '74':'j', '75':'k', '76':'l', '77':'m', '78':'n', '79':'o', '80':'p', '81':'q', '82':'r', '83':'s', '84':'t', '85':'u', '86':'v', '87':'w', '88':'x', '89':'y', '90':'z', // Alphabet
        '37':'left', '39':'right', '38':'up', '40':'down', '13':'enter', '27':'esc', '32':'space', '107':'+', '109':'-', '33':'pageUp', '34':'pageDown' // KEYCODES
    };
    return event2key[(e.which || e.keyCode)];
};

var page5Key = function(e, customKey) {
    if (e) e.preventDefault();
    switch(e2key(customKey || e)) {
        case 'left':  break;
        case 'right':  break;
    }
};

$(document).bind('keyup', page5Key);

$(document).trigger('keyup', [{preventDefault:function(){},keyCode:37}]); 





*/






