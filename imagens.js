// variavel das imagens e sons do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;

//sons do jogo
let somDatrilha;
let somDaColisao;
let somDoPonto;

//função pra carregar imagem
function preload(){
  // variavelDaImagem = loadImage(caminho da imagem)
  imagemDaEstrada = loadImage("imagem/estrada.png");
  imagemDoAtor = loadImage("imagem/ator-1.png");
  imagemDoCarro = loadImage ("imagem/carro-1.png");
  imagemDoCarro2 = loadImage ("imagem/carro-2.png");
  imagemDoCarro3 = loadImage ("imagem/carro-3.png");
  imagemCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2, imagemDoCarro3];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}
