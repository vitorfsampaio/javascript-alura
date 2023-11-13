const teclas = [
    "pom", "clap", "tim", "puff", "splash", "toim", "psh", "tic", "tom"
];

teclas.forEach(tecla => {
    console.log(teclas);
    click(`.tecla.tecla_${tecla}`, `#som_tecla_${tecla}`);
});

function click(seletorBotao, seletorSom){
    var botao = document.querySelector(seletorBotao);
    botao.addEventListener("click", function(){
        var som = document.querySelector(seletorSom);
        som.play();
    })
}