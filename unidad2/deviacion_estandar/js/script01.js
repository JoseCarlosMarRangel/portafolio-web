
let arreglo_num = new Array();

arreglo_num = [1,2,3,4,5,6];

//Uso de una funcion
function dev(arr){
    //*Crear la media con Array.reduce
    let media = arr.reduce((acc, curr)=>{
      return acc + curr
    }, 0) / arr.length;
     
    //*Asignando (valor - media) ^ 2 a cada elemento del array
    arr = arr.map((k)=>{
      return (k - media) ** 2
    })
     
    //*Calcular la suma del array actualizado
   let sum = arr.reduce((acc, curr)=> acc + curr, 0);
    
   //*Calculando la varianza
   let varianza = sum / arr.length
    
   //*Retornar la desviacion estandar
   return Math.sqrt(sum / arr.length)
  }
   
   
  console.log(dev(arreglo_num))