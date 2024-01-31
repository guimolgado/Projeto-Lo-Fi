const botaoPlayPause = document.getElementById("play-pause");
const botaoVoltar = document.getElementById("anterior")
const botaoAvancar = document.getElementById("proximo")
const audioFaixa = document.getElementById("audio-faixa");
const numeroDaFaixa = document.getElementById("faixa")


const numeroFaixas = 10;
let taTocando = 0;
let faixaAtual = 1;

function tocarFaixa(){
 audioFaixa.play();
 botaoPlayPause.classList.remove("bi-play-circle");
 botaoPlayPause.classList.add("bi-pause-circle");
}

function trocarNomeFaixa() {
    numeroDaFaixa.innerText = "lo-fi " + faixaAtual;
}


function pausarFaixa(){
    audioFaixa.pause();
    botaoPlayPause.classList.add("bi-play-circle");
    botaoPlayPause.classList.remove("bi-pause-circle");
}

function tocarOuPausar(){

    if(taTocando === 0 ){
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }

}

function proximaFaixa() {
    if (faixaAtual === numeroFaixas){
        faixaAtual = 1;
    } else {
        faixaAtual = faixaAtual + 1;
    }

    audioFaixa.src = "audios/lofi-" + faixaAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}
    function voltarFaixa() {
        if (faixaAtual === 1){
            faixaAtual = numeroFaixas;
        } else {
    faixaAtual = faixaAtual - 1
        }
    

    audioFaixa.src = "audios/lofi-" + faixaAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

audioFaixa.addEventListener("ended", function () {
    proximaFaixa();
});

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoAvancar.addEventListener("click", proximaFaixa);
botaoVoltar.addEventListener("click", voltarFaixa)