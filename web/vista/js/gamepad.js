//===========================================
        // GAMEPAD
        //===========================================
            
            var gamepad;
            var texto = "";
            
            //detectarGamepad();
            window.setInterval(detectarGamepad, 300);
            
            
            
            // Detección del gamepad y uso del primero disponible
            //===================================================
            function detectarGamepad(){
                var hayGamepad = navigator.getGamepads() || navigator.webkitGetGamepads(); // navigator
                if (hayGamepad){
                    gamepad = hayGamepad[0]; // recogemos el primer gamepad: navigator.getGamepads()[0]
                    if (checkBotones() || checkDirecciones())
                        $('#salida').text(texto);                               // =========================
                }
            }
            
            
            // Recorrido de los botones del gamepad
            //===========================================
            function checkBotones(){
                var detectado = false;
                for (var i = 0 ; i < gamepad.buttons.length && !detectado; i++) {
                    if (gamepad.buttons[i].pressed){
                        var botonPulsado = "boton" + (i + 1);
                        var miEvento = $.Event('keydown');
                        miEvento.which = entradaPad[botonPulsado];
                        $(document).trigger(miEvento);
                        
                       texto = "Detectado botón: " + (i + 1);                  // =========================
                        detectado = true;
                    }
                }
                return detectado;
            }
            
            
            // Recorrido del control principal del gamepad
            //============================================
            function checkDirecciones(){
                var detectado = "";
                for (var i = 0 ; i < gamepad.axes.length ; i += 2) {
                    if (Math.floor(Math.abs(valorEje(i)))) // si el valor redondeado hacia abajo, del absoluto es 1 entonces es true
                        detectado = (valorEje(i) == "1") ? "derecha" : "izquierda";
                        
                        // TODO: cambiar texto por eventos de teclado
                        
                    if (Math.floor(Math.abs(valorEje(i + 1))))
                        detectado += (valorEje(i + 1) == "1") ? " abajo" : " arriba";
                    if (detectado != "")
                        texto = "Detectado movimiento Mando(" + (Math.ceil(i / 2) + 1) +"): " + detectado;
                }
                return (detectado != "");
            }
            
            function valorEje(eje){
                return gamepad.axes[eje];
            }

            
            // Eventos de Gamepad (conexión/desconexión):
            //===========================================
            $(window).on("gamepadconnected", function() {
                texto = "Detectado gamepad.id=" + gamepad.id;                   // =========================
                $("#salida").text(texto);
                window.setInterval(detectarGamepad, 300);
            });
 
            $(window).on("gamepaddisconnected", function() {
                texto = "Se ha desconectado el gamepad";                        // =========================
                $("#salida").text(texto);
                window.clearInterval(detectarGamepad);
            });