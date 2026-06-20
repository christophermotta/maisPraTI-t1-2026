// 1. Crie um objeto representando um produto com as propriedades: nome, preço,
// categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
// propriedades e seus valores. Em seguida, adicione uma nova propriedade
// desconto ao objeto e exiba o preço final calculado.

/*let product = {
    nome: "PC",
    preco: 2560,
    categoria: "eletronico",
    qtdEstoque: 2
};

for (let p in product){
    console.log(p + " - " + product[p]);
};*/

// 2. Crie dois objetos representando personagens de um jogo, cada um com as
// propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
// cada personagem lado a lado e determine qual deles tem maior poder total
// (soma de vida + ataque + defesa).

/*let p1 = {
    nome: "Mario",
    vida: 100,
    ataque: 70,
    defesa: 35
};

let p2 = {
    nome: "Sonic",
    vida: 150,
    ataque: 30,
    defesa: 70
};

let p1Power = 0;
let p2Power = 0;

for (let p in p1,p2){
    console.log(`${p1[p]} | ${p2[p]}`);

    if (p1[p] >= 0){
        p1Power += p1[p];
    }

    if (p2[p] >= 0){
        p2Power += p2[p];
    }
};

if (p1Power > p2Power){
    console.log(`Personagem mais forte: ${p1.nome}, \n Poder total: ${p1Power}`);
} else if (p2Power > p1Power){
    console.log(`Personagem mais forte: ${p2.nome}\nPoder total: ${p2Power}`);
} else {
    console.log(`Empate de poder total!`);
};*/

// 3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
// experiência. Use for...in para listar todos os dados. Com base nos anos de
// experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
// anos = 10%, acima de 5 anos = 15%.

/*let employee = {
    nome: "Pedro",
    cargo: "Gerente",
    salario: 3580,
    exp: 2
};

for (let e in employee){
    console.log(e + ": " + employee[e]);
};

let bonusAnual = 0;

switch (true) {
    case employee.exp <= 2:
        bonusAnual = (5/100) * employee.salario;
        break;
    case employee.exp >= 3 && employee.exp <= 5:
        bonusAnual = (10/100) * employee.salario;
        break;
    default:
        bonusAnual = (15/100) * employee.salario;
        break;
}

console.log("Bonus anual: " + bonusAnual);*/

// 4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
// no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
// listar o inventário completo. Permita que o usuário informe um item para usar:
// reduza a quantidade em 1 ou exiba "item esgotado" se for zero.

/*const PROMPT = require('prompt-sync')();

let player = {
    espada: 1,
    pocao: 5,
    escudo: 2
};

printPlayer();

let item = PROMPT('Digite o item que será utilizado: ')

if (item == 1){
    if (player.espada < 1){
        console.log("Item esgotado!")
    } else {
        player.espada -= 1;
        printPlayer();
    }
} else if (item == 2){
    if (player.pocao < 1){
        console.log("Item esgotado!")
    } else {
        player.pocao -= 1;
        printPlayer();
    }
} else if (item == 3){
    if (player.escudo < 1){
        console.log("Item esgotado!")
    } else {
        player.escudo -= 1;
        printPlayer();
    }
} else {
    console.log("Itém inválido!")
}

function printPlayer(){
    let counter = 1;

    console.log('Inventário')

    for (let i in player){
        console.log(`${counter} - ${i} | Qtd = ${player[i]}`);
        counter++;
    }
}*/

// 5. Crie um objeto representando o orçamento mensal de uma pessoa, com
// categorias como alimentação, transporte, lazer e saúde, cada uma com valor
// planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
// uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.

/*let orcamento = {
    alimentacao: {
        planejado: 250,
        gasto: 100
    },
    transporte: {
        planejado: 125,
        gasto: 180
    },
    lazer: {
        planejado: 70,
        gasto: 120
    },
    saude: {
        planejado: 55,
        gasto: 32
    }
};

let totalPlanejado = 0;
let totalGasto = 0;

for (let categoria in orcamento){
    totalPlanejado += orcamento[categoria].planejado;
    totalGasto += orcamento[categoria].gasto;

    console.log();
    console.log('Categoria: ' + categoria);

    if (orcamento[categoria].planejado <= orcamento[categoria].gasto){
        console.log('Dentro do orçamento');
    } else {
        console.log('Acima do orçamento');
    }
};


console.log();
console.log('Total Planejado: ' + totalPlanejado);
console.log('Total Gasto: ' + totalGasto);
console.log('Saldo: ' + (totalPlanejado - totalGasto));*/

