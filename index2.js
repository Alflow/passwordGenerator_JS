/* Ejercicio 5 [3 puntos] */

/* Dados los siguientes array de letras, números y caracteres especiales */
const letras = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "Y",
  "Z",
];

const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const caracteresEspeciales = ["!", "#", "$", "&", "@", "_", "-", "(", "=", "?"];

/* Nota: los passwords se mostrarán por consola */

/* [1] Crea una función para generar un password débil:
      - Compuesta por 5 letras y 3 números.
      - Se utilizarán los arrays definidos en el programa principal.
      - Tanto la posición como el valor se obtendrán de forma aleatoria.
    */

//

// GENERAR CINCO DÉBILES

/* [1.5] Crea una función para generar un password fuerte: 
  
    - Compuesta por 6 letras, 4 números y 3 caracteres especiales.
    - Se utilizarán los arrays definidos en el programa principal.
    - Tanto la posición como el valor se obtendrán de forma aleatoria.
    - En la primera posición aparecerá un carácter especial, 
      la primera letra generada debe ser obligatoriamente mayúscula,
      el resto minúsculas 
      y ningún valor se podrá repetir.
  */
//  función para desordenar
const desordenarDebil = function (contrasena) {
  let array = contrasena.split("");

  for (let i = contrasena.length - 1; i > 0; i--) {
    // importante la prioridad de paréntesis de operarios matemáticos
    let j = Math.floor(Math.random() * (i + 1));
    // importante la desestructuración del array
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
};
const desordenaFuerte = function (arrayAux) {
    let array = arrayAux.split("");
  
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
  };

const passDebil = function () {
  let passInicial = "";
  // genera 5 letras
  for (let index = 0; index < 5; index++) {
    passInicial += letras
      .join("")
      .charAt(Math.floor(Math.random() * letras.length));
  }

  for (let index = 0; index < 3; index++) {
    passInicial += numeros
      .join("")
      .charAt(Math.floor(Math.random() * numeros.length));
  }
  //  desordenamos con la función
  let passFinal = desordenarDebil(passInicial);

  return passFinal;
};

document.getElementById("passDebil1").innerText = passDebil();
// Bucle for para generar 5 pass débiles
for (let i = 0; i < 5; i++) {
  document.getElementById("passDebil2").innerHTML += passDebil() + "<br>";
}

const passFuerte = function () {
  let passInicial = caracteresEspeciales
    .join("")
    .charAt(Math.floor(Math.random() * caracteresEspeciales.length));
  let auxiliarPass = "";
  // añadimos letras
  for (let i = 0; i < 6; i++) {
    auxiliarPass += letras
      .join("")
      .charAt(Math.floor(Math.random() * letras.length));
  }
  // añadimos números
  for (let i = 0; i < 4; i++) {
    auxiliarPass += numeros
      .join("")
      .charAt(Math.floor(Math.random() * numeros.length));
  }
  // añadimos los dos caracteres especiales faltantes
  for (let i = 0; i < 2; i++) {
    auxiliarPass += caracteresEspeciales
      .join("")
      .charAt(Math.floor(Math.random() * caracteresEspeciales.length));
  }
 

  auxiliarPassDesordenada = [...desordenaFuerte(auxiliarPass)];


  let mayusculaPuesta = false;

  for (let i = 0; i < auxiliarPassDesordenada.length; i++) {
    console.log("LA DESORDENADA AHORA ES " + auxiliarPassDesordenada)
    if (
      isNaN(auxiliarPassDesordenada[i]) &&
      letras.includes(auxiliarPassDesordenada[i]) &&
      mayusculaPuesta == false
    ) {
        console.log("HE PASADO A MAYÚS: " + auxiliarPassDesordenada[i]);
        auxiliarPassDesordenada[i] = (auxiliarPassDesordenada[i].toUpperCase());
        console.log("Ahora es " + auxiliarPassDesordenada[i].toUpperCase());
      mayusculaPuesta = true;
    } else if (
      isNaN(auxiliarPassDesordenada[i]) &&
      letras.includes(auxiliarPassDesordenada[i]) &&
      mayusculaPuesta == true
    ) {
      auxiliarPassDesordenada[i] = auxiliarPassDesordenada[i].toLowerCase();
    }else if (caracteresEspeciales.includes(auxiliarPassDesordenada[i])){
        console.log("CARACTER ESPECIAL " +auxiliarPassDesordenada[i] )
    }
  }
  let passFuerteFinal = (passInicial )+ auxiliarPassDesordenada.join("");
  console.log("LA PASS FUERTEFINAL ES: " + passFuerteFinal )
  return passFuerteFinal
};


document.getElementById("passfuerte1").innerText = passFuerte();
for (let i = 0; i < 5; i++) {
    document.getElementById("passfuerte2").innerHTML += passFuerte() + "<br>";
  }