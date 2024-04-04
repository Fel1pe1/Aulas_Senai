let numero= prompt("quanto numeros vc quer?")
let contador= 0
let soma= 0
let media= 0



while(contador < numero){
    let numeros= Number(prompt("digite um valor:"))
    soma += numeros
    media = soma / numero
    contador++
}
alert("sua media é " + media.toFixed(2))