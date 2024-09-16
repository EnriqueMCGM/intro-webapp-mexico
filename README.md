# intro-webapp-mexico

Bandera de Mexico
index.html
Bandera de México
Esperanza
#009900

Escudo
Unidad
#FFFFFF

Sangre de nuestros héroes nacionales
#9D0000

Imagen en la esquina
script.js
document.addEventListener(‘DOMContentLoaded’, function () {

// Variables para los sliders y cuadros de color

const greenSlider = document.getElementById(‘greenSlider’);

const redSlider = document.getElementById(‘redSlider’);

const greenBox = document.getElementById(‘greenBox’);

const redBox = document.getElementById(‘redBox’);

const greenHex = document.getElementById(‘greenHex’);

const redHex = document.getElementById(‘redHex’);

// Función para actualizar el color verde

greenSlider.addEventListener(‘input’, function () {

const greenValue = parseInt(greenSlider.value).toString(16).padStart(2, ‘0’);

const hexColor = #${greenValue}9900;

greenBox.style.backgroundColor = hexColor;

greenHex.textContent = hexColor;

});

// Función para actualizar el color rojo

redSlider.addEventListener(‘input’, function () {

const redValue = parseInt(redSlider.value).toString(16).padStart(2, ‘0’);

const hexColor = #9D${redValue}00;

redBox.style.backgroundColor = hexColor;

redHex.textContent = hexColor;

});

});

style.css
body {

background-color: #f8f9fa;

font-size: 1.2rem; /* Aumentamos el tamaño general del texto */

position: relative; /* Asegúrate de que el contenedor padre tenga posición relativa */

margin: 0;

padding: 0;

min-height: 100vh; /* Asegúrate de que el body ocupe al menos el 100% de la altura de la ventana */

}

h1 {

font-size: 2.5rem; /* Tamaño del título principal */

}

h5 {

font-size: 1.5rem; /* Tamaño de los subtítulos */

}

.recuadros {

display: flex;

justify-content: space-between; /* Espacio entre los recuadros */

}

.recuadro {

width: 30%; /* Ajusta el ancho de cada recuadro */

}

.color-box {

width: 100%;

height: 300px; /* Aumentamos el tamaño de los recuadros */

border: 3px solid black; /* Borde más grueso */

margin-bottom: 20px;

display: flex;

justify-content: center;

align-items: center;

}

.color-box img {

max-height: 60%; /* Aumentamos el tamaño máximo de la imagen */

max-width: 60%;

}

.centered-image {

display: block;

margin: 0 auto;

}

.custom-range {

width: 100%;

}

p {

font-size: 1.3rem; /* Aumentamos el tamaño del texto hexadecimal */

}

/* Color Inicial */

#greenBox {

background-color: #009900;

}

#whiteBox {

background-color: #FFFFFF;

}

#redBox {

background-color: #9D0000;

}

/* Imagen en la esquina inferior derecha */

.bottom-right-img {

position: fixed; /* Usa fixed para mantener la imagen en la esquina inferior derecha incluso cuando se desplaza la página */

bottom: 10px; /* Ajusta la distancia desde el borde inferior */

right: 10px; /* Ajusta la distancia desde el borde derecho */

width: 200px; /* Ajusta el tamaño según sea necesario */

height: auto;

z-index: 1000; /* Asegúrate de que esté por encima del resto del contenido */

}
