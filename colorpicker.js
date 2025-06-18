const canvas = document.getElementById("colorWheel");
const ctx = canvas.getContext("2d");

// Draw the color wheel
function drawColorWheel() {
    const image = new Image();
    image.src = "color-wheel.png"; // Use a circular color spectrum image
    image.onload = () => ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}

// Detect color selection
canvas.addEventListener("click", (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const hex = `#${pixel[0].toString(16).padStart(2, '0')}${pixel[1].toString(16).padStart(2, '0')}${pixel[2].toString(16).padStart(2, '0')}`;
    
    document.getElementById("colorCode").textContent = hex;
    document.getElementById("colorPreview").style.backgroundColor = hex;
});

drawColorWheel();
