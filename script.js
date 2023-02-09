const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size')
const colorBtn = document.getElementById('color');
const clear = document.getElementById('clear');

const ctx = canvas.getContext('2d');

//Global variables:
let size = 10;
let isPressed = false;
let color = 'black'
let x;
let y;

//Mouse map:
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    //Mouse position:
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    //Mouse position:
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
})

//Drawing functions:
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

//Buttons functions:

//Change pincel size:
function updateSizeOnScreen() {
    sizeEl.innerText = size;
}

increaseBtn.addEventListener('click', () => {
    size += 1;

    //Size limit
    if (size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
})

decreaseBtn.addEventListener('click', () => {
    size -= 1;

    //Size limit
    if (size < 1) {
        size = 1;
    }

    updateSizeOnScreen();
})

//Change pincel color:
colorBtn.addEventListener('change', (e) => color = e.target.value);

//Clear canvas:
clear.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))