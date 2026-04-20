let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

const ballRadius = 30;
const ballSpeed = 5;
let ballXPosition = (windowWidth / 2) - ballRadius;
let ballYPosition = (windowHeight / 2) - ballRadius;
let ballXDirection = 1;
let ballYDirection = 1;

let lPaddleWidth = 20;
let lPaddleHeight = 100;
let lPaddleSpeed = 20;
let lPaddleYPosition = (windowHeight / 2) - (lPaddleHeight / 2);

const ball = document.createElement('div');
document.body.appendChild(ball);

const lPaddle = document.createElement('div');
document.body.appendChild(lPaddle);

function createBall() {
    ball.style.height = `${2 * ballRadius}px`;
    ball.style.width = `${2 * ballRadius}px`;
    ball.style.borderRadius = "50%";
    ball.style.backgroundColor = "green";
    ball.style.position = "absolute";
    ball.style.top = `${ballYPosition}px`;
    ball.style.left = `${ballXPosition}px`;
}

function createLPaddle() {
    lPaddle.style.width = `${lPaddleWidth}px`;
    lPaddle.style.height = `${lPaddleHeight}px`;
    lPaddle.style.backgroundColor = "blue";
    lPaddle.style.position = "absolute";
    lPaddle.style.top = `${lPaddleYPosition}px`;
    lPaddle.style.left = "0px";
}

function moveBall() {
    ballXPosition = ballXPosition + (ballSpeed * ballXDirection);
    ballYPosition = ballYPosition + (ballSpeed * ballYDirection);

    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;

    if (ballXPosition < 0 || ballXPosition > (windowWidth - (2 * ballRadius))) {
        ballXDirection = ballXDirection * -1;
    }

    if (ballYPosition < 0 || ballYPosition > (windowHeight - (2 * ballRadius))) {
        ballYDirection = ballYDirection * -1;
    }
}

document.addEventListener('keyup', (event) => {
    if (event.key === 'w') {
        if (lPaddleYPosition <= 0) {
            lPaddleYPosition = 0;
        } else {
            lPaddleYPosition -= lPaddleSpeed;
        }
    }
    if (event.key === 's') {
        if (lPaddleYPosition >= (windowHeight - lPaddleHeight)) {
            lPaddleYPosition = windowHeight - lPaddleHeight;
        } else {
            lPaddleYPosition += lPaddleSpeed;
        }
    }
    lPaddle.style.top = `${lPaddleYPosition}px`;
});

createBall();
createLPaddle();
setInterval(moveBall, 10);
