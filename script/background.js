function changeColor() {
    var colors = ["red", "orange", "yellow", "green", "blue", "purple", "hotpink", "chartreuse"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
