//Variáveis dos Carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.4, 2.8];
let comprimentoCarro = 50;
let alturaCarro = 40;

//Funções do Carro
function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros [i], comprimentoCarro, alturaCarro);
    }
  }

function movimentaCarro(){
  for (let y = 0; y < velocidadeCarros.length; y++){
    xCarros[y] -= velocidadeCarros[y];
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let z = 0; z < imagemCarros.length; z++){
    if (passouTodaATela(xCarros[z])){
      xCarros[z] = 600;
    }
  }
}

function passouTodaATela(xCarro){
 return xCarro < - 50;
}



