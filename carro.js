//possível armazenar as variaveis dos carros em um lista?
//Lista para variaveis dos carros
let xCarros = [420,200,400,600, 500,300];
let yCarros = [40,215,320,268,100,152];
let comprimentoCarros = [50,70,60,60,50,70];
let alturaCarros = [40,30,30,30,40,30];
let velocidadeCarros = [2,5,4,6,7,3];


//Exibir carro
function mostraCarro(){
  //comando para exibição de imagem
  //image(Imagem,Posição X, Posição Y, comprimento da imagem, Altura da imagem)
  // length serve para contar o tamanho de uma lista
  for(let cont = 0; cont < imagemCarros.length; cont++){
    image(imagemCarros[cont], xCarros[cont],yCarros[cont],comprimentoCarros[cont],alturaCarros[cont]);
  }  
}


function movimentaCarro(){
  for(let cont = 0; cont < imagemCarros.length; cont++ ){
    xCarros[cont] -= velocidadeCarros[cont];
  }
}

function colisaoBordaCarro(){
  for(let cont = 0; cont < imagemCarros.length; cont++ ){
    if (PassouTodaATela(xCarros[cont], comprimentoCarros[cont])){
      xCarros[cont] = 500;
    }
  }
}


//função para retornar o valor da condição do IF da colisaoBordaCarro
function PassouTodaATela(xCarro,comprimentoCarro){
  return xCarro + comprimentoCarro < 0;
}

