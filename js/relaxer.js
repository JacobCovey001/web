const container = document.getElementById('container');
const text = document.getElementById('text');

function breatheAnimation() {
    text.innerHTML = 'breathe in';
    container.classList.remove('shrink');
    container.classList.add('grow');

    setTimeout(() => {
        text.innerHTML = 'hold';

        setTimeout(() => {
            text.innerHTML = 'breathe out';
            container.classList.remove('grow');
            container.classList.add('shrink');
        }, 1500);
    }, 3000);
}

breatheAnimation();
setInterval(breatheAnimation, 7500);
