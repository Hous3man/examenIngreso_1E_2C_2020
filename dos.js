/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {
  let marca = "";
  let precio = 0;
  let peso = 0;
  let tipo = "";
  let resp;
  let acumPeso = 0;
  let precioSolido = 0;
  let precioMasCaroSolido = 0;
  let precioLiquido = 0;
  let precioMasBaratoLiquido = 0;
  let marcaMasCaraSolido = "No se ingresaron sólidos";
  let marcaMasBarataLiquido = "No se ingresaron líquidos";
  let flagLiquido = 0;

  do {
    marca = prompt("Ingrese la marca: ");
    do {
      precio = parseInt(prompt("Ingrese el precio: "));
    } while (isNaN(precio) || precio <= 0);
    do {
      peso = parseInt(prompt("Ingrese el peso: "));
    } while (isNaN(peso) || peso <= 0);
    do {
      tipo = prompt("Ingrese el tipo de producto: ");
    } while (tipo != "Sólido" && tipo != "Líquido");
    acumPeso = acumPeso + peso;
    switch(tipo){
      case "Sólido":
      precioSolido = precio;
      if(precioMasCaroSolido < precioSolido){
        precioMasCaroSolido = precioSolido;
        marcaMasCaraSolido = marca;
      }
      break;
      case "Líquido":
      precioLiquido = precio;
      if(flagLiquido == 0 || precioMasBaratoLiquido > precioLiquido){
        precioMasBaratoLiquido = precioLiquido;
        marcaMasBarataLiquido = marca;
        flagLiquido = 1;
      }
      break;
    }
    resp = prompt("Desea ingresas otro producto? si/no ");
    while (resp != "si" && resp != "no") {
      resp = prompt("Respuesta inválida. Ingrese si o no");
    }
  } while (resp == "si");

  document.write("Peso de la compra: " + acumPeso+"<br>");
	document.write("Marca más cara sólidos: " + marcaMasCaraSolido +"<br>");
	document.write("Marca más barata líquidos: " + marcaMasBarataLiquido +"<br>");

}
