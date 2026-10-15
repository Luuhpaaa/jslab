console.log("JavaScript carregado com sucesso!");

const nome = "Carlos";
const idade = 24;
const aprovado = true;
const endereco = undefined;
const observacao = null;



const mensagem =
    `Nome: ${nome} | Idade: ${idade}`;

console.log(mensagem);

const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

const resultado1 = 10 + 5 * 2;
const resultado2 = (10 + 5) * 2;

console.log(resultado1);
console.log(resultado2);

const quantidade = 10;

console.log(quantidade === 10);
console.log(quantidade !== 10);

const nota = 75;
if (nota >= 60) {
    console.log("Aprovado");
}

console.log("Informação");
console.warn("Atenção");
console.error("Erro");