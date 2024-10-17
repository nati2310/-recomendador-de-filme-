 // drama romanse comedia aventura açao 
//minios 18 comedia aventura 
//malevola 10 romance aventura açao 
//crepuscolo 13 drama romanse comedia aventura 
//os incriveis 6 drama comedia aventura 
// a era do gelo; livre, açao comedia aventura 
//divertidamente, livre, aventura e comedia
//fantastica frabica de chocolate, livre, aventura e comedia
//as aventiras de pi 10 aventura drama 
//avatar, 14 aventura
//mulher maravivia,12 açao drama aventura 




}
let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("10");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "malevola";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "mulher maravinha";          
        } else{
         return "as aventuras de pi";
        }
      } else {
        if (gostaDeFantasia) {
          return "As aventuras de pi";
        } else {
          return "avatar";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "a fantastica fabrica de chocolat";
    } else {
      return "O feitiço do tempo";
    }
  }
}
