function verificar() {
    var time = document.getElementsByName('radsex');
    var bgVideo = document.getElementById('bgVideo');
    var content = document.getElementById('content');
    var header = document.getElementById('header');

    if (time[0].checked) {
        bgVideo.style.display = 'block';
        content.classList.add('hidden');
        header.classList.add('hidden');
        bgVideo.play(); // Certifique-se de que o vídeo está sendo reproduzido
    } else {
        bgVideo.style.display = 'none';
        content.classList.remove('hidden');
        header.classList.remove('hidden');
        bgVideo.pause(); // Pausa o vídeo quando não estiver visível
        alert('Errou, burro')
    }
}
