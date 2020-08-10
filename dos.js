/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  function mostrar() {
  let marca = "";
  let precio = 0;
    
    do {
      marca = prompt("Ingrese la marca: ");
      do {
        precio = parseInt(prompt("Ingrese el precio: "));
      }while (isNaN(precio) || precio <= 0);
      do {
        peso = parseInt(prompt("Ingrese el peso: "));
      } while (isNaN(peso) || peso <=0);
      
      switch (vTipo) {
        case "Arena":
          acumArena = acumArena + vCantBolsas;
          vPrecioArena = vPrecioArena + (vPrecioPorBolsa*vCantBolsas);
          if(vPrecioMaxArena < vPrecioPorBolsa)
          {
            vPrecioMaxArena = vPrecioPorBolsa;
          }
          break;
        case "Cal":
          acumCal = acumCal + vCantBolsas;
          vPrecioCal = vPrecioCal + (vPrecioPorBolsa*vCantBolsas);
          if(vPrecioMaxCal < vPrecioPorBolsa)
          {
            vPrecioMaxCal = vPrecioPorBolsa;
          }
          break;
        case "Cemento":
          acumCemento = acumCemento + vCantBolsas;
          vPrecioCemento = vPrecioCemento + (vPrecioPorBolsa*vCantBolsas);
          if(vPrecioMaxCemento < vPrecioPorBolsa)
          {
            vPrecioMaxCemento = vPrecioPorBolsa;
          }
          break;
      }
      resp = prompt("Desea ingresas otro producto? si/no ");
      while(resp != "si" && resp != "no"){
      resp = prompt("Respuesta inválida. Ingrese si o no");
      }
    } while (resp == "si");
    
    vCantBolsasTotal = acumArena + acumCal + acumCemento;
    vPrecioTotal = vPrecioArena + vPrecioCal + vPrecioCemento;
  
    if (vCantBolsasTotal >= 10) {
      vPrecioConDesc = vPrecioTotal * 0.85;
    }
    else if (vCantBolsasTotal >= 30) {
      vPrecioConDesc = vPrecioTotal * 0.75;
    } else {
      vPrecioSinDesc = vPrecioTotal;
    }
  
    if (acumArena > acumCal && acumArena > acumCemento) {
      vMayorCant = "Arena";
    }
    else if (acumCal >= acumArena && acumArena > acumCemento) {
      vMayorCant = "Cal";
    }
    else {
      vMayorCant = "Cemento";
    }
  
    if(vCantBolsasTotal < 10){
    alert("Usted abonó, bruto sin descuento: $"+vPrecioSinDesc);
    }else {
    alert("Usted abonó, bruto sin descuento: $"+ vPrecioTotal);
    alert("Usted abonó, con descuento: $"+ vPrecioConDesc);
    }
    
    alert("El tipo con más cantidad es: "+ vMayorCant);
  
    if (vPrecioMaxArena > vPrecioMaxCal && vPrecioMaxArena > vPrecioMaxCemento) {
      vTipoMasCaro = "Arena";
    }
    else if (vPrecioMaxCal >= vPrecioMaxArena && vPrecioMaxCal > vPrecioMaxCemento) {
      vTipoMasCaro = "Cal";
    }
    else {
      vTipoMasCaro = "Cemento";
    }
    alert("El tipo más caro es: "+ vTipoMasCaro);
  }
}
