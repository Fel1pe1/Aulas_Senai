// 2 - RH do Henrique

// Imagine que você trabalha num banco e sua missão é fazer um algoritmo para prever o aumento de salário de seus clientes.

// 1 - Peça para seu cliente informar seu nome, idade e salário atual e exiba essas informações em tela.
// 2 - Peça para que seu cliente confirme as informações, se ele informar que digitou errado, peça para colocar TODAS as informações novamente, repita as perguntas até o usuário informar que digitou as informações corretamente.
// 3 - Faça a previsão do salário dele para os próximos 10 anos considerando que:
//     - O cliente recebe anualmente aumento salarial. 
//     - Sabe-se que: no primeiro ano, ele receberá um aumento de 1,5%, sobre o seu salário atual; A partir do segundo ano, os aumentos salariais sempre corresponderam ao dobro do percentual do ano anterior. Apresente todos os valores com o ano correspondente. Ex: 2024 - R$1600.

let nome, idade,salarioAtual,comfirm
let contador = 1.5/100
while( confirm != "confirmo"){
    nome =prompt("Digite seu nome")
    idade = prompt("Digite sua idade")
    salarioAtual = Number(prompt("digite seu salario"))
    alert(`seu nome é ${nome}, sua idade é ${idade} anos e seu salario é ${salarioAtual} R$`)
    confirm = prompt("digite confirmo para terminar")
}

let comeco = Number(prompt("em que ano você começou?"))
let anofim = comeco + 10
for(let i = comeco; i <= anofim; i++){
    salariofinal = salarioAtual + (salarioAtual * contador)
    contador = contador * 2
    alert(`${i}-- seu salario atual é ${salarioAtual}, dito isso ta ricão muleko, oia teu money ${salariofinal}`)
}