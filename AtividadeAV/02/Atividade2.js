// 2) Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba-
// o.
// Modifique os elementos do array de modo que a sequência de números fique do contrário.
// Ou seja, se digitou: 1,2,3
// Vai aparecer: 3,2,1

let numeros = []
let opcao = 0
while(opcao < 3){
    let numerosUsuario = prompt("Escolha três Numeros")
    numeros.push(numerosUsuario)
    opcao ++
}
alert(numeros.reverse())
