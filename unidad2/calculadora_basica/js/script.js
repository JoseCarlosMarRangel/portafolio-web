const mensaje =
  '\n\n 1.-Suma \n 2.-Resta \n 3.-Multiplicación \n 4.-División \n 5.-Potencia \n 6.-Promedio \n 7.-Desviación Estandar \n 8.-Salir'

function menu_calculadora () {
  let valor1 = prompt('Dime que quieres hacer?' + mensaje)

  switch (parseInt(valor1)) {
    case 1:
      alert('Hola soy la suma')
      console.log(suma())
      menu_calculadora()
      break

    case 2:
      alert('Hola soy la resta')
      console.log(resta())
      menu_calculadora()
      break

    case 3:
      alert('Hola soy la multiplicación')
      console.log(multiplicacion())
      menu_calculadora()
      break

    case 4:
      alert('Hola soy la división')
      console.log(division())
      menu_calculadora()
      break

    case 5:
      alert('Soy la potencia')
      console.log(potencia())
      menu_calculadora()
      break

    case 6:
      alert('Soy el promedio')
      promedio()
      menu_calculadora()
      break

    case 7:
      alert('Soy la desviacion estandar')
      console.log(desv_estandar())
      menu_calculadora()
      break

    case 8:
      alert('Adios, Gracias!')
      break

    default:
      console.log('No tenemos esa opción')
      menu_calculadora()
      break
  }
}

//Funciones de Operaciones

//Suma
function suma () {
  let n1 = parseInt(prompt('Dame tu primer numero: '))
  let n2 = parseInt(prompt('Dame tu segundo numero: '))
  let result
  if (!isNaN(n1) && !isNaN(n2)) {
    result = n1 + n2
    alert('Resultado de la suma: ' + result);
  }
  return 'Resultado de la suma: ' + result
 
}

//Resta
function resta () {
  let n1 = parseInt(prompt('Dame tu primer numero: '))
  let n2 = parseInt(prompt('Dame tu segundo numero: '))
  let result
  if (!isNaN(n1) && !isNaN(n2)) {
    result = n1 - n2
  }
  return 'Resultado de la resta: ' + result
}

// Multiplicación
function multiplicacion () {
  let n1 = parseInt(prompt('Dame tu primer numero: '))
  let n2 = parseInt(prompt('Dame tu segundo numero: '))
  let result
  if (!isNaN(n1) && !isNaN(n2)) {
    result = n1 * n2
  }
  return 'Resultado de la multiplicación: ' + result
}

//Division
function division () {
  let n1 = parseInt(prompt('Dame tu primer numero: '))
  let n2 = parseInt(prompt('Dame tu segundo numero: '))
  let result
  if (n1 == 0 || n2 == 0) {
    alert('No puedes poner 0')
    //division()
  } else {
    result = n1 / n2
  }

  return 'Resultado de la división: ' + result
}

//Potencia
function potencia () {
  let n1 = parseInt(prompt('Dame tu primer numero: '))
  let n2 = parseInt(prompt('Dame tu segundo numero: '))

  return 'Resultado de la potencia: ' + Math.pow(n1, n2)
}

//Promedio
function promedio () {
  let tamano = parseInt(prompt('Dame el tamaño de tu array'))
  a = 0
  b = 0
  while (a < tamano) {
    i = parseFloat(prompt('Dame un numero'))
    b = b + i
    a++
  }

  p = b / tamano

  let resultado = p

  console.log('Promedio: ' + resultado)
}

//Desviacion estandar
function desv_estandar () {
    var miArray=new Array();
    let tamano = parseInt(prompt("Dame el tamaño de tu array"))
 

    // bucle del 1 al n

    for(var i=1;i<=tamano;i++)

    {
        var name = prompt("Introduce un numero");
        miArray.push(name);
    }
    
  let media =
    miArray.reduce((acc, curr) => {
      return acc + curr
    }, 0) / miArray.length

  // Calcular la suma del array actualizado
  let sum = miArray.reduce((acc, curr) => acc + curr, 0)

  // Calculando la varianza
  let varianza = sum / miArray.length

  //Retornar la desviacion estandar
  return "Resultado de la deviacion estandar: " + Math.sqrt(sum / miArray.length)
  
  
}

menu_calculadora()
