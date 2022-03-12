function calcular_imc() {
  let peso = document.getElementById("peso").value;
  let estatura = document.getElementById("estatura").value;
  console.log("El peso es: " + peso);
  console.log("La estatura es: " + estatura);
  let imcx = document.getElementById("imc");
  if (peso != "" && estatura != "") {
    resultado_imc = peso / (estatura * estatura);
    console.log(resultado_imc);
    imcx.value = resultado_imc;
    let categoria = document.getElementById("categoria");
    let img = document.getElementsByClassName("imagendeimc");
    if (parseFloat(resultado_imc) < 18.5) {
      categoria.value = "Peso inferior al normal";
      if (img) {
        img = document.createElement("img");
        img.setAttribute("width", "20%");
        img.setAttribute("height", "20%");
        img.setAttribute("id", "imagen1");
        img.src = "img/bajo_peso.png";
        document.querySelector(".imagendeimc").appendChild(img);
      } else if (!img) {
        let img1 = document.getElementById("imagen1");
        img1.remove();
      }
    } else if (
      parseFloat(resultado_imc) >= 18.5 &&
      parseFloat(resultado_imc) <= 24.9
    ) {
      categoria.value = "Peso normal";
      if (!img) {
        img = document.createElement("img");
        img.setAttribute("width", "20%");
        img.setAttribute("height", "20%");
        img.setAttribute("id", "imagen1");
        img.src = "img/normal_peso.png";
        document.querySelector(".imagendeimc").appendChild(img);
      } else {
        let img = document.getElementById("imagen1");
        img.src = "img/normal_peso.png";
      }
    } else if (
      parseFloat(resultado_imc) >= 25 &&
      parseFloat(resultado_imc) <= 29.9
    ) {
      categoria.value = "Peso superior al normal";
      if (!img) {
        img = document.createElement("img");
        img.setAttribute("width", "20%");
        img.setAttribute("height", "20%");
        img.setAttribute("id", "imagen1");
        img.src = "img/peso_elevado.png";
        document.querySelector(".imagendeimc").appendChild(img);
      } else {
        let img = document.getElementById("imagen1");
        img.src = "img/peso_elevado.png";
      }
    } else if (parseFloat(resultado_imc) > 30) {
      categoria.value = "Obesidad";
      if (!img) {
        img = document.createElement("img");
        img.setAttribute("width", "20%");
        img.setAttribute("height", "20%");
        img.setAttribute("id", "imagen1");
        img.src = "img/obeso_peso.png";
        document.querySelector(".imagendeimc").appendChild(img);
      } else {
        let img = document.getElementById("imagen1");
        img.src = "img/obeso_peso.png";
      }
    }
  }
}

function limpiar() {
  let peso = (document.getElementById("peso").value = "");
  let estatura = (document.getElementById("estatura").value = "");
  let imc = (document.getElementById("imc").value = "");
  let categoria = (document.getElementById("categoria").value = "");

  try {
    let img = document.getElementById("imagen1");
    img.remove();
  } catch (error) {
    console.log(error);
  }
}
