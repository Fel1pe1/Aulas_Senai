// let contador
// contador= 0 

// while (contador <10) {
//     console.log("foo " + contador)
//     contador+= 5

// }

let nome = "", acumulador= ""
while(nome != "pare"){
    nome = prompt("escreva um nome ou pare")
    nome = nome.toLowerCase(nome)
    if(nome != "pare"){
        acumulador += nome + ", " 
    }
}
alert(acumulador)
