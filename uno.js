/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let nombre = "";
	let peso = 0;
	let sexo = "";
	let edad = "";
	let contMujer = 0;
	let acumEdad = 0;
	let contEdad = 0;
	let promEdad = 0;
	let pesoHomMasPesado = 0;
	let	nombreHomMasPesado = "";


	for (i = 1; i <= 5; i++) {
		nombre = prompt("Ingrese un nombre: ")
		do {
			peso = parseInt(prompt("Ingrese su peso: "));
		} while (isNaN(peso) || peso <= 20 || peso > 300);
		do {
			sexo = prompt("Ingrese su sexo, f o m: ");
			switch (sexo) {
				case "Femenino":
				case "Mujer":
				case "F":
					sexo = "f";
					break;
				case "Masculino":
				case "Hombre":
				case "M":
					sexo = "m";
					break;
			}
		} while (sexo != "f" && sexo != "m");
		do {
			edad = parseInt(prompt("Ingrese su edad: "));
		} while (isNaN(edad) || edad <= 0 || edad > 110);

		acumEdad = acumEdad + edad;
		contEdad++;
		if (sexo == "f") {
			contMujer++;
		}
		if (sexo == "m" && pesoHomMasPesado < peso){
			pesoHomMasPesado = peso;
			nombreHomMasPesado = nombre;
		}
	}

	if (contEdad == 0) {
		promEdad = promEdad / 1;
	} else {
		promEdad = acumEdad / contEdad;
	}

	document.write("Cantidad de mujeres: " + contMujer+"<br>");
	document.write("Edad promedio: " + promEdad.toFixed(2) + " años"+"<br>");
	document.write("El hombre más pesado: " + nombreHomMasPesado +"<br>");
}
