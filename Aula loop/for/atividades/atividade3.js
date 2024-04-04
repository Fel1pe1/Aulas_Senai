let numeroEscolhido= prompt("escolha um numero para tabuada")
let soma= 0
for(let i= 0; i <=10; i++){
    soma = i * numeroEscolhido
    alert(`${numeroEscolhido} x ${i} = ${soma} `)
}