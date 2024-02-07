const botaoIniciarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const botaoTirarFoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
const botaoEnviarFoto = document.querySelector('[data-enviar]')

let imagemUrl = "";

botaoIniciarCamera.addEventListener('click', async function () {
    try {
        const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

        botaoIniciarCamera.style.display = 'none';
        campoCamera.style.display = 'block';

        video.srcObject = iniciarVideo;
    } catch {
        alert('Não foi possível localizar uma câmera.')
    }

})

botaoTirarFoto.addEventListener('click', function () {
    canvas.getContext('2d').drawImagem(video, 0, 0, canvas.width, canvas.height);

    imagemUrl = canvas.toDataUrl("image/jpeg");

    campoCamera.style.display = "none";

    mensagem.style.display = "block";
})

botaoEnviarFoto.addEventListener('click', () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(receberDadosExistentes);

    converteRetorno.imagem = imagemUrl;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));
    window.location.href = './abrir-conta-form-3.html';
})