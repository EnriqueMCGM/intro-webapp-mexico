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
