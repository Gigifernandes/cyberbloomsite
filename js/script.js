var contador = 0;

var texto1 = "The new green";
var texto2 = "this is Nature";
var texto3 = "Just beauty!";

var img1 = "img/semfundo.png";
var img2 = "img/flor1semfundo.png";
var img3 = "img/florsemfundo.png";

function next() {

    let title = document.getElementById('title');
    let img = document.getElementById('imagemzinha');

    if (contador <= 2) {
        contador++;
    } if (contador == 3) {
        contador = 0;
    }

    if (contador == 0) {
        title.textContent = texto1;
        img.src = img1;
    } if (contador == 1) {
        title.textContent = texto2;
        img.src = img2;
    } if (contador == 2) {
        title.textContent = texto3;
        img.src = img3;
    }

    title.style.animation = "none";
    img.style.animation = "none";


    setTimeout(() => {
        title.style.animation = "subir 0.5s ease forwards";
        img.style.animation = "subir 0.8s ease forwards";
    }, 10);
}


const video = document.getElementById('videoCircuito');

// Função para aplicar a animação de aparecer
function applyAnimation1() {
    video.classList.add('aparecerFilme');
    setTimeout(() => video.classList.remove('aparecerFilme'), 1000);
}

// Função para aplicar a animação de desvanecer
function applyAnimation2() {
    video.classList.add('desvanecerFilme');
    setTimeout(() => video.classList.remove('desvanecerFilme'), 2700);
}

// Monitorando o progresso do vídeo
video.addEventListener('timeupdate', () => {
    const currentTime = Math.floor(video.currentTime);

    // Animação ao carregar o vídeo (tempo inicial)
    if (currentTime === 0) {
        applyAnimation1();
    }

    // Animação no tempo desejado (16s)
    if (currentTime === 16) {
        applyAnimation2();
    }
});

// Reiniciando animação ao final do vídeo
video.addEventListener('ended', () => {
    video.currentTime = 0; // Reinicia o vídeo
    video.play();          // Inicia novamente
});