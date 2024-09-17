Creación de Interfaz Web - Bandera de México
1. Primer HTML y CSS
El siguiente código HTML y CSS muestra la estructura inicial de la página, con los recuadros de colores representando la bandera de México y sliders para ajustar los colores:

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi México di Oro</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container text-center">
        <h1 class="my-5">Bandera de México</h1>
        <div class="row justify-content-center align-items-center">
            <!-- Color Verde -->
            <div class="col-md-3">
                <h5 class="mb-3">Esperanza</h5>
                <input type="range" class="custom-range mb-3" min="0" max="255" id="greenSlider">
                <div class="color-box" id="greenBox"></div>
                <p id="greenHex" class="mt-2">#009900</p>
            </div>

            <!-- Color Blanco (Unidad) -->
            <div class="col-md-3">
                <h5 class="mb-3">Unidad</h5>
                <div class="color-box" id="whiteBox">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Coat_of_arms_of_Mexico.svg" alt="Escudo" class="img-fluid centered-image">
                </div>
                <p id="whiteHex" class="mt-2">#FFFFFF</p>
            </div>

            <!-- Color Rojo -->
            <div class="col-md-3">
                <h5 class="mb-3">Sangre de nuestros héroes nacionales</h5>
                <input type="range" class="custom-range mb-3" min="0" max="255" id="redSlider">
                <div class="color-box" id="redBox"></div>
                <p id="redHex" class="mt-2">#9D0000</p>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
CSS inicial:
    background-color: #f8f9fa;
    font-size: 1.2rem;
}

h1 {
    font-size: 2.5rem;
}

h5 {
    font-size: 1.5rem;
}

.color-box {
    width: 100%;
    height: 300px;
    border: 3px solid black;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.color-box img {
    max-height: 90%;
    max-width: 90%;
}

.centered-image {
    display: block;
    margin: 0 auto;
}

.custom-range {
    width: 100%;
}

p {
    font-size: 1.3rem;
}

/* Color Inicial */
#greenBox {
    background-color: #009900;
}

#whiteBox {
    background-color: #FFFFFF;
}

#redBox {
    background-color: #9D0000;```

    
## 2. Implementación de sliders interactivos en JavaScript

Se implementaron sliders para ajustar dinámicamente los colores verde y rojo.
document.addEventListener('DOMContentLoaded', function () {
    // Variables para los sliders y cuadros de color
    const greenSlider = document.getElementById('greenSlider');
    const redSlider = document.getElementById('redSlider');
    const greenBox = document.getElementById('greenBox');
    const redBox = document.getElementById('redBox');
    const greenHex = document.getElementById('greenHex');
    const redHex = document.getElementById('redHex');
    
    // Función para actualizar el color verde
    greenSlider.addEventListener('input', function () {
        const greenValue = parseInt(greenSlider.value).toString(16).padStart(2, '0');
        const hexColor = `#${greenValue}9900`;
        greenBox.style.backgroundColor = hexColor;
        greenHex.textContent = hexColor;
    });

    // Función para actualizar el color rojo
    redSlider.addEventListener('input', function () {
        const redValue = parseInt(redSlider.value).toString(16).padStart(2, '0');
        const hexColor = `#9D${redValue}00`;
        redBox.style.backgroundColor = hexColor;
        redHex.textContent = hexColor;
    });
});

## 3. Añadir una imagen en la esquina inferior derecha

Se agregó una imagen en la esquina inferior derecha de la página.
<!-- Imagen en la esquina inferior derecha -->
<img src="https://pbs.twimg.com/media/GHxI_4_WYAAyRk4?format=png&name=small" alt="Imagen en la esquina" class="bottom-right-img">

**CSS correspondiente**:
/* Imagen en la esquina inferior derecha */
.bottom-right-img {
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 200px;
    height: auto;
    z-index: 1000;
}
## 4. Alineación vertical de los recuadros para formar la bandera de México

Finalmente, se ajustaron los recuadros de color para que se alinearan verticalmente y simularan la disposición tradicional de la bandera mexicana.

**HTML modificado**:
```<div class="row flex-column align-items-center">
    <div class="col-md-3 d-flex flex-column align-items-center">
        <!-- Color Verde -->
        <div class="color-box" id="greenBox"></div>
        <h5 class="mt-3">Esperanza</h5>
        <input type="range" class="custom-range mb-3" min="0" max="255" id="greenSlider">
        <p id="greenHex" class="mt-2">#009900</p>
    </div>

    <div class="col-md-3 d-flex flex-column align-items-center">
        <!-- Color Blanco (Unidad) -->
        <div class="color-box" id="whiteBox">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Coat_of_arms_of_Mexico.svg" alt="Escudo" class="img-fluid centered-image">
        </div>
        <h5 class="mt-3">Unidad</h5>
        <p id="whiteHex" class="mt-2">#FFFFFF</p>
    </div>

    <div class="col-md-3 d-flex flex-column align-items-center">
        <!-- Color Rojo -->
        <div class="color-box" id="redBox"></div>
        <h5 class="mt-3">Sangre de nuestros héroes nacionales</h5>
        <input type="range" class="custom-range mb-3" min="0" max="255" id="redSlider">
        <p id="redHex" class="mt-2">#9D0000</p>
    </div>
</div>```

### CSS modificado:
.row {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.col-md-3 {
    display: flex;
    flex-direction: column;
    align-items: center;
}
