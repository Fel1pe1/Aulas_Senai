let botao, quebralinha, jogada = 1

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
        botao.setAttribute('onclick', 'marca(' + i + "," + j + ")")
        botao.append(document.createTextNode(""))
        document.body.append(botao)
    }
}

function marca(linha, coluna){
    marcarCasa("bt" + linha + "" + coluna)
}

function marcarCasa(nomeBotao){
    if (jogada % 2 ==0){
        document.getElementById(nomeBotao).innerText = "🐯"
    }else{
        document.getElementById(nomeBotao).innerText = "🐔"
    }
    document.getElementById(nomeBotao).disabled = true
    jogada++
    if(jogada >= 5){
        encerraJogo()
    }
}

function encerraJogo(){
    // colunas
    if(document.getElementById("bt00").innerText == document.getElementById("bt01").innerText && document.getElementById("bt01").innerText == document.getElementById("bt02").innerText  && document.getElementById("bt00").innerText != "" ){
        alert("jogo finalizado \n Vencedor" + document.getElementById("bt00").innerText)
    }
    if(document.getElementById("bt10").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt12").innerText  && document.getElementById("bt10").innerText != "" ){
        alert("jogo finalizado \n Vencedor" + document.getElementById("bt10").innerText)
    }
    if(document.getElementById("bt20").innerText == document.getElementById("bt21").innerText && document.getElementById("bt21").innerText == document.getElementById("bt22").innerText  && document.getElementById("bt20").innerText != "" ){
        alert("jogo finalizado \n Vencedor" + document.getElementById("bt20").innerText)
    }

    // horizonte
    if(document.getElementById("bt00").innerText == document.getElementById("bt10").innerText && document.getElementById("bt10").innerText == document.getElementById("bt20").innerText  && document.getElementById("bt00").innerText != "" ){
        alert("jogo finalizado \n Vencedor" + document.getElementById("bt00").innerText)
    }
    if(document.getElementById("bt01").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt21").innerText  && document.getElementById("bt01").innerText != "" ){
        alert("jogo finalizado \n Vencedor" + document.getElementById("bt01").innerText)
    }
    if(document.getElementById("bt02").innerText == document.getElementById("bt12").innerText && document.getElementById("bt12").innerText == document.getElementById("bt22").innerText  && document.getElementById("bt02").innerText != "" ){
        alert("jogo finalizado \n Vencedor" + document.getElementById("bt02").innerText)
    }

    // diagonal
    if(document.getElementById("bt00").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt22").innerText  && document.getElementById("bt00").innerText != "" ){
        alert("jogo finalizado \n Vencedor" + document.getElementById("bt00").innerText)
    }
    if(document.getElementById("bt02").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt20").innerText  && document.getElementById("bt02").innerText != "" ){
        alert("jogo finalizado \n Vencedor" + document.getElementById("bt02").innerText)
    }
   
}


function trocaFundo(url) {
            document.body.style.backgroundImage = 'url(' + url + ')';
            document.body.style.backgroundSize = 'cover';
}
