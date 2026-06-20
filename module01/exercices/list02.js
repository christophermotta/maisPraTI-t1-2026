const PROMPT = require('prompt-sync')();

// 1. Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um
// laço for. Em seguida, pergunte se ele deseja ver outra tabuada e repita enquanto
// a resposta for "sim".

/*let number = PROMPT("Digite um número: ");

for (let i = 1; i <= number; i++){
    console.log(`${i} x ${number} = ${i * number}`);
}*/

// 2. Leia um número inteiro positivo e, usando um laço while, calcule e exiba quantos
// dígitos ele possui. Trate o caso do número zero (que possui 1 dígito).

/*let number = PROMPT('Digite um número: ');
let counter = 0;


if (number === 0) {
    counter = 1;
} else {
    while (number > 0) {
        number = Math.floor(number / 10);
        counter++;
    }
}

console.log(counter);*/


// 3. Peça ao usuário quantos termos da sequência de Fibonacci deseja ver e exiba-os
// usando um laço for. Exemplo: 1, 1, 2, 3, 5, 8, 13...

/*let qtd = PROMPT("Quantos números da sequencia de Fibonacci deseja exibir? ");

let before = 0;
let current = 1;

for (let i = 0; i < qtd; i++){
    console.log(`${before} + ${current} = ${before + current}`);
    before = current;
    current = before + current;
}*/

// 4. Defina uma senha fixa no código. Peça ao usuário que a digite e, usando um laço
// do...while, permita no máximo 3 tentativas. Exiba se ele acertou ou se esgotou as
// tentativas.

/*const PWD = 12345;

let insertedPwd = null;

let accessTry = 1;

do {
    if (!insertedPwd){
        insertedPwd = PROMPT('Digite a senha de acesso: ');;
    } 
    
    if (insertedPwd != PWD) {
        insertedPwd = PROMPT('Senha incorreta, digite a senha de acesso correta: ');
    }
    
    if (insertedPwd == PWD) {
        console.log('Acesso concedido!');
        break;
    }
    accessTry++;
} while (insertedPwd != PWD && accessTry < 3);

if (insertedPwd != PWD && accessTry >= 3) {
    console.log('Tentativas excedidas!');
}*/

// 5. Leia um número N e exiba todos os números primos entre 2 e N usando laços
// aninhados (for dentro de for). Exiba também a quantidade total de primos
// encontrados.

/*let N = 20;
let totalPrimos = 0;

for (let numero = 2; numero <= N; numero++) {

    let quantidadeDivisores = 0;

    for (let divisor = 1; divisor <= numero; divisor++) {

        if (numero % divisor === 0) {
            quantidadeDivisores++;
        }

    }

    if (quantidadeDivisores === 2) {
        console.log(numero);
        totalPrimos++;
    }

}

console.log("Total de primos:", totalPrimos);*/

// 6. Crie um array e leia via laço o nome e a nota de 5 alunos. Ao final, exiba: a média
// da turma, o nome do aluno com maior nota e o nome do aluno com menor nota.
// Não use funções prontas como Math.max().

/*let students = [["Joao", 10], ["Maria", 9.5], ["Pedro", 6], ["Jose", 7.5], ["Ana", 9]];
let somaNotas = 0;

let nomeMaiorNota = students[0][0];
let maiorNota = students[0][1];

let nomeMenorNota = students[0][0];
let menorNota = students[0][1];

for (let student of students){
    let nomeAtual = student[0];
    let notaAtual = student[1];

    somaNotas += notaAtual;

    // Verificação de menor nota
    if (notaAtual < menorNota){
        menorNota = notaAtual;
        nomeMenorNota = nomeAtual;
    }

    // Verificação de maior nota
    if (notaAtual > maiorNota){
        maiorNota = notaAtual;
        nomeMaiorNota = nomeAtual;
    }
    
}

let media = somaNotas / students.length;

console.log("Aluno com maior nota: " + nomeMaiorNota + "\nNota: " + maiorNota)
console.log("Aluno com menor nota: " + nomeMenorNota + "\nNota: " + menorNota)
console.log("Media da turma: " + media);*/

// 7. Simule um carrinho de compras: leia nomes e preços de produtos em um laço até
// o usuário digitar "sair". Armazene em arrays. Ao final, liste todos os itens, exiba o
// subtotal, aplique 10% de desconto se houver mais de 3 itens e mostre o total a
// pagar.

/*let item = PROMPT("Digite o nome do produto: ");
let nameItems = [];
let priceItems = [];

while (item != 'sair'){
    let price = Number(PROMPT("Digite o valor do produto: "));
    nameItems.push(item);
    priceItems.push(price);

    item = PROMPT("Digite o nome do produto: ");
}

let subtotal = 0;

for (let i = 0; i < nameItems.length; i++){
    console.log(`${nameItems[i]} - R$ ${priceItems[i]}`);

    subtotal += priceItems[i];
}

let total = subtotal;

if (nameItems.length > 3){
    total = subtotal  - (subtotal * (10 / 100));
}

console.log("Subtotal: " + subtotal);
console.log("Total: " + total);*/

// 8. Leia uma palavra, armazene seus caracteres em um array e, percorrendo-o de
// trás para frente com um laço for, monte a palavra invertida. Exiba a palavra
// original, a invertida e informe se ela é um palíndromo.

/*let word = PROMPT("Digite uma palavra: ");
let wordReverse = "";

for (let i = word.length - 1; i >= 0; i--){
    wordReverse += word[i];
}

console.log(word);
console.log(wordReverse);

if (word == wordReverse){
    console.log('A palvra é um palindromo');
}*/

// 9. Sorteie um número entre 1 e 100 com Math.random(). Usando um laço do...while,
// peça ao usuário para adivinhar; a cada tentativa, diga se o número é maior ou
// menor. Registre as tentativas em um array e, ao acertar, exiba o histórico e quantas tentativas foram necessárias.

/*let randomNumber = Math.round(Math.random()*100);
let number = null;
let counter = 0;

console.log(randomNumber);

do {
    number = PROMPT("Qual o número sorteado? ");
    counter++;

    if (number > randomNumber){
        console.log("O número sorteado é menor.")
    } else if (number < randomNumber){
        console.log("O número sorteado é maior.")
    }
} while (number != randomNumber);

console.log("O número sorteado é " + randomNumber + " você acertou com " + counter + " tentativas.")*/

// 10. Crie uma matriz 3×4 (3 alunos, 4 notas cada). Leia os valores via laços aninhados.
// Calcule e exiba a média de cada aluno, a média geral da turma e qual aluno teve
// o melhor desempenho.

/*let alunos = [["Joao", 10, 10, 9.5, 6], ["Maria", 9.5, 8, 10, 7], ["Pedro", 6, 7.5, 6, 10]];
let somaMedias = 0;
let melhorAluno = "";
let mediaMelhorAluno = 0;

for (let aluno of alunos){
    let notasAluno = 0;
    let mediaAluno = 0;

    for (let i = 1; i <= 4; i++){
        notasAluno += aluno[i];
    }

    mediaAluno = notasAluno / 4;
    somaMedias += mediaAluno;

    if (mediaAluno > mediaMelhorAluno){
        melhorAluno = aluno[0];
        mediaMelhorAluno = mediaAluno;
    }

    console.log(`${aluno[0]}: ${mediaAluno.toFixed(2)}`);

}

let mediaTurma = somaMedias / 3;

console.log('Media da turma: ' + mediaTurma.toFixed(2));
console.log('Melhor aluno: ' + melhorAluno + " com média " + mediaMelhorAluno.toFixed(2));*/
