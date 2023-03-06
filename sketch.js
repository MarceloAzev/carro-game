function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}


function draw() {
  //comando para plano de fundo - cor ou imagem
  background(imagemDaEstrada);  
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  colisaoBordaCarro();
  movimentaAtor();
  verificaColisao();
  incluiPontos();
  marcarPontos();
}
