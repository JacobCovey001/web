const element1 = document.getElementById("element1");
const element2 = document.getElementById("element2");
const element3 = document.getElementById("element3");
const element4 = document.getElementById("element4");
const element5 = document.getElementById("element5");

let positionY = 0;
let positionX = 0;

const list = ["running", "paused"];
let index = 0;

element1.addEventListener("click", function() {
    element1.innerHTML = "I've been clicked!<br>Try double clicking me.";
});

element1.addEventListener("dblclick", function() {
    element1.innerHTML = "I've been doubleclicked!<br>Try single clicking me.";
});

element2.addEventListener("mouseover", function() {
    element2.style.color = "green";
    element2.style.backgroundColor = "blue";
});

element2.addEventListener("mouseout", function() {
    element2.style.color = "white";
    element2.style.backgroundColor = "#bb33bb";
});

document.addEventListener("keyup", function(event) {
    if (event.key === "ArrowDown") {
        positionY += 10;
    } else if (event.key === "ArrowUp") {
        positionY -= 10;
    } else if (event.key === "ArrowLeft") {
        positionX += 10;
    } else if (event.key === "ArrowRight") {
        positionX -= 10;
    }

    element3.style.top = `${positionY}px`;
    element3.style.right = `${positionX}px`;

    if (event.key === "j") {
        element4.style.width = "300px";
        element4.style.height = "50px";
        element4.style.opacity = "1";
        element4.innerHTML = "<h4>click me to make me small <br> press the letter J to bring me back</h4>";
    }
});

element4.addEventListener("click", function() {
    element4.style.width = "10px";
    element4.style.height = "10px";
    element4.innerHTML = "";
    element4.style.opacity = ".3";
});

element5.addEventListener("click", function() {
    element5.style.animationPlayState = list[index];
    index = (index + 1) % 2;
});
