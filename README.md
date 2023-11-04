Projeto de nível de herói
Este projeto é um exemplo simples de como usar uma função para determinar o nível de um herói em um jogo.

Como funciona
A função verificaExp() recebe uma variável expHeroi que representa a experiência do herói. A função usa uma série de condições para determinar o nível do herói.

Níveis de herói
Os níveis de herói são os seguintes:

Ferro (0 a 1000 de experiência)
Bronze (1001 a 2000 de experiência)
Prata (2001 a 5000 de experiência)
Ouro (6001 a 7000 de experiência)
Diamante (7001 a 9000 de experiência)
Radiante (10001 ou mais de experiência)
Exemplo de uso
O seguinte código mostra como usar a função verificaExp():

javascript
let expHeroi = 10350;

let nomeHeroi = "Price";

console.log ("O herói " + nomeHeroi + " está no nível " + verificaExp(expHeroi));


Este código irá imprimir a seguinte mensagem no console:

O herói Price está no nível Diamante.


Projeto feito seguindo o Bootcamp da DIO - Potência Tech iFood - Programação do Zero
