// O objetivo é criar uma variável com nome do herói e a quantidade de XP dele, utilizando uma estrutura de decisão para apresentar uma das mensagens abaixo:
// XP < 1.000 = Ferro
// 1.001 < XP < 2.000 = Bronze
// 2.001 < XP < 5.000 = Prata
// 6.001 < XP < 7.000 = Ouro 
// 7.001 < XP < 8.000 = Platina
// 8.001 < XP < 9.000 = Ascendente
// 9.001 < XP < 10.000 = Imortal 
// XP >= 10.001 = Radiante

//Definindo nome e quantidade
let nomeDoHeroi = "Athena";
let quantidadeDeXP = 7.500;

//Exibindo mensagem final
const mensagem = `O Herói de nome ${nomeDoHeroi} está no nível de ${quantidadeDeXP}.`;

if (quantidadeDeXP < 1.000) {
    console.log("Ferro: " + mensagem);
} 
else if (quantidadeDeXP > 1.001 && quantidadeDeXP <= 2.000) {
    console.log("Bronze: " + mensagem);
} 
else if (quantidadeDeXP > 2.001 && quantidadeDeXP <= 5.000) {
    console.log("Prata: " + mensagem);
} 
else if (quantidadeDeXP > 6.001 && quantidadeDeXP <= 7.000) {
    console.log("Ouro: " + mensagem);
} 
else if (quantidadeDeXP > 7.001 && quantidadeDeXP <= 8.000) {
    console.log("Platina: " + mensagem);
} 
else if (quantidadeDeXP > 8.001 && quantidadeDeXP <= 9.000) {
    console.log("Ascendente: " + mensagem);
} 
else if (quantidadeDeXP > 9.001 && quantidadeDeXP <= 10.000) {
    console.log("Imortal: " + mensagem);
} 
else {
    console.log("Radiante: " + mensagem);
}