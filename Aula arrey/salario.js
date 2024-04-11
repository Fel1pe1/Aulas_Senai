let funci = ["eu", "yo", "i", "mi"]
let salario = []
salario[0]= 1232.83
salario[1]= 2313.12
salario[2]= 1233.45
salario[3]= 4533.56
let maior = 0
let indiCeMaior
for(i = 0; i< salario.length; i++){
    if(salario[i] > maior){
        maior = salario[i]
        indiCeMaior = i
    }
}
console.log(funci[indiCeMaior])