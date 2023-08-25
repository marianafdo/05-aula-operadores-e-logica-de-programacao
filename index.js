let nome = prompt("Qual seu nome?");
let anoNascimento = prompt("Qual o ano do seu nascimento?");
let anoAtual = prompt("Ano atual");

console.log("Nome:", nome);
console.log("Idade", (anoAtual - anoNascimento));
console.log("É maior de idade?", ((anoAtual - anoNascimento) >=18));
console.log("Idade em 2050:", (2050 - anoNascimento));
