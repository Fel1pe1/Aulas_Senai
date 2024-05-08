let botao, quebralinha
let tabuleiro = new Array(3)
for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(3)
}

for(let i = 0; i < tabuleiro.length; i++){
    quebralinha = document.createElement('br')
    document.body.append(quebralinha)
    for(let j = 0; j < tabuleiro[i].length; j++){
        botao = document.createElement('button')
        botao.setAttribute('type', 'button')
        botao.setAttribute('id', 'bt' + i + "" + j )
        botao.setAttribute('class', 'btjogo'+ i)
        botao.setAttribute('onclick', '')
        botao.append(document.createTextNode(""))
        document.body.append(botao)
    }
}
