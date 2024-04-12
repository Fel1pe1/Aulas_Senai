let nomes= []
let notas= []
let soma= 0
let media= 0
let boletim

while(boletim != 4){
    boletim= Number(prompt("escolha uma função"))
    switch(boletim){
        case 1:
            let nomeDoUsuario = prompt("diga o nome do aluno")
            nomes.push(nomeDoUsuario)
            let  notaDoUsuario = Number(prompt("Digite a nota do aluno"))
            notas.push(notaDoUsuario)
            alert("nome e nota adicionado")
        break;

        case 2:
            for(c = 0; c< nomes.length; c++)
            alert(nomes[i + "tirou" + notas[1]])
        break;

        case 3:
           for(let i = 0; i < notas.length; i++){
               soma += notas[i]
            } 
            alert(soma)
    }
}