/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let sexo = "";
	let lugar = "";
	let temporada = "";
	let cantidad = 0;
	let resp = "";
	let contBariloche = 0;
	let contCataratas = 0;
	let contSalta = 0;
	let contFem = 0;
	let contMasc = 0;
	let lugMasElegido = "";
	let sexMasPasajeros = 0;
	let acumInvierno = 0;
	let contInvierno = 0;
	let promViajeInv = 0;

	do {
		do {
			sexo = prompt("Ingrese su sexo, f o m: ");
			switch (sexo) {
				case "Femenino":
				case "Mujer":
				case "F":
					sexo = "f";
					contFem++;
					break;
				case "Masculino":
				case "Hombre":
				case "M":
					sexo = "m";
					contMasc++
					break;
			}
		} while (sexo != "f" && sexo != "m");
		do {
			lugar = prompt("Ingrese el lugar: ");
		} while (lugar != "Bariloche" && lugar != "Cataratas" && lugar != "Salta");
		do {
			temporada = prompt("Ingrese el temporada: ");
		} while (temporada != "Otoño" && temporada != "Invierno" && temporada != "Verano" && temporada != "Primavera");
		do {
			cantidad = parseInt(prompt("Ingrese la cantidad de viajantes: "));
		} while (isNaN(cantidad) || cantidad <= 0);

		switch (lugar) {
			case "Bariloche":
				contBariloche++;
				break;
			case "Cataratas":
				contCataratas++;
				break;
			case "Salta":
				contSalta++;
				break;
		}

		if(temporada == "Invierno"){
			acumInvierno = acumInvierno + cantidad;
			contInvierno++
			promViajeInv = acumInvierno/contInvierno;
		}

		resp = prompt("Desea ingresar otra estadía? si/no ");
		while (resp != "si" && resp != "no") {
			resp = prompt("Respuesta inválida. Ingrese si o no");
		}
	} while (resp == "si")

	if (contBariloche > contCataratas && contBariloche > contSalta) {
		lugMasElegido = "Bariloche";
	} else if (contCataratas >= contBariloche && contCataratas > contSalta) {
		lugMasElegido = "Cataratas";
	} else {
		lugMasElegido = "Salta";
	}

	if (contFem > contMasc) {
		sexMasPasajeros = "Mujeres";
	} else {
		sexMasPasajeros = "Hombres";
	}

	document.write("Lugar más elegido: " + lugMasElegido+"<br>");
	document.write("Sexo de titular que lleva más pasajeros. " + sexMasPasajeros +"<br>");
	document.write("Promedio de personas por viaje, que viajan en invierno: " + promViajeInv +"<br>");
}