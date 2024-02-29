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

const contrasenaDebil = function () {
  let contrasena = "";
  for (let i = 0; i < 5; i++) {
    contrasena += letras
      .join("")
      .charAt(Math.floor(Math.random() * letras.length));
  }
  for (let i = 0; i < 3; i++) {
    contrasena += numeros
      .join("")
      .charAt(Math.floor(Math.random() * numeros.length));
  }
  console.log("CONTRASEÑA SIN DESORDENAR " + contrasena);
  contrasenaDesordenada = desordenarDebil(contrasena);

  console.log("CONTRASEÑA DESORDENADA " + contrasenaDesordenada);
  return contrasenaDesordenada;
};

const desordenarDebil = function (contrasena) {
  let array = contrasena.split("");

  for (let i = contrasena.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i + 1);
    array[i], (array[j] = array[j]), array[i];
  }

  return array.join("");
};

const generaCinco = function (contrasenaDebil) {
  arrayPasswords = [];
  for (let i = 0; i < 5; i++) {
    arrayPasswords.push(contrasenaDebil());
  }

  return arrayPasswords;
};

// GENERAR CINCO DÉBILES
let pass = generaCinco(contrasenaDebil);
console.log(pass);

/* [1.5] Crea una función para generar un password fuerte: 
  
    - Compuesta por 6 letras, 4 números y 3 caracteres especiales.
    - Se utilizarán los arrays definidos en el programa principal.
    - Tanto la posición como el valor se obtendrán de forma aleatoria.
    - En la primera posición aparecerá un carácter especial, 
      la primera letra generada debe ser obligatoriamente mayúscula,
      el resto minúsculas 
      y ningún valor se podrá repetir.
  */

const contrasenaFuerte = function () {
  let arrayFuerte = "";
  arrayFuerte = caracteresEspeciales
    .join("")
    .charAt(Math.floor(Math.random() * caracteresEspeciales.length));
//   console.log("TEST FUERTE " + arrayFuerte);
  let arrayAux = "";
  for (let i = 0; i < 2; i++) {
    arrayAux += caracteresEspeciales
      .join("")
      .charAt(Math.floor(Math.random() * caracteresEspeciales.length));
  }
  for (let i = 0; i < 6; i++) {
    arrayAux += letras
      .join("")
      .charAt(Math.floor(Math.random() * letras.length));
  }
  for (let i = 0; i < 4; i++) {
    arrayAux += numeros
      .join("")
      .charAt(Math.floor(Math.random() * numeros.length));
  }
  let auxDesordenada = desordenaFuerte(arrayAux);

  console.log(auxDesordenada);
  let auxArrayDesordenado = auxDesordenada.split("");

  let mayusculaPuesta = false;

  // Suponiendo que auxDesordenada es un array de caracteres.
  for (let i = 0; i < auxArrayDesordenado.length; i++) {
    if (
      isNaN(auxArrayDesordenado[i]) &&
      letras.includes(auxArrayDesordenado[i]) &&
      mayusculaPuesta == false
    ) {
      auxArrayDesordenado[i] = auxArrayDesordenado[i].toUpperCase();
      console.log("HE PASADO A MAYÚS: " + auxArrayDesordenado[i]);
      mayusculaPuesta = true;
    } else if (
      isNaN(auxArrayDesordenado[i]) &&
      letras.includes(auxArrayDesordenado[i]) &&
      mayusculaPuesta == true
    ) {
      auxArrayDesordenado[i] = auxArrayDesordenado[i].toLowerCase();
    }

  }
  let passParte2= auxArrayDesordenado.join("");
  let passFinal = arrayFuerte + passParte2;
  console.log(passFinal);

  // pasar a mayúscula la primera letra
};
const desordenaFuerte = function (arrayAux) {
  let array = arrayAux.split("");

  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
};
contrasenaFuerte();
