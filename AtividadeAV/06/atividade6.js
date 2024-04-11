let array1 = []
let array2 = []

for(let i= 0; i <10; i++){
    let opcao = Number(prompt("Escolha 10 numeros:"))
    array1.push(opcao)

    if(opcao %2 != 0){
        array2.push(opcao)

    }
}
alert(array2)