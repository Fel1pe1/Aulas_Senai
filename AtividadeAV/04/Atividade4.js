let nomes = []
let notas = []
let media = 0
let quantidade = 0
let soma = 0

for(i = 0; i < 5; i ++){
    let nome = prompt("Digite o nome:")
    nomes.push(nome)
    let nota = Number(prompt("Digite a nota:"))
    notas.push(nota)

    if(nota > 5){
        soma = soma + nota //6
        quantidade ++ //1
    }
    
}
alert(media = soma / quantidade)
