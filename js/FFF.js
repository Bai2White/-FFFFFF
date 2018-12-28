function random(number = 255) {
    return Math.floor(Math.random()*(number + 1));
}
var btn = document.querySelector('button');
btn.onclick = function() {
    var rndColor = `rgb(${random(255)}, ${random(255)}, ${random(255)}}`
    btn.style.backgroundColor = rndColor;
}
