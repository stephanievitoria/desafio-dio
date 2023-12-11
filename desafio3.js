class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const mensagem = `O ${this.tipo} atacou usando `;
        if (this.tipo === "Mago") {
            console.log(mensagem + "magia.");
        } 
        else if (this.tipo === "Guerreiro") {
            console.log(mensagem + "espada.");
        } 
        else if (this.tipo === "Monge") {  
            console.log(mensagem + "artes marciais.");
        } 
        else if (this.tipo === "Ninja") {
            console.log(mensagem + "shuriken.");
        }
    }
}

let meuHeroi = new Heroi("Athena", "20", "Mago");
meuHeroi.atacar();