let expHeroi = 10350;
let nomeHeroi = "Price";

function verificaExp(expHeroi) {
  if (expHeroi <= 1000) {
    return "Ferro";
  } else if (expHeroi >= 1001 && expHeroi <= 2000) {
    return "Bronze";
  } else if (expHeroi >= 2001 && expHeroi <= 5000) {
    return "Prata";
  } else if (expHeroi >= 6001 && expHeroi <= 7000) {
    return "Ouro";
  } else if (expHeroi >= 7001 && expHeroi <= 9000) {
    return "Diamante";
  } else if (expHeroi >= 10001) {
    return "Radiante";
  }
}

// Adiciona um event listener para o evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
  // Chama a função verificaExp() a cada segundo
  setInterval(function() {
    const resultado = verificaExp(expHeroi);
    // Imprime o valor da condição
    console.log("O herói " + nomeHeroi + " está no nível " + resultado);
    // Aumenta o valor da variável expHeroi
    expHeroi++;
  }, 1000);
});
