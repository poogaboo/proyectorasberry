<!DOCTYPE HTML>
<html lang="es-ES">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	
	<title>ZX Spectrum PRUEBAS</title>
	
	<script src="recursos/jdataview.js"></script>
	<script src="recursos/jsspeccy-core.min.js"></script>
	<script src="recursos/jquery-1.7.2.min.js"></script>
	<script src="recursos/ui.js"></script>
	
	<script>
	            $(document).ready(function() {
	                var jsspeccy = JSSpeccy('speccy', {
	                    'autostart': true,
	                    'autoload': false,
	                    'scaleFactor': 2.3
	                });
					jsspeccy.setModel(JSSpeccy.Spectrum.<?php echo "MODEL_48K" ?>);
					jsspeccy.loadFromUrl('<?php echo "roms48/star_wars.tap" ?>', {'autoload': true});				
	            });
	</script>
	
	<style>
		
		
		
	</style>
</head>

<body>
	
	<div id="speccy"></div>

</body>
</html>
