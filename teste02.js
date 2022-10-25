/*
1. Você deve solicitar apenas o nome e idade do seu usuário e salvar em
variáveis
2. Com o valor da idade em mãos, crie uma variável AnoNascimento e grave o
ano de nascimento do usuário, considerando o ano atual como 2022.
3. Com esses dados você deve exibir o seguinte texto, substituindo com os
valores recebidos: Olá NOMEUSUARIO, você tem IDADE anos que é um
número (PAR OU IMPAR de acordo com a idade) e nasceu no ano:
AnoNascimento que é um número (PAR OU IMPAR de acordo com a idade)
4. Se o usuário já for maior de idade, em outra linha você deve exibir: “Está
liberado o consumo de bebidas alcoólicas"'
*/

var nomeUsuario
var idade
anoAtual = 2022
nomeUsuario = prompt("Insira a seu nome")
idade = prompt("Insira sua idade")
var anoNascimento = 2022 - idade
var idadeParImpar
var anoParImpar 

if(idade % 2 == 0){
    idadeParImpar = "Par"
}else {
    idadeParImpar = "Ímpar"
}

if(anoNascimento % 2 == 0){
    anoParImpar = "Par"
}else {
    anoParImpar = "Ímpar"
}

console.log("Olá ", nomeUsuario, " você tem ", idade, " anos você nasceu no ano: ", anoNascimento, " sua idade é ", idadeParImpar, " e o ano que você nasceu é ", anoParImpar, "!")

if(idade >= 18){
    console.log("Está liberado o consumo de bebidas alcoólicas!")
}else {
    console.log("Não está liberado o consumo de bebidas!")
}