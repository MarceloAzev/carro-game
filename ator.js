let xAtor = 100;
let yAtor = 366;
let alturaAtor = 30;
let comprimentoAtor = 30; //diamentro
let colisao = false;
//pontos
let pontoJ1 = 0;

//Exibir ator
function mostraAtor(){
  //comando para exibição de imagem
  //image(Imagem,Posição X, Posição Y, comprimento da imagem, Altura da imagem)
  image(imagemDoAtor,xAtor,yAtor,comprimentoAtor,alturaAtor);
}

function colisaoBordaInferiorAtor(){
  return yAtor < 366    
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -=3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(colisaoBordaInferiorAtor()){
      yAtor +=3;
    }
  }
}


function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let cont = 0; cont < imagemCarros.length; cont++){
    colisao = collideRectCircle(xCarros[cont], yCarros[cont], comprimentoCarros[cont], alturaCarros[cont], xAtor, yAtor, comprimentoAtor/3);
    if(colisao){
      somDaColisao.play();
      voltaAtorPosicaoInicial(); 
      if(pontosMaiorQueZero()){
        pontoJ1 -=1;
      }
    }
  }
}
function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER); // alinha texto
  textSize(20); // tamanho do texto
  fill('Purple');
  text(pontoJ1,180,26); // texto
}

function marcarPontos(){
  if(yAtor < 1){
    pontoJ1 += 1;
    somDoPonto.play();
    voltaAtorPosicaoInicial();
  }
}
function pontosMaiorQueZero(){
  return pontoJ1 > 0
}