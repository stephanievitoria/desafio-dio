// Objetivo: Criar um função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois retornar o resultado para uma variável, o saldo de ranqueadas deve ser feita através do calculo (vitoria-derrotas)
// vitórias < 10 = Ferro
// 11 < vitórias < 20 = Bronze 
// 21 < vitórias < 50 = Prata
// 51 < vitórias < 80 = Ouro 
// 81 < vitórias < 90 = Diamante
// 91 < vitórias < 100 = Lendário
// vitórias >= 101 = Imortal

let quantidades = (1259, 439);

function vitoriasEDerrotas (vitorias, derrotas) {
    somatorio = vitorias - derrotas;
    let mensagem = `O Herói tem de saldo ${somatorio} e está no nível de  `;

    if (vitorias <= 10) {
        console.log(mensagem + "Ferro.");
    } else if (vitorias > 10 && vitorias <= 20) {
        console.log(mensagem + "Bronze.");
    } else if (vitorias > 20 && vitorias <= 50) {
        console.log(mensagem + "Prata.");
    } else if (vitorias > 50 && vitorias <= 80) {
        console.log(mensagem + "Ouro.");
    } else if (vitorias > 80 && vitorias <= 90) {
        console.log(mensagem + "Diamante.");
    } else if (vitorias > 90 && vitorias <= 100) {
        console.log(mensagem + "Lendário.");
    } else {
        console.log(mensagem + "Imortal.");
    }
}
vitoriasEDerrotas(1259, 439);
