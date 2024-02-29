# Generador de Contraseñas

Este proyecto es un ejercicio que consiste en un generador de contraseñas débiles y fuertes utilizando JavaScript. Las contraseñas generadas cumplen con criterios específicos para asegurar la variedad y la seguridad.

## Características

- **Contraseña Débil**: Compuesta por 5 letras y 3 números.
- **Contraseña Fuerte**: Incluye 6 letras, 4 números y 3 caracteres especiales, con la primera letra en mayúscula y las subsiguientes en minúsculas.

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript ES6

## Funcionamiento

Las contraseñas se generan de manera aleatoria utilizando arrays predefinidos que contienen letras, números y caracteres especiales. Después de generar una contraseña basada en los criterios establecidos, se desordena antes de mostrarse al usuario.

### Contraseña Débil

Para generar una contraseña débil, el programa realiza lo siguiente:

1. Selecciona aleatoriamente 5 letras del array de letras.
2. Selecciona aleatoriamente 3 números del array de números.
3. Desordena la combinación de letras y números para aumentar la aleatoriedad.

### Contraseña Fuerte

La generación de una contraseña fuerte añade complejidad:

1. Comienza con un carácter especial aleatorio.
2. Añade 6 letras aleatorias del array de letras asegurándose de que la primera letra sea mayúscula y el resto minúsculas.
3. Añade 4 números aleatorios del array de números.
4. Incluye 2 caracteres especiales adicionales aleatorios.
5. Desordena la combinación de todos los elementos seleccionados.

## Cómo Usar

Para usar el generador de contraseñas:

1. Clona el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador.
3. Utiliza los botones o enlaces proporcionados para generar una contraseña débil o fuerte.
4. La contraseña generada se mostrará en la consola del navegador.


## Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.