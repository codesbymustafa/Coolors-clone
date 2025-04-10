let colorDivs = document.querySelectorAll('.color');
let generateBtn = document.querySelector('.generate');
let sliders = document.querySelectorAll('input[type="range"]');
let currentHexes = document.querySelectorAll('.color h2');


//functions

function setColor() {

    colorDivs.forEach((colorDiv,index) => {
        let randColor = generateColor();
        colorDiv.style.backgroundColor = randColor;
        UpdateUI(randColor,index);
    });

}

function generateColor(){
    return chroma.random();
}

function UpdateUI(color, index) {
    let colorDiv = colorDivs[index];
    let hexText = colorDiv.children[0];

    hexText.style.color = checkColor(color);
    hexText.innerHTML = color;

    colorDiv.children[1].style.color = checkColor(color);
}

function checkColor(color) {
    let luminance = chroma(color).luminance();
    return luminance > 0.5 ? 'black' : 'white';
}

//eventListeners

generateBtn.addEventListener('click', setColor);

setColor();