var cajadatos;

function iniciar()
{
	cajadatos = document.getElementById('cajadatos');
	boton = document.getElementById('boton');
	boton.addEventListener('click', enviar);
}

function enviar()
{
	var data = new FormData();
	data.append('base', 8);
	data.append('altura', 5);

	var url = "procesar.php"
	var solicitud = new XMLHttpRequest();

	solicitud.addEventListener('load', mostrar);
	solicitud.open("POST", url, true);
	solicitud.send(data);
}

function mostrar(e)
{
	var datos = e.target;

	if(datos.status == 200)
	{
		//cajadatos.innerHTML = datos.responseText;
	
		var r = datos.responseText;
		
		json = eval('('+ r +')');
		
		console.log(json['nombre']);
		console.log(json['codigo']);
		console.log(json['correo']);
	}
}

addEventListener('load', iniciar);
