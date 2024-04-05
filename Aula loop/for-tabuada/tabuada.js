let numeroEscolhido= Number(prompt("escolha um numero para tabuada"))
let soma= ""
for(let i= 0; i <=10; i++){

    soma += numeroEscolhido + 'x' + i + '=' + (numeroEscolhido * i) + "\n"
}
alert(soma)